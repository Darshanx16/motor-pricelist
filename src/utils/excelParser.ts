import * as XLSX from 'xlsx';
import * as FileSystem from 'expo-file-system';
import { Platform } from 'react-native';
import { SiemensMotor } from '../data/siemensMotors';
import { CromptonMotor } from '../data/cromptonMotors';

export const readExcelFile = async (uri: string): Promise<XLSX.WorkBook> => {
  let workbook: XLSX.WorkBook;
  if (Platform.OS === 'web') {
    const res = await fetch(uri);
    const ab = await res.arrayBuffer();
    workbook = XLSX.read(ab, { type: 'array' });
  } else {
    // For React Native Expo Android/iOS
    const b64 = await FileSystem.readAsStringAsync(uri, { encoding: 'base64' });
    workbook = XLSX.read(b64, { type: 'base64' });
  }
  return workbook;
};

// ============================================================
// SIEMENS PARSER — handles IE2, IE3, and IE4 sheets
// ============================================================

const parseSiemensSheet = (sheet: any, type: 'IE2' | 'IE3' | 'IE4'): SiemensMotor[] => {
  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as any[][];
  const motors: SiemensMotor[] = [];
  const isIE4 = type === 'IE4';

  let currentSection: 'main' | '6p' = 'main';

  for (let i = 0; i < rows.length; i++) {
    const r = rows[i];
    if (!r || r.length === 0) continue;

    // Detect section headers
    if (typeof r[0] === 'string') {
      if (r[0].toUpperCase().includes('6P') || r[0].toUpperCase().includes('6 P')) {
        currentSection = '6p';
      }
      continue;
    }

    if (typeof r[0] !== 'number') continue;

    if (currentSection === 'main') {
      if (isIE4) {
        // IE4 layout: KW(0), HP(1), FRAME(2), UNIT_LP(3), FLANGE_ADD(4), FOOT(5), FLANGE_TOTAL(6), null(7), null(8), KW(9), HP(10), FRAME(11), UNIT_LP(12), FLANGE_ADD(13), FOOT(14), FLANGE_TOTAL(15)
        if (typeof r[3] === 'number' && typeof r[5] === 'number') {
          motors.push({
            id: `S-${type}-2P-${String(r[0]).replace('.', '')}-${i}`,
            type, poles: 2, outputKw: r[0], outputHp: r[1],
            frame: String(r[2]),
            basePrice: r[5],
            flangePrice: typeof r[6] === 'number' ? Math.round((r[6] - r[5]) * 100) / 100 : 0
          });
        }
        if (r.length > 14 && typeof r[9] === 'number' && typeof r[12] === 'number' && typeof r[14] === 'number') {
          motors.push({
            id: `S-${type}-4P-${String(r[9]).replace('.', '')}-${i}`,
            type, poles: 4, outputKw: r[9], outputHp: r[10],
            frame: String(r[11]),
            basePrice: r[14],
            flangePrice: typeof r[15] === 'number' ? Math.round((r[15] - r[14]) * 100) / 100 : 0
          });
        }
      } else {
        // IE2/IE3 layout: KW(0), HP(1), FRAME(2), UNIT_LP(3), FLANGE_ADD(4), FOOT(5), FLANGE_TOTAL(6), null(7), KW(8), HP(9), FRAME(10), UNIT_LP(11), FLANGE_ADD(12), FOOT(13), FLANGE_TOTAL(14)
        if (typeof r[3] === 'number' && typeof r[5] === 'number') {
          motors.push({
            id: `S-${type}-2P-${String(r[0]).replace('.', '')}-${i}`,
            type, poles: 2, outputKw: r[0], outputHp: r[1],
            frame: String(r[2]),
            basePrice: r[5],
            flangePrice: typeof r[6] === 'number' ? Math.round((r[6] - r[5]) * 100) / 100 : 0
          });
        }
        if (r.length > 13 && typeof r[8] === 'number' && typeof r[11] === 'number' && typeof r[13] === 'number') {
          motors.push({
            id: `S-${type}-4P-${String(r[8]).replace('.', '')}-${i}`,
            type, poles: 4, outputKw: r[8], outputHp: r[9],
            frame: String(r[10]),
            basePrice: r[13],
            flangePrice: typeof r[14] === 'number' ? Math.round((r[14] - r[13]) * 100) / 100 : 0
          });
        }
      }
    } else if (currentSection === '6p') {
      if (typeof r[3] === 'number' && typeof r[5] === 'number') {
        motors.push({
          id: `S-${type}-6P-${String(r[0]).replace('.', '')}-${i}`,
          type, poles: 6, outputKw: r[0], outputHp: r[1],
          frame: String(r[2]),
          basePrice: r[5],
          flangePrice: typeof r[6] === 'number' ? Math.round((r[6] - r[5]) * 100) / 100 : 0
        });
      }
    }
  }
  return motors;
};

export const parseSiemensExcel = (workbook: XLSX.WorkBook): SiemensMotor[] => {
  const allMotors: SiemensMotor[] = [];

  workbook.SheetNames.forEach(sheetName => {
    const sheet = workbook.Sheets[sheetName];
    const upperName = sheetName.toUpperCase();

    let type: 'IE2' | 'IE3' | 'IE4' | null = null;
    if (upperName.includes('IE4')) type = 'IE4';
    else if (upperName.includes('IE3')) type = 'IE3';
    else if (upperName.includes('IE2')) type = 'IE2';

    if (type && sheet) {
      const motors = parseSiemensSheet(sheet, type);
      allMotors.push(...motors);
    }
  });

  return allMotors;
};

// ============================================================
// CROMPTON PARSER — handles IE2/IE3 2-4P and 6-8P sheets
// ============================================================

