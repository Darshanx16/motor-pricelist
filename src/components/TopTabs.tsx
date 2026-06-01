import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme, COLORS } from '../theme';

interface TopTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const TopTabs: React.FC<TopTabsProps> = ({ activeTab, onTabChange }) => {
  const { colors } = useTheme();
  
  const tabs = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'siemens', label: 'Siemens' },
    { id: 'crompton', label: 'Crompton' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.bgElevated, borderBottomColor: colors.border }]}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <TouchableOpacity
            key={tab.id}
            onPress={() => onTabChange(tab.id)}
            style={[
              styles.tab, 
              isActive && { borderBottomColor: colors.primaryRed }
            ]}
          >
            <Text style={[
              styles.tabText, 
              { color: isActive ? colors.primaryRed : colors.textMuted },
              isActive && styles.tabTextActive
            ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.bgElevated,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabActive: {
    borderBottomColor: COLORS.primaryRed,
  },
  tabText: {
    fontWeight: '500',
    color: COLORS.textMuted,
  },
  tabTextActive: {
    fontWeight: '700',
    color: COLORS.primaryRed,
  },
});
