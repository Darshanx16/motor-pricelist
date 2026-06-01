import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Keyboard } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme, globalStyles } from '../theme';

interface GlobalSearchProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  placeholder?: string;
}

export const GlobalSearch: React.FC<GlobalSearchProps> = ({
  searchQuery,
  setSearchQuery,
  placeholder = "Search (e.g. '0.37kw 2p 71')",
}) => {
  const { colors } = useTheme();

  return (
    <View style={[globalStyles.searchContainer, { backgroundColor: colors.bgElevated, borderColor: colors.border }]}>
      <Feather name="search" color={colors.textMuted} size={20} />
      <TextInput
        style={[globalStyles.searchInput, { color: colors.text }]}
        placeholder={placeholder}
        placeholderTextColor={colors.textMuted}
        value={searchQuery}
        onChangeText={setSearchQuery}
        returnKeyType="search"
        onSubmitEditing={() => Keyboard.dismiss()}
      />
      <TouchableOpacity 
        style={[globalStyles.btnPrimary, { paddingVertical: 8, paddingHorizontal: 16, backgroundColor: colors.primaryRed }] as any}
        onPress={() => Keyboard.dismiss()}
      >
        <Text style={[globalStyles.btnPrimaryText, { fontSize: 14, color: '#FFFFFF' }] as any}>Find</Text>
      </TouchableOpacity>
    </View>
  );
};