const parseCrompton24P = (sheet: any, type: 'IE2' | 'IE3'): CromptonMotor[] => {
  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as any[][];
  const motors: CromptonMotor[] = [];

  for (let i = 0; i < rows.length; i++) {
    const r = rows[i];
    if (!r || r.length === 0) continue;

    const kw = r[0];
    const hp = r[1];
    if (typeof kw !== 'number' || typeof hp !== 'number') continue;

    // 2P data (cols 2-5): FRAME, LIST PRICE, FOOT, FLANGE
    const frame2p = r[2];
    const listPrice2p = r[3];
    const foot2p = r[4];
    const flange2p = r[5];
    if (frame2p && typeof listPrice2p === 'number' && frame2p !== 'NIL' && listPrice2p !== 'NIL') {
      let addonType: '3%' | '5%' | 'NIL' = 'NIL';
      if (typeof flange2p === 'number' && typeof foot2p === 'number' && foot2p > 0) {
        const pct = Math.round(((flange2p / foot2p) - 1) * 100);
        if (pct === 3) addonType = '3%';
        else if (pct === 5) addonType = '5%';
      }
      motors.push({
        id: `C-${type}-2P-${String(kw).replace('.', '')}-${i}`,
        type, poles: 2, outputKw: kw, outputHp: hp,
        frame: String(frame2p),
        basePrice: typeof foot2p === 'number' ? foot2p : listPrice2p,
        addonType
      });
    }

    // 4P data (cols 6-9): FRAME, LIST PRICE, FOOT, FLANGE
    const frame4p = r[6];
    const listPrice4p = r[7];
    const foot4p = r[8];
    const flange4p = r[9];
    if (frame4p && typeof listPrice4p === 'number' && frame4p !== 'NIL' && listPrice4p !== 'NIL') {
      let addonType: '3%' | '5%' | 'NIL' = 'NIL';
      if (typeof flange4p === 'number' && typeof foot4p === 'number' && foot4p > 0) {
        const pct = Math.round(((flange4p / foot4p) - 1) * 100);
        if (pct === 3) addonType = '3%';
        else if (pct === 5) addonType = '5%';
      }
      motors.push({
        id: `C-${type}-4P-${String(kw).replace('.', '')}-${i}`,
        type, poles: 4, outputKw: kw, outputHp: hp,
        frame: String(frame4p),
        basePrice: typeof foot4p === 'number' ? foot4p : listPrice4p,
        addonType
      });
    }
  }
  return motors;
};

const parseCrompton68P = (sheet: any, type: 'IE2' | 'IE3'): CromptonMotor[] => {
  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as any[][];
  const motors: CromptonMotor[] = [];

  for (let i = 0; i < rows.length; i++) {
    const r = rows[i];
    if (!r || r.length === 0) continue;

    const kw = r[0];
    const hp = r[1];
    if (typeof kw !== 'number' || typeof hp !== 'number') continue;

    // 6P data (cols 2-5)
    const frame6p = r[2];
    const listPrice6p = r[3];
    const foot6p = r[4];
    const flange6p = r[5];
    if (frame6p && typeof listPrice6p === 'number' && frame6p !== 'NIL' && listPrice6p !== 'NIL') {
      let addonType: '3%' | '5%' | 'NIL' = 'NIL';
      if (typeof flange6p === 'number' && typeof foot6p === 'number' && foot6p > 0) {
        const pct = Math.round(((flange6p / foot6p) - 1) * 100);
        if (pct === 3) addonType = '3%';
        else if (pct === 5) addonType = '5%';
      }
      motors.push({
        id: `C-${type}-6P-${String(kw).replace('.', '')}-${i}`,
        type, poles: 6, outputKw: kw, outputHp: hp,
        frame: String(frame6p),
        basePrice: typeof foot6p === 'number' ? foot6p : listPrice6p,
        addonType
      });
    }

    // 8P data (cols 6-9)
    const frame8p = r[6];
    const listPrice8p = r[7];
    const foot8p = r[8];
    const flange8p = r[9];
    if (frame8p && typeof listPrice8p === 'number' && frame8p !== 'NIL' && listPrice8p !== 'NIL') {
      let addonType: '3%' | '5%' | 'NIL' = 'NIL';
      if (typeof flange8p === 'number' && typeof foot8p === 'number' && foot8p > 0) {
        const pct = Math.round(((flange8p / foot8p) - 1) * 100);
        if (pct === 3) addonType = '3%';
        else if (pct === 5) addonType = '5%';
      }
      motors.push({
        id: `C-${type}-8P-${String(kw).replace('.', '')}-${i}`,
        type, poles: 8, outputKw: kw, outputHp: hp,
        frame: String(frame8p),
        basePrice: typeof foot8p === 'number' ? foot8p : listPrice8p,
        addonType
      });
    }
  }
  return motors;
};

export const parseCromptonExcel = (workbook: XLSX.WorkBook): CromptonMotor[] => {
  const allMotors: CromptonMotor[] = [];

  workbook.SheetNames.forEach(sheetName => {
    const sheet = workbook.Sheets[sheetName];
    const upperName = sheetName.toUpperCase();

    // Skip sheets we don't need
    if (upperName.includes('NEW LP') || upperName === 'SHEET2') return;

    const isIE3 = upperName.includes('IE3');
    const type: 'IE2' | 'IE3' = isIE3 ? 'IE3' : 'IE2';

    if (upperName.includes('6') || upperName.includes('8')) {
      // 6-8P sheet
      allMotors.push(...parseCrompton68P(sheet, type));
    } else if (upperName.includes('2') || upperName.includes('4')) {
      // 2-4P sheet
      allMotors.push(...parseCrompton24P(sheet, type));
    }
  });

  return allMotors;
};
