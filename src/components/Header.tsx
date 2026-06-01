import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal, Switch, Platform, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '../theme';
import { useMotorData } from '../hooks/useMotorData';
import * as DocumentPicker from 'expo-document-picker';
import { readExcelFile, parseSiemensExcel, parseCromptonExcel } from '../utils/excelParser';

interface HeaderProps {
  onExportPDF?: () => void;
  showExport?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onExportPDF, showExport }) => {
  const { isDark, colors, toggleTheme } = useTheme();
  const { updateData, clearAllData } = useMotorData();
  const [modalVisible, setModalVisible] = useState(false);

  const handleImportExcel = async (brand: 'siemens' | 'crompton') => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: [
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 
          'application/vnd.ms-excel'
        ],
        copyToCacheDirectory: true,
      });
      if (!result.canceled && result.assets && result.assets.length > 0) {
        const fileUri = result.assets[0].uri;
        console.log(`Importing ${brand} excel from ${fileUri}`);
        
        // Use Platform to detect web vs native and parse
        const workbook = await readExcelFile(fileUri);
        
        let parsedData: any[] = [];
        if (brand === 'siemens') {
          parsedData = parseSiemensExcel(workbook);
        } else {
          parsedData = parseCromptonExcel(workbook);
        }

        if (parsedData.length > 0) {
          const success = await updateData(brand, parsedData);
          if (success) {
            alert(`Success! Imported ${parsedData.length} ${brand} motors.`);
          }
        } else {
          alert(`Warning: No valid data found in that ${brand} Excel file. Check format.`);
        }
        setModalVisible(false);
      }
    } catch (err) {
      console.log('Error importing excel:', err);
      alert('Error parsing Excel file. See console for details.');
    }
  };

  return (
    <View style={[styles.header, { backgroundColor: colors.bgElevated, borderBottomColor: colors.border }]}>
      <View style={[styles.headerInner, { maxWidth: 800, width: '100%', alignSelf: 'center' }]}>
        {/* Brand */}
        <View style={styles.brandContainer}>
          <Image 
            source={require('../../assets/logo_transparent.png')} 
            style={styles.logoImage} 
            resizeMode="contain"
          />
          <Text style={[styles.brandText, { color: isDark ? colors.text : '#193f66' }]}>
            MOTOR PRICELIST
          </Text>
        </View>

        {/* Actions */}
        <View style={styles.actionsContainer}>
          {showExport && onExportPDF && (
            <TouchableOpacity onPress={onExportPDF} style={[styles.actionBtn, { borderColor: colors.border }]}>
              <Feather name="download" color={colors.text} size={20} />
              <Text style={[styles.exportText, { color: colors.text }]}>PDF</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity 
            style={[styles.actionBtn, { marginLeft: 8, paddingHorizontal: 10, borderColor: colors.border }]}
            onPress={() => setModalVisible(true)}
          >
            <Feather name="settings" color={colors.text} size={20} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Settings Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={() => setModalVisible(false)}>
          <View style={[styles.modalContent, { backgroundColor: colors.bgElevated, borderColor: colors.border }]}>
            <Text style={[styles.modalTitle, { color: colors.text }]}>Settings</Text>
            
            <View style={styles.settingRow}>
              <Text style={[styles.settingLabel, { color: colors.text }]}>Dark Mode</Text>
              <Switch
                trackColor={{ false: colors.border, true: colors.secondaryBlue }}
                thumbColor={'#fff'}
                onValueChange={toggleTheme}
                value={isDark}
              />
            </View>

            <TouchableOpacity 
              style={[styles.importBtn, { backgroundColor: colors.primaryRed, marginBottom: 12 }]} 
              onPress={() => handleImportExcel('siemens')}
            >
              <Feather name="upload" color="#fff" size={18} style={{ marginRight: 8 }} />
              <Text style={styles.importBtnText}>Import Siemens List</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.importBtn, { backgroundColor: colors.secondaryBlue, marginBottom: 24 }]} 
              onPress={() => handleImportExcel('crompton')}
            >
              <Feather name="upload" color="#fff" size={18} style={{ marginRight: 8 }} />
              <Text style={styles.importBtnText}>Import Crompton List</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.importBtn, { backgroundColor: 'transparent', borderWidth: 1, borderColor: colors.primaryRed, marginTop: 12 }]} 
              onPress={async () => {
                const performClear = async () => {
                  await clearAllData();
                  alert('All stored price data has been successfully removed.');
                  setModalVisible(false);
                };

                if (Platform.OS === 'web') {
                  const confirmed = window.confirm("Are you sure you want to remove all stored price data? You will need to import new Excel files to view prices.");
                  if (confirmed) await performClear();
                } else {
                  Alert.alert(
                    "Remove Data",
                    "Are you sure you want to remove all stored price data? You will need to import new Excel files to view prices.",
                    [
                      { text: "Cancel", style: "cancel" },
                      { text: "Remove", style: "destructive", onPress: performClear }
                    ]
                  );
                }
              }}
            >
              <Feather name="trash-2" color={colors.primaryRed} size={18} style={{ marginRight: 8 }} />
              <Text style={[styles.importBtnText, { color: colors.primaryRed }]}>Remove Stored Data</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    paddingTop: 50, // Safe area approximation
  },
  headerInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  brandText: {
    fontWeight: '800',
    fontSize: 18,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 9999,
    borderWidth: 1,
  },
  exportText: {
    marginLeft: 6,
    fontSize: 12,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  modalContent: {
    width: '100%',
    maxWidth: 400,
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 24,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  importBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },
  importBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
