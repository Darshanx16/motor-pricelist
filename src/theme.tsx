import React, { createContext, useContext, useState, useEffect } from 'react';
import { StyleSheet, Appearance } from 'react-native';

export const lightColors = {
  bg: '#F5F7FA',
  bgElevated: '#FFFFFF',
  text: '#1a1a1a',
  textMuted: '#666666',
  primaryRed: '#981b22',
  primaryRedHover: '#7a151b',
  secondaryBlue: '#193f66',
  border: '#E0E0E0',
  success: '#28a745',
};

export const darkColors = {
  bg: '#121212',
  bgElevated: '#1E1E1E',
  text: '#E0E0E0',
  textMuted: '#A0A0A0',
  primaryRed: '#ff4d4d',
  primaryRedHover: '#cc0000',
  secondaryBlue: '#4da6ff',
  border: '#333333',
  success: '#28a745',
};

export type ThemeColors = typeof lightColors;

export const FONTS = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 24,
  hero: 32,
  weight: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    heavy: '800' as const,
  }
};

interface ThemeContextType {
  isDark: boolean;
  colors: ThemeColors;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  colors: lightColors,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isDark, setIsDark] = useState(Appearance.getColorScheme() === 'dark');

  const toggleTheme = () => setIsDark(!isDark);
  const colors = isDark ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ isDark, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

// Backwards compatibility items (Static)
export const COLORS = lightColors;

export const createGlobalStyles = (colors: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  responsiveWrapper: {
    flex: 1,
    width: '100%',
    maxWidth: 800,
    alignSelf: 'center',
  },
  card: {
    backgroundColor: colors.bgElevated,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: colors.border,
  },
  pillBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: colors.bgElevated,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: colors.border,
    alignSelf: 'center',
    marginBottom: 16,
  },
  btnPrimary: {
    backgroundColor: colors.primaryRed,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnPrimaryText: {
    color: '#FFF',
    fontWeight: FONTS.weight.semibold,
    fontSize: FONTS.base,
  },
  btnSecondary: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSecondaryText: {
    color: colors.text,
    fontWeight: FONTS.weight.semibold,
    fontSize: FONTS.sm,
  },
  title: {
    fontSize: FONTS.hero,
    fontWeight: FONTS.weight.heavy,
    color: colors.text,
    textAlign: 'center',
    marginBottom: 16,
  },
  textRed: {
    color: colors.primaryRed,
  },
  textBlue: {
    color: colors.secondaryBlue,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bgElevated,
    borderRadius: 9999,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    marginLeft: 8,
    fontSize: FONTS.base,
    color: colors.text,
    outlineStyle: 'none' as any,
  },
});

export const globalStyles = createGlobalStyles(lightColors);
