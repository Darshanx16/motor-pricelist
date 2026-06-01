import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme, globalStyles, FONTS, COLORS } from '../theme';

interface DashboardScreenProps {
  onNavigate: (tab: string) => void;
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({ onNavigate }) => {
  const { colors } = useTheme();

  const dynamicStyles = {
    badgeText: [styles.badgeText, { color: colors.text }],
    subtitle: [styles.subtitle, { color: colors.textMuted }],
    actionCard: [styles.actionCard, { backgroundColor: colors.bgElevated, borderColor: colors.border }],
    actionCardTitle: [styles.actionCardTitle, { color: colors.textMuted }],
    statValue: [styles.statValue, { color: colors.text }],
    statLabel: [styles.statLabel, { color: colors.textMuted }],
    btnPrimaryText: [globalStyles.btnPrimaryText, { color: '#FFF' }],
    btnSecondaryText: [globalStyles.btnSecondaryText, { color: colors.text }],
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, globalStyles.responsiveWrapper, { backgroundColor: colors.bg }]}>
      {/* Pill Badge */}
      <View style={[globalStyles.pillBadge, { backgroundColor: colors.bgElevated, borderColor: colors.border }]}>
        <View style={styles.dot} />
        <Text style={dynamicStyles.badgeText}>Updated 2026 Price Lists</Text>
      </View>

      {/* Hero Title */}
      <Text style={globalStyles.title}>
        <Text style={globalStyles.textRed}>Siemens</Text> &{' '}
        <Text style={globalStyles.textBlue}>Crompton</Text>
      </Text>

      <Text style={dynamicStyles.subtitle}>
        Calculate precise discounts, apply flange add-ons, and export instantly to PDF.
      </Text>

      {/* Quick Actions */}
      <View style={dynamicStyles.actionCard}>
        <Text style={dynamicStyles.actionCardTitle}>Select Brand to Configure</Text>
        <TouchableOpacity
          style={[globalStyles.btnPrimary, { marginBottom: 12, backgroundColor: colors.primaryRed }]}
          onPress={() => onNavigate('siemens')}
        >
          <Text style={dynamicStyles.btnPrimaryText}>Siemens Motors</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[globalStyles.btnSecondary, { borderColor: colors.border }]}
          onPress={() => onNavigate('crompton')}
        >
          <Text style={dynamicStyles.btnSecondaryText}>Crompton Motors</Text>
        </TouchableOpacity>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={dynamicStyles.statValue}>IE2-IE4</Text>
          <Text style={dynamicStyles.statLabel}>Supported</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={dynamicStyles.statValue}>Instant</Text>
          <Text style={dynamicStyles.statLabel}>Calculations</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={dynamicStyles.statValue}>1-Click</Text>
          <Text style={dynamicStyles.statLabel}>PDF Export</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 40,
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primaryRed,
    marginRight: 8,
  },
  badgeText: {
    fontSize: FONTS.xs,
    fontWeight: FONTS.weight.semibold,
    color: COLORS.text,
  },
  subtitle: {
    fontSize: FONTS.base,
    color: COLORS.textMuted,
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  actionCard: {
    backgroundColor: COLORS.bgElevated,
    borderRadius: 16,
    padding: 24,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  actionCardTitle: {
    fontSize: FONTS.base,
    fontWeight: FONTS.weight.semibold,
    color: COLORS.textMuted,
    textAlign: 'center',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 8,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: FONTS.xl,
    fontWeight: FONTS.weight.heavy,
    color: COLORS.text,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: FONTS.xs,
    color: COLORS.textMuted,
  },
});
