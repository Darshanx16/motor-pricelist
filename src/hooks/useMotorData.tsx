import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { siemensMotors as defaultSiemens, SiemensMotor } from '../data/siemensMotors';
import { cromptonMotors as defaultCrompton, CromptonMotor } from '../data/cromptonMotors';

const ASYNC_STORAGE_KEYS = {
  siemens: '@motors_siemens',
  crompton: '@motors_crompton',
};

interface MotorDataContextType {
  siemensData: SiemensMotor[];
  cromptonData: CromptonMotor[];
  loading: boolean;
  updateData: (brand: 'siemens' | 'crompton', newData: any[]) => Promise<boolean>;
  clearAllData: () => Promise<boolean>;
}

export const MotorDataContext = createContext<MotorDataContextType>({
  siemensData: defaultSiemens,
  cromptonData: defaultCrompton,
  loading: true,
  updateData: async () => false,
  clearAllData: async () => false,
});

export const MotorDataProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [siemensData, setSiemensData] = useState<SiemensMotor[]>([]);
  const [cromptonData, setCromptonData] = useState<CromptonMotor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAll = async () => {
      try {
        const migrationDone = await AsyncStorage.getItem('@motors_migrated_2026_v2');

        const sData = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.siemens);
        let parsedSiemens = sData ? JSON.parse(sData) : null;

        const cData = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.crompton);
        let parsedCrompton = cData ? JSON.parse(cData) : null;

        if (!migrationDone) {
          // Perform one-time migration to load our complete default database arrays
          parsedSiemens = defaultSiemens;
          parsedCrompton = defaultCrompton;
          await Promise.all([
            AsyncStorage.setItem(ASYNC_STORAGE_KEYS.siemens, JSON.stringify(defaultSiemens)),
            AsyncStorage.setItem(ASYNC_STORAGE_KEYS.crompton, JSON.stringify(defaultCrompton)),
            AsyncStorage.setItem('@motors_migrated_2026_v2', 'true')
          ]);
        }

        setSiemensData(parsedSiemens || []);
        setCromptonData(parsedCrompton || []);
      } catch (err) {
        console.error('Failed to load storage', err);
        setSiemensData(defaultSiemens);
        setCromptonData(defaultCrompton);
      } finally {
        setLoading(false);
      }
    };
    loadAll();
  }, []);

  const updateData = async (brand: 'siemens' | 'crompton', newData: any[]) => {
    try {
      await AsyncStorage.setItem(ASYNC_STORAGE_KEYS[brand], JSON.stringify(newData));
      if (brand === 'siemens') setSiemensData(newData);
      else setCromptonData(newData);
      return true;
    } catch (error) {
      console.error(`Failed to save ${brand} data`, error);
      return false;
    }
  };

  const clearAllData = async () => {
    try {
      await Promise.all([
        AsyncStorage.setItem(ASYNC_STORAGE_KEYS.siemens, JSON.stringify([])),
        AsyncStorage.setItem(ASYNC_STORAGE_KEYS.crompton, JSON.stringify([]))
      ]);
      setSiemensData([]);
      setCromptonData([]);
      return true;
    } catch (error) {
      console.error('Failed to clear data', error);
      return false;
    }
  };

  return (
    <MotorDataContext.Provider value={{ siemensData, cromptonData, loading, updateData, clearAllData }}>
      {children}
    </MotorDataContext.Provider>
  );
};

export const useMotorData = () => useContext(MotorDataContext);
