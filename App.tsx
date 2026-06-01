import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { Header } from './src/components/Header';
import { TopTabs } from './src/components/TopTabs';
import { DashboardScreen } from './src/screens/DashboardScreen';
import { SiemensScreen } from './src/screens/SiemensScreen';
import { CromptonScreen } from './src/screens/CromptonScreen';
import { ThemeProvider, useTheme } from './src/theme';
import { MotorDataProvider } from './src/hooks/useMotorData';

function AppContent() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { colors } = useTheme();

  const handleExportPDF = () => {
    // We will pass this down or use a global state/event manager if needed
    // In React Native, event listeners across components can be done via simple Context or global vars
    // For simplicity, we can define a global function the screens attach to
    const g = global as any;
    if (g.triggerExportPDF) {
      g.triggerExportPDF();
    }
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.bgElevated }]}>
      <Header 
        showExport={false} 
        onExportPDF={handleExportPDF} 
      />
      <TopTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <View style={[styles.content, { backgroundColor: colors.bg }]}>
        {activeTab === 'dashboard' && <DashboardScreen onNavigate={setActiveTab} />}
        {activeTab === 'siemens' && <SiemensScreen />}
        {activeTab === 'crompton' && <CromptonScreen />}
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MotorDataProvider>
        <AppContent />
      </MotorDataProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
