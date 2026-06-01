import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, Switch, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { GlobalSearch } from '../components/GlobalSearch';
import { siemensMotors, SiemensMotor } from '../data/siemensMotors';
import { exportToPDFMobile } from '../utils/exportUtils';
import { useTheme, globalStyles, FONTS, COLORS } from '../theme';
import { useMotorData } from '../hooks/useMotorData';

export const SiemensScreen: React.FC = () => {
  const { colors, isDark } = useTheme();
  const { siemensData } = useMotorData();

  const [searchQuery, setSearchQuery] = useState('');
  const [motorState, setMotorState] = useState<Record<string, { flange: boolean; discountPercent: number; discountInput?: string }>>({});

  const handleFlangeToggle = (id: string) => {
    setMotorState(prev => ({
      ...prev,
      [id]: { ...prev[id], flange: !prev[id]?.flange, discountPercent: prev[id]?.discountPercent || 0 }
    }));
  };

  const handleDiscountInputChange = (id: string, text: string) => {
    setMotorState(prev => ({
      ...prev,
      [id]: { ...prev[id], discountInput: text, flange: prev[id]?.flange || false, discountPercent: prev[id]?.discountPercent || 0 }
    }));
  };

  const applyDiscount = (id: string) => {
    setMotorState(prev => {
      const state = prev[id] || { flange: false, discountPercent: 0 };
      if (state.discountInput === undefined) return prev;
      const val = parseFloat(state.discountInput);
      return {
        ...prev,
        [id]: { ...state, discountPercent: isNaN(val) ? 0 : Math.max(0, val) }
      };
    });
  };

  const getSubtotal = (motor: SiemensMotor) => {
    const st = motorState[motor.id];
    let price = motor.basePrice;
    if (st?.flange) price += motor.flangePrice;
    return price;
  };

  const getFinalPrice = (motor: SiemensMotor) => {
    const subtotal = getSubtotal(motor);
    const discount = motorState[motor.id]?.discountPercent || 0;
    return subtotal * (1 - discount / 100);
  };

  const getDiscountedMotorsData = useCallback(() => {
    const discountedList = siemensData.filter(m => (motorState[m.id]?.discountPercent || 0) > 0);
    return discountedList.map(m => {
      const hasFlange = motorState[m.id]?.flange || false;
      const discount = motorState[m.id]?.discountPercent || 0;
      return {
        'Brand': 'Siemens',
        'Type': m.type,
        'Poles': m.poles,
        'Output (KW)': m.outputKw,
        'Output (HP)': m.outputHp,
        'Frame': m.frame,
        'Base Price (Rs)': m.basePrice.toFixed(2),
        'Flange Added': hasFlange ? 'Yes' : 'No',
        'Flange Price (Rs)': hasFlange ? m.flangePrice.toFixed(2) : '0.00',
        'Discount (%)': discount.toFixed(2) + '%',
        'Final Price (Rs)': getFinalPrice(m).toFixed(2)
      };
    });
  }, [motorState]);

  const handleExportCardPDF = (motor: SiemensMotor) => {
    const hasFlange = motorState[motor.id]?.flange || false;
    const discount = motorState[motor.id]?.discountPercent || 0;
    const finalPrice = getFinalPrice(motor);
    
    const row = {
      'Brand': 'Siemens',
      'Type': motor.type,
      'Poles': motor.poles,
      'Output (KW)': motor.outputKw,
      'Output (HP)': motor.outputHp,
      'Frame': motor.frame,
      'Base Price (Rs)': motor.basePrice.toFixed(2),
      'Flange Added': hasFlange ? 'Yes' : 'No',
      'Flange Price (Rs)': hasFlange ? motor.flangePrice.toFixed(2) : '0.00',
      'Discount (%)': discount.toFixed(2) + '%',
      'Final Price (Rs)': finalPrice.toFixed(2)
    };

    exportToPDFMobile(`Siemens Motor - ${motor.outputKw}KW`, [row]);
  };

  useEffect(() => {
    // global ref for export
    (global as any).triggerExportPDF = () => {
      exportToPDFMobile('Siemens Motors Quotation', getDiscountedMotorsData());
    };
    return () => {
      delete (global as any).triggerExportPDF;
    };
  }, [getDiscountedMotorsData]);

  const [selectedType, setSelectedType] = useState<'All' | 'IE2' | 'IE3' | 'IE4'>('All');

  const terms = searchQuery.toLowerCase().split(' ').filter(t => t.trim() !== '');
  const filteredMotors = siemensData.filter(motor => {
    if (selectedType !== 'All' && motor.type !== selectedType) return false;
    if (terms.length === 0) return true;
    const motorStr = `${motor.type} ${motor.poles}pole ${motor.outputKw}kw ${motor.outputHp}hp ${motor.frame}`.toLowerCase();
    return terms.every(term => motorStr.includes(term));
  });

  const renderItem = ({ item }: { item: SiemensMotor }) => {
    const state = motorState[item.id] || { flange: false, discountPercent: 0 };
    const finalPrice = getFinalPrice(item);

    return (
      <View style={globalStyles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardType}>{item.type}</Text>
          <Text style={styles.cardFrame}>{item.poles}P • Frame {item.frame}</Text>
        </View>

        <Text style={styles.outputTitle}>{item.outputKw} KW / {item.outputHp} HP</Text>
        <Text style={styles.basePrice}>Base: ₹{item.basePrice.toLocaleString()}</Text>

        <View style={styles.separator} />

        <View style={styles.row}>
          <Text style={[styles.settingsLabel, { color: colors.text }]}>Flange (+₹{item.flangePrice.toLocaleString()})</Text>
          <Switch
            trackColor={{ false: colors.border, true: colors.primaryRed }}
            thumbColor={'#fff'}
            onValueChange={() => handleFlangeToggle(item.id)}
            value={state.flange}
          />
        </View>

        <View style={[styles.row, { marginTop: 12 }]}>
          <Text style={styles.settingsLabel}>Discount (%)</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              style={[
                styles.input,
                { backgroundColor: colors.bg, color: colors.text, outlineStyle: 'none' as any },
                state.discountPercent > 0 && { borderColor: 'transparent' },
                { marginRight: 8 }
              ]}
              keyboardType="numeric"
              placeholder="0"
              placeholderTextColor={colors.textMuted}
              value={state.discountInput !== undefined ? state.discountInput : (state.discountPercent === 0 ? '' : state.discountPercent.toString())}
              onChangeText={(text) => handleDiscountInputChange(item.id, text)}
            />
            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => applyDiscount(item.id)}
            >
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.finalPriceContainer, { borderTopColor: colors.border }]}>
          <View style={{ flex: 1, alignItems: 'flex-start' }}>
            <Text style={[styles.finalLabel, { color: colors.text }]}>Final Price</Text>
            <TouchableOpacity
              style={[styles.pdfButton, { borderColor: colors.border }]}
              onPress={() => handleExportCardPDF(item)}
            >
              <Feather name="download" color={colors.text} size={14} style={{ marginRight: 6 }} />
              <Text style={[styles.pdfButtonText, { color: colors.text }]}>PDF</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={[styles.finalAmount, { color: colors.text }]}>₹{finalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
            {state.discountPercent > 0 && (
              <Text style={[styles.appliedLabel, { color: colors.secondaryBlue }]}>Discount Applied</Text>
            )}
          </View>
        </View>
      </View>
    );
  };

  const dynamicStyles = {
    cardType: [styles.cardType, { color: colors.primaryRed }],
    cardFrame: [styles.cardFrame, { color: colors.textMuted }],
    outputTitle: [styles.outputTitle, { color: colors.text }],
    basePrice: [styles.basePrice, { color: colors.textMuted }],
    separator: [styles.separator, { backgroundColor: colors.border }],
    screenTitle: [styles.screenTitle, { color: colors.text }],
    applyButton: [styles.applyButton, { backgroundColor: colors.secondaryBlue }],
    emptyText: [styles.emptyText, { color: colors.textMuted }]
  };

  return (
    <View style={[globalStyles.container, { backgroundColor: colors.bg }]}>
      <View style={globalStyles.responsiveWrapper}>
        <View style={styles.headerArea}>
          <Text style={dynamicStyles.screenTitle}>Configuration</Text>
          <GlobalSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

          <View style={styles.chipsContainer}>
            {(['All', 'IE2', 'IE3', 'IE4'] as const).map((t) => (
              <TouchableOpacity
                key={t}
                style={[
                  styles.chip,
                  { borderColor: colors.border },
                  selectedType === t && { backgroundColor: colors.primaryRed, borderColor: colors.primaryRed }
                ]}
                onPress={() => setSelectedType(t)}
              >
                <Text style={[
                  styles.chipText,
                  { color: selectedType === t ? '#fff' : colors.textMuted }
                ]}>
                  {t}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <FlatList
          data={filteredMotors}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            const state = motorState[item.id] || { flange: false, discountPercent: 0 };
            const finalPrice = getFinalPrice(item);
            return (
              <View style={[globalStyles.card, { backgroundColor: colors.bgElevated, borderColor: colors.border }]}>
                <View style={styles.cardHeader}>
                  <Text style={dynamicStyles.cardType}>{item.type}</Text>
                  <Text style={dynamicStyles.cardFrame}>{item.poles}P • Frame {item.frame}</Text>
                </View>

                <Text style={dynamicStyles.outputTitle}>{item.outputKw} KW / {item.outputHp} HP</Text>
                <Text style={dynamicStyles.basePrice}>Base: ₹{item.basePrice.toLocaleString()}</Text>

                <View style={dynamicStyles.separator} />

                <View style={styles.row}>
                  <Text style={[styles.settingsLabel, { color: colors.text }]}>Flange (+₹{item.flangePrice.toLocaleString()})</Text>
                  <Switch
                    trackColor={{ false: colors.border, true: colors.primaryRed }}
                    thumbColor={'#fff'}
                    onValueChange={() => handleFlangeToggle(item.id)}
                    value={state.flange}
                  />
                </View>

                <View style={[styles.row, { marginTop: 12 }]}>
                  <Text style={[styles.settingsLabel, { color: colors.text }]}>Discount (%)</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput
                      style={[
                        styles.input,
                        { 
                          borderColor: colors.border, 
                          color: colors.text,
                          backgroundColor: colors.bg,
                          outlineStyle: 'none' as any,
                        },
                        state.discountPercent > 0 && { borderColor: 'transparent' },
                        { marginRight: 8 }
                      ]}
                      keyboardType="numeric"
                      placeholder="0"
                      placeholderTextColor={colors.textMuted}
                      value={state.discountInput !== undefined ? state.discountInput : (state.discountPercent === 0 ? '' : state.discountPercent.toString())}
                      onChangeText={(text) => handleDiscountInputChange(item.id, text)}
                    />
                    <TouchableOpacity
                      style={dynamicStyles.applyButton}
                      onPress={() => applyDiscount(item.id)}
                    >
                      <Text style={styles.applyButtonText}>Apply</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                 <View style={[styles.finalPriceContainer, { borderTopColor: colors.border }]}>
                  <View style={{ flex: 1, alignItems: 'flex-start' }}>
                    <Text style={[styles.finalLabel, { color: colors.text }]}>Final Price</Text>
                    <TouchableOpacity
                      style={[styles.pdfButton, { borderColor: colors.border }]}
                      onPress={() => handleExportCardPDF(item)}
                    >
                      <Feather name="download" color={colors.text} size={14} style={{ marginRight: 6 }} />
                      <Text style={[styles.pdfButtonText, { color: colors.text }]}>PDF</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ alignItems: 'flex-end' }}>
                    <Text style={[styles.finalAmount, { color: colors.text }]}>₹{finalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
                    {state.discountPercent > 0 && (
                      <Text style={[styles.appliedLabel, { color: colors.secondaryBlue }]}>Discount Applied</Text>
                    )}
                  </View>
                </View>
              </View>
            );
          }}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <Text style={dynamicStyles.emptyText}>No motors found matching "{searchQuery}"</Text>
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerArea: {
    padding: 16,
    paddingBottom: 0,
  },
  screenTitle: {
    fontSize: FONTS.xl,
    fontWeight: FONTS.weight.heavy,
    color: COLORS.text,
    marginBottom: 16,
  },
  listContent: {
    padding: 16,
    paddingBottom: 40,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardType: {
    fontSize: FONTS.sm,
    fontWeight: FONTS.weight.bold,
    color: COLORS.primaryRed,
  },
  cardFrame: {
    fontSize: FONTS.xs,
    color: COLORS.textMuted,
  },
  outputTitle: {
    fontSize: FONTS.lg,
    fontWeight: FONTS.weight.bold,
    color: COLORS.text,
    marginBottom: 4,
  },
  basePrice: {
    fontSize: FONTS.sm,
    color: COLORS.textMuted,
    marginBottom: 12,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingsLabel: {
    fontSize: FONTS.sm,
    fontWeight: FONTS.weight.medium,
    color: COLORS.text,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 38,
    width: 80,
    textAlign: 'center',
    color: COLORS.text,
  },
  inputActive: {
    borderColor: 'transparent',
  },
  finalPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 20,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  finalLabel: {
    fontSize: FONTS.base,
    fontWeight: FONTS.weight.semibold,
    color: COLORS.text,
  },
  finalAmount: {
    fontSize: FONTS.xl,
    fontWeight: FONTS.weight.heavy,
    color: COLORS.text,
  },
  appliedLabel: {
    fontSize: 10,
    color: COLORS.secondaryBlue,
    textAlign: 'right',
    marginTop: 2,
    fontWeight: FONTS.weight.semibold,
  },
  emptyText: {
    textAlign: 'center',
    color: COLORS.textMuted,
    marginTop: 40,
  },
  applyButton: {
    backgroundColor: COLORS.secondaryBlue,
    paddingHorizontal: 16,
    height: 38,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontSize: FONTS.sm,
    fontWeight: FONTS.weight.bold,
  },
  pdfButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 32,
    marginTop: 8,
  },
  pdfButtonText: {
    fontSize: FONTS.xs,
    fontWeight: FONTS.weight.bold,
  },
  chipsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 8,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 8,
  },
  chipText: {
    fontSize: FONTS.xs,
    fontWeight: FONTS.weight.bold,
  },
});
