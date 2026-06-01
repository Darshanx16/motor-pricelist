export interface SiemensMotor {
  id: string;
  type: 'IE2' | 'IE3' | 'IE4';
  poles: number;
  outputKw: number;
  outputHp: number;
  frame: string;
  basePrice: number;
  flangePrice: number;
}

export const siemensMotors: SiemensMotor[] = [
  {
    "id": "S-IE2-2P-025-6",
    "type": "IE2",
    "poles": 2,
    "outputKw": 0.25,
    "outputHp": 0.35,
    "frame": "71",
    "basePrice": 24100,
    "flangePrice": 1250
  },
  {
    "id": "S-IE2-4P-025-6",
    "type": "IE2",
    "poles": 4,
    "outputKw": 0.25,
    "outputHp": 0.35,
    "frame": "71",
    "basePrice": 24750,
    "flangePrice": 1250
  },
  {
    "id": "S-IE2-2P-037-7",
    "type": "IE2",
    "poles": 2,
    "outputKw": 0.37,
    "outputHp": 0.5,
    "frame": "71",
    "basePrice": 24100,
    "flangePrice": 1250
  },
  {
    "id": "S-IE2-4P-037-7",
    "type": "IE2",
    "poles": 4,
    "outputKw": 0.37,
    "outputHp": 0.5,
    "frame": "71",
    "basePrice": 25450,
    "flangePrice": 1250
  },
  {
    "id": "S-IE2-2P-055-8",
    "type": "IE2",
    "poles": 2,
    "outputKw": 0.55,
    "outputHp": 0.75,
    "frame": "71",
    "basePrice": 26550,
    "flangePrice": 1250
  },
  {
    "id": "S-IE2-4P-055-8",
    "type": "IE2",
    "poles": 4,
    "outputKw": 0.55,
    "outputHp": 0.75,
    "frame": "80",
    "basePrice": 31400,
    "flangePrice": 1350
  },
  {
    "id": "S-IE2-2P-075-9",
    "type": "IE2",
    "poles": 2,
    "outputKw": 0.75,
    "outputHp": 1,
    "frame": "80",
    "basePrice": 32450,
    "flangePrice": 1350
  },
  {
    "id": "S-IE2-4P-075-9",
    "type": "IE2",
    "poles": 4,
    "outputKw": 0.75,
    "outputHp": 1,
    "frame": "80",
    "basePrice": 33700,
    "flangePrice": 1350
  },
  {
    "id": "S-IE2-2P-11-10",
    "type": "IE2",
    "poles": 2,
    "outputKw": 1.1,
    "outputHp": 1.5,
    "frame": "80",
    "basePrice": 33000,
    "flangePrice": 1350
  },
  {
    "id": "S-IE2-4P-11-10",
    "type": "IE2",
    "poles": 4,
    "outputKw": 1.1,
    "outputHp": 1.5,
    "frame": "90S",
    "basePrice": 43000,
    "flangePrice": 1800
  },
  {
    "id": "S-IE2-2P-15-11",
    "type": "IE2",
    "poles": 2,
    "outputKw": 1.5,
    "outputHp": 2,
    "frame": "90S",
    "basePrice": 41850,
    "flangePrice": 1800
  },
  {
    "id": "S-IE2-4P-15-11",
    "type": "IE2",
    "poles": 4,
    "outputKw": 1.5,
    "outputHp": 2,
    "frame": "90L.",
    "basePrice": 47700,
    "flangePrice": 1800
  },
  {
    "id": "S-IE2-2P-22-13",
    "type": "IE2",
    "poles": 2,
    "outputKw": 2.2,
    "outputHp": 3,
    "frame": "90L",
    "basePrice": 47600,
    "flangePrice": 1800
  },
  {
    "id": "S-IE2-4P-22-13",
    "type": "IE2",
    "poles": 4,
    "outputKw": 2.2,
    "outputHp": 3,
    "frame": "100L",
    "basePrice": 59200,
    "flangePrice": 2150
  },
  {
    "id": "S-IE2-2P-37-14",
    "type": "IE2",
    "poles": 2,
    "outputKw": 3.7,
    "outputHp": 5,
    "frame": "100L",
    "basePrice": 66350,
    "flangePrice": 2150
  },
  {
    "id": "S-IE2-4P-37-14",
    "type": "IE2",
    "poles": 4,
    "outputKw": 3.7,
    "outputHp": 5,
    "frame": "112M",
    "basePrice": 74600,
    "flangePrice": 2700
  },
  {
    "id": "S-IE2-2P-55-15",
    "type": "IE2",
    "poles": 2,
    "outputKw": 5.5,
    "outputHp": 7.5,
    "frame": "132S",
    "basePrice": 101550,
    "flangePrice": 3650
  },
  {
    "id": "S-IE2-4P-55-15",
    "type": "IE2",
    "poles": 4,
    "outputKw": 5.5,
    "outputHp": 7.5,
    "frame": "132S",
    "basePrice": 101000,
    "flangePrice": 3650
  },
  {
    "id": "S-IE2-2P-75-16",
    "type": "IE2",
    "poles": 2,
    "outputKw": 7.5,
    "outputHp": 10,
    "frame": "132S",
    "basePrice": 111150,
    "flangePrice": 3650
  },
  {
    "id": "S-IE2-4P-75-16",
    "type": "IE2",
    "poles": 4,
    "outputKw": 7.5,
    "outputHp": 10,
    "frame": "132M",
    "basePrice": 118350,
    "flangePrice": 3650
  },
  {
    "id": "S-IE2-2P-11-17",
    "type": "IE2",
    "poles": 2,
    "outputKw": 11,
    "outputHp": 15,
    "frame": "160M",
    "basePrice": 237100,
    "flangePrice": 9550
  },
  {
    "id": "S-IE2-2P-15-18",
    "type": "IE2",
    "poles": 2,
    "outputKw": 15,
    "outputHp": 20,
    "frame": "160M",
    "basePrice": 264400,
    "flangePrice": 9550
  },
  {
    "id": "S-IE2-4P-11-18",
    "type": "IE2",
    "poles": 4,
    "outputKw": 11,
    "outputHp": 15,
    "frame": "160M",
    "basePrice": 220150,
    "flangePrice": 9550
  },
  {
    "id": "S-IE2-2P-185-19",
    "type": "IE2",
    "poles": 2,
    "outputKw": 18.5,
    "outputHp": 25,
    "frame": "160L",
    "basePrice": 299100,
    "flangePrice": 9550
  },
  {
    "id": "S-IE2-4P-15-19",
    "type": "IE2",
    "poles": 4,
    "outputKw": 15,
    "outputHp": 20,
    "frame": "160M",
    "basePrice": 251200,
    "flangePrice": 9550
  },
  {
    "id": "S-IE2-2P-22-20",
    "type": "IE2",
    "poles": 2,
    "outputKw": 22,
    "outputHp": 30,
    "frame": "180M",
    "basePrice": 345450,
    "flangePrice": 13850
  },
  {
    "id": "S-IE2-4P-185-20",
    "type": "IE2",
    "poles": 4,
    "outputKw": 18.5,
    "outputHp": 25,
    "frame": "180M",
    "basePrice": 330950,
    "flangePrice": 13850
  },
  {
    "id": "S-IE2-2P-30-21",
    "type": "IE2",
    "poles": 2,
    "outputKw": 30,
    "outputHp": 40,
    "frame": "200L",
    "basePrice": 491550,
    "flangePrice": 21750
  },
  {
    "id": "S-IE2-4P-22-21",
    "type": "IE2",
    "poles": 4,
    "outputKw": 22,
    "outputHp": 30,
    "frame": "180L",
    "basePrice": 352650,
    "flangePrice": 13850
  },
  {
    "id": "S-IE2-2P-37-22",
    "type": "IE2",
    "poles": 2,
    "outputKw": 37,
    "outputHp": 50,
    "frame": "200L",
    "basePrice": 551800,
    "flangePrice": 21750
  },
  {
    "id": "S-IE2-4P-30-22",
    "type": "IE2",
    "poles": 4,
    "outputKw": 30,
    "outputHp": 40,
    "frame": "200L",
    "basePrice": 520200,
    "flangePrice": 21750
  },
  {
    "id": "S-IE2-2P-45-23",
    "type": "IE2",
    "poles": 2,
    "outputKw": 45,
    "outputHp": 60,
    "frame": "225M",
    "basePrice": 709700,
    "flangePrice": 31550
  },
  {
    "id": "S-IE2-4P-37-23",
    "type": "IE2",
    "poles": 4,
    "outputKw": 37,
    "outputHp": 50,
    "frame": "225S",
    "basePrice": 608600,
    "flangePrice": 31550
  },
  {
    "id": "S-IE2-2P-55-24",
    "type": "IE2",
    "poles": 2,
    "outputKw": 55,
    "outputHp": 75,
    "frame": "250M",
    "basePrice": 1036350,
    "flangePrice": 49350
  },
  {
    "id": "S-IE2-4P-45-24",
    "type": "IE2",
    "poles": 4,
    "outputKw": 45,
    "outputHp": 60,
    "frame": "225M",
    "basePrice": 706500,
    "flangePrice": 31550
  },
  {
    "id": "S-IE2-2P-75-26",
    "type": "IE2",
    "poles": 2,
    "outputKw": 75,
    "outputHp": 100,
    "frame": "280S",
    "basePrice": 1398750,
    "flangePrice": 64650
  },
  {
    "id": "S-IE2-4P-75-26",
    "type": "IE2",
    "poles": 4,
    "outputKw": 75,
    "outputHp": 100,
    "frame": "280S",
    "basePrice": 1343650,
    "flangePrice": 64650
  },
  {
    "id": "S-IE2-2P-90-27",
    "type": "IE2",
    "poles": 2,
    "outputKw": 90,
    "outputHp": 120,
    "frame": "280M",
    "basePrice": 1562450,
    "flangePrice": 64650
  },
  {
    "id": "S-IE2-4P-90-27",
    "type": "IE2",
    "poles": 4,
    "outputKw": 90,
    "outputHp": 120,
    "frame": "280M",
    "basePrice": 1461200,
    "flangePrice": 64650
  },
  {
    "id": "S-IE2-2P-110-28",
    "type": "IE2",
    "poles": 2,
    "outputKw": 110,
    "outputHp": 150,
    "frame": "315S",
    "basePrice": 2027800,
    "flangePrice": 113950
  },
  {
    "id": "S-IE2-4P-110-28",
    "type": "IE2",
    "poles": 4,
    "outputKw": 110,
    "outputHp": 150,
    "frame": "315S",
    "basePrice": 1939750,
    "flangePrice": 113950
  },
  {
    "id": "S-IE2-2P-132-29",
    "type": "IE2",
    "poles": 2,
    "outputKw": 132,
    "outputHp": 180,
    "frame": "315M",
    "basePrice": 2285850,
    "flangePrice": 113950
  },
  {
    "id": "S-IE2-4P-132-29",
    "type": "IE2",
    "poles": 4,
    "outputKw": 132,
    "outputHp": 180,
    "frame": "315M",
    "basePrice": 2117950,
    "flangePrice": 113950
  },
  {
    "id": "S-IE2-2P-160-30",
    "type": "IE2",
    "poles": 2,
    "outputKw": 160,
    "outputHp": 215,
    "frame": "315L",
    "basePrice": 2651750,
    "flangePrice": 113950
  },
  {
    "id": "S-IE2-4P-160-30",
    "type": "IE2",
    "poles": 4,
    "outputKw": 160,
    "outputHp": 215,
    "frame": "315L",
    "basePrice": 2347950,
    "flangePrice": 113950
  },
  {
    "id": "S-IE2-2P-200-31",
    "type": "IE2",
    "poles": 2,
    "outputKw": 200,
    "outputHp": 270,
    "frame": "315L",
    "basePrice": 2879400,
    "flangePrice": 113950
  },
  {
    "id": "S-IE2-4P-200-31",
    "type": "IE2",
    "poles": 4,
    "outputKw": 200,
    "outputHp": 270,
    "frame": "315L",
    "basePrice": 2904600,
    "flangePrice": 113950
  },
  {
    "id": "S-IE2-6P-018-37",
    "type": "IE2",
    "poles": 6,
    "outputKw": 0.18,
    "outputHp": 0.25,
    "frame": "71",
    "basePrice": 28300,
    "flangePrice": 1250
  },
  {
    "id": "S-IE2-6P-025-38",
    "type": "IE2",
    "poles": 6,
    "outputKw": 0.25,
    "outputHp": 0.35,
    "frame": "71",
    "basePrice": 28750,
    "flangePrice": 1250
  },
  {
    "id": "S-IE2-6P-037-39",
    "type": "IE2",
    "poles": 6,
    "outputKw": 0.37,
    "outputHp": 0.5,
    "frame": "80",
    "basePrice": 32500,
    "flangePrice": 1350
  },
  {
    "id": "S-IE2-6P-055-40",
    "type": "IE2",
    "poles": 6,
    "outputKw": 0.55,
    "outputHp": 0.75,
    "frame": "80",
    "basePrice": 34950,
    "flangePrice": 1350
  },
  {
    "id": "S-IE2-6P-075-41",
    "type": "IE2",
    "poles": 6,
    "outputKw": 0.75,
    "outputHp": 1,
    "frame": "90S",
    "basePrice": 44300,
    "flangePrice": 1800
  },
  {
    "id": "S-IE2-6P-11-42",
    "type": "IE2",
    "poles": 6,
    "outputKw": 1.1,
    "outputHp": 1.5,
    "frame": "90L",
    "basePrice": 52250,
    "flangePrice": 1800
  },
  {
    "id": "S-IE2-6P-15-43",
    "type": "IE2",
    "poles": 6,
    "outputKw": 1.5,
    "outputHp": 2,
    "frame": "100",
    "basePrice": 63650,
    "flangePrice": 2150
  },
  {
    "id": "S-IE2-6P-22-45",
    "type": "IE2",
    "poles": 6,
    "outputKw": 2.2,
    "outputHp": 3,
    "frame": "112M",
    "basePrice": 77550,
    "flangePrice": 2700
  },
  {
    "id": "S-IE2-6P-37-46",
    "type": "IE2",
    "poles": 6,
    "outputKw": 3.7,
    "outputHp": 5,
    "frame": "132S",
    "basePrice": 111150,
    "flangePrice": 3650
  },
  {
    "id": "S-IE2-6P-55-47",
    "type": "IE2",
    "poles": 6,
    "outputKw": 5.5,
    "outputHp": 7.5,
    "frame": "132M",
    "basePrice": 131150,
    "flangePrice": 3650
  },
  {
    "id": "S-IE2-6P-75-48",
    "type": "IE2",
    "poles": 6,
    "outputKw": 7.5,
    "outputHp": 10,
    "frame": "160M",
    "basePrice": 216950,
    "flangePrice": 9550
  },
  {
    "id": "S-IE2-6P-11-49",
    "type": "IE2",
    "poles": 6,
    "outputKw": 11,
    "outputHp": 15,
    "frame": "160L",
    "basePrice": 267100,
    "flangePrice": 9550
  },
  {
    "id": "S-IE2-6P-15-50",
    "type": "IE2",
    "poles": 6,
    "outputKw": 15,
    "outputHp": 20,
    "frame": "180M",
    "basePrice": 351450,
    "flangePrice": 13850
  },
  {
    "id": "S-IE2-6P-185-51",
    "type": "IE2",
    "poles": 6,
    "outputKw": 18.5,
    "outputHp": 25,
    "frame": "200L",
    "basePrice": 454150,
    "flangePrice": 21750
  },
  {
    "id": "S-IE2-6P-22-52",
    "type": "IE2",
    "poles": 6,
    "outputKw": 22,
    "outputHp": 30,
    "frame": "200L",
    "basePrice": 493150,
    "flangePrice": 21750
  },
  {
    "id": "S-IE2-6P-30-53",
    "type": "IE2",
    "poles": 6,
    "outputKw": 30,
    "outputHp": 40,
    "frame": "225M",
    "basePrice": 660900,
    "flangePrice": 31550
  },
  {
    "id": "S-IE2-6P-37-54",
    "type": "IE2",
    "poles": 6,
    "outputKw": 37,
    "outputHp": 50,
    "frame": "250M",
    "basePrice": 923650,
    "flangePrice": 49350
  },
  {
    "id": "S-IE2-6P-45-55",
    "type": "IE2",
    "poles": 6,
    "outputKw": 45,
    "outputHp": 60,
    "frame": "280S",
    "basePrice": 1190150,
    "flangePrice": 64650
  },
  {
    "id": "S-IE2-6P-55-56",
    "type": "IE2",
    "poles": 6,
    "outputKw": 55,
    "outputHp": 75,
    "frame": "280M",
    "basePrice": 1352900,
    "flangePrice": 64650
  },
  {
    "id": "S-IE2-6P-75-57",
    "type": "IE2",
    "poles": 6,
    "outputKw": 75,
    "outputHp": 100,
    "frame": "315S",
    "basePrice": 1658300,
    "flangePrice": 113950
  },
  {
    "id": "S-IE2-6P-90-58",
    "type": "IE2",
    "poles": 6,
    "outputKw": 90,
    "outputHp": 120,
    "frame": "315S",
    "basePrice": 1945400,
    "flangePrice": 113950
  },
  {
    "id": "S-IE2-6P-110-59",
    "type": "IE2",
    "poles": 6,
    "outputKw": 110,
    "outputHp": 150,
    "frame": "315L",
    "basePrice": 2169650,
    "flangePrice": 113950
  },
  {
    "id": "S-IE2-6P-132-60",
    "type": "IE2",
    "poles": 6,
    "outputKw": 132,
    "outputHp": 180,
    "frame": "315L",
    "basePrice": 2464200,
    "flangePrice": 113950
  },
  {
    "id": "S-IE3-2P-025-6",
    "type": "IE3",
    "poles": 2,
    "outputKw": 0.25,
    "outputHp": 0.35,
    "frame": "71",
    "basePrice": 28350,
    "flangePrice": 1250
  },
  {
    "id": "S-IE3-4P-025-6",
    "type": "IE3",
    "poles": 4,
    "outputKw": 0.25,
    "outputHp": 0.35,
    "frame": "71",
    "basePrice": 29050,
    "flangePrice": 1250
  },
  {
    "id": "S-IE3-2P-037-7",
    "type": "IE3",
    "poles": 2,
    "outputKw": 0.37,
    "outputHp": 0.5,
    "frame": "71",
    "basePrice": 28350,
    "flangePrice": 1250
  },
  {
    "id": "S-IE3-4P-037-7",
    "type": "IE3",
    "poles": 4,
    "outputKw": 0.37,
    "outputHp": 0.5,
    "frame": "71",
    "basePrice": 30600,
    "flangePrice": 1250
  },
  {
    "id": "S-IE3-2P-055-8",
    "type": "IE3",
    "poles": 2,
    "outputKw": 0.55,
    "outputHp": 0.75,
    "frame": "71",
    "basePrice": 32000,
    "flangePrice": 1250
  },
  {
    "id": "S-IE3-4P-055-8",
    "type": "IE3",
    "poles": 4,
    "outputKw": 0.55,
    "outputHp": 0.75,
    "frame": "80",
    "basePrice": 36550,
    "flangePrice": 1350
  },
  {
    "id": "S-IE3-2P-075-9",
    "type": "IE3",
    "poles": 2,
    "outputKw": 0.75,
    "outputHp": 1,
    "frame": "80",
    "basePrice": 35300,
    "flangePrice": 1350
  },
  {
    "id": "S-IE3-4P-075-9",
    "type": "IE3",
    "poles": 4,
    "outputKw": 0.75,
    "outputHp": 1,
    "frame": "80",
    "basePrice": 43450,
    "flangePrice": 1350
  },
  {
    "id": "S-IE3-2P-11-10",
    "type": "IE3",
    "poles": 2,
    "outputKw": 1.1,
    "outputHp": 1.5,
    "frame": "80",
    "basePrice": 41000,
    "flangePrice": 1350
  },
  {
    "id": "S-IE3-4P-11-10",
    "type": "IE3",
    "poles": 4,
    "outputKw": 1.1,
    "outputHp": 1.5,
    "frame": "90S",
    "basePrice": 51100,
    "flangePrice": 1800
  },
  {
    "id": "S-IE3-2P-15-11",
    "type": "IE3",
    "poles": 2,
    "outputKw": 1.5,
    "outputHp": 2,
    "frame": "90S",
    "basePrice": 46200,
    "flangePrice": 1800
  },
  {
    "id": "S-IE3-4P-15-11",
    "type": "IE3",
    "poles": 4,
    "outputKw": 1.5,
    "outputHp": 2,
    "frame": "90L.",
    "basePrice": 55950,
    "flangePrice": 1800
  },
  {
    "id": "S-IE3-2P-22-13",
    "type": "IE3",
    "poles": 2,
    "outputKw": 2.2,
    "outputHp": 3,
    "frame": "90L",
    "basePrice": 55450,
    "flangePrice": 1800
  },
  {
    "id": "S-IE3-4P-22-13",
    "type": "IE3",
    "poles": 4,
    "outputKw": 2.2,
    "outputHp": 3,
    "frame": "100L",
    "basePrice": 72800,
    "flangePrice": 2150
  },
  {
    "id": "S-IE3-2P-37-14",
    "type": "IE3",
    "poles": 2,
    "outputKw": 3.7,
    "outputHp": 5,
    "frame": "100L",
    "basePrice": 82450,
    "flangePrice": 2150
  },
  {
    "id": "S-IE3-4P-37-14",
    "type": "IE3",
    "poles": 4,
    "outputKw": 3.7,
    "outputHp": 5,
    "frame": "112M",
    "basePrice": 90300,
    "flangePrice": 2700
  },
  {
    "id": "S-IE3-2P-55-15",
    "type": "IE3",
    "poles": 2,
    "outputKw": 5.5,
    "outputHp": 7.5,
    "frame": "132S",
    "basePrice": 121950,
    "flangePrice": 3650
  },
  {
    "id": "S-IE3-4P-55-15",
    "type": "IE3",
    "poles": 4,
    "outputKw": 5.5,
    "outputHp": 7.5,
    "frame": "132S",
    "basePrice": 131550,
    "flangePrice": 3650
  },
  {
    "id": "S-IE3-2P-75-16",
    "type": "IE3",
    "poles": 2,
    "outputKw": 7.5,
    "outputHp": 10,
    "frame": "132S",
    "basePrice": 131000,
    "flangePrice": 3650
  },
  {
    "id": "S-IE3-4P-75-16",
    "type": "IE3",
    "poles": 4,
    "outputKw": 7.5,
    "outputHp": 10,
    "frame": "132M",
    "basePrice": 150750,
    "flangePrice": 3650
  },
  {
    "id": "S-IE3-2P-11-17",
    "type": "IE3",
    "poles": 2,
    "outputKw": 11,
    "outputHp": 15,
    "frame": "160M",
    "basePrice": 274350,
    "flangePrice": 9550
  },
  {
    "id": "S-IE3-2P-15-18",
    "type": "IE3",
    "poles": 2,
    "outputKw": 15,
    "outputHp": 20,
    "frame": "160M",
    "basePrice": 301600,
    "flangePrice": 9550
  },
  {
    "id": "S-IE3-4P-11-18",
    "type": "IE3",
    "poles": 4,
    "outputKw": 11,
    "outputHp": 15,
    "frame": "160M",
    "basePrice": 268250,
    "flangePrice": 9550
  },
  {
    "id": "S-IE3-2P-185-19",
    "type": "IE3",
    "poles": 2,
    "outputKw": 18.5,
    "outputHp": 25,
    "frame": "160L",
    "basePrice": 365500,
    "flangePrice": 9550
  },
  {
    "id": "S-IE3-4P-15-19",
    "type": "IE3",
    "poles": 4,
    "outputKw": 15,
    "outputHp": 20,
    "frame": "160M",
    "basePrice": 317950,
    "flangePrice": 9550
  },
  {
    "id": "S-IE3-2P-22-20",
    "type": "IE3",
    "poles": 2,
    "outputKw": 22,
    "outputHp": 30,
    "frame": "180M",
    "basePrice": 393200,
    "flangePrice": 13850
  },
  {
    "id": "S-IE3-4P-185-20",
    "type": "IE3",
    "poles": 4,
    "outputKw": 18.5,
    "outputHp": 25,
    "frame": "180M",
    "basePrice": 390000,
    "flangePrice": 13850
  },
  {
    "id": "S-IE3-2P-30-21",
    "type": "IE3",
    "poles": 2,
    "outputKw": 30,
    "outputHp": 40,
    "frame": "200L",
    "basePrice": 538750,
    "flangePrice": 21750
  },
  {
    "id": "S-IE3-4P-22-21",
    "type": "IE3",
    "poles": 4,
    "outputKw": 22,
    "outputHp": 30,
    "frame": "180L",
    "basePrice": 417300,
    "flangePrice": 13850
  },
  {
    "id": "S-IE3-2P-37-22",
    "type": "IE3",
    "poles": 2,
    "outputKw": 37,
    "outputHp": 50,
    "frame": "200L",
    "basePrice": 626350,
    "flangePrice": 21750
  },
  {
    "id": "S-IE3-4P-30-22",
    "type": "IE3",
    "poles": 4,
    "outputKw": 30,
    "outputHp": 40,
    "frame": "200L",
    "basePrice": 591600,
    "flangePrice": 21750
  },
  {
    "id": "S-IE3-2P-45-23",
    "type": "IE3",
    "poles": 2,
    "outputKw": 45,
    "outputHp": 60,
    "frame": "225M",
    "basePrice": 786400,
    "flangePrice": 31550
  },
  {
    "id": "S-IE3-4P-37-23",
    "type": "IE3",
    "poles": 4,
    "outputKw": 37,
    "outputHp": 50,
    "frame": "225S",
    "basePrice": 745400,
    "flangePrice": 31550
  },
  {
    "id": "S-IE3-2P-55-24",
    "type": "IE3",
    "poles": 2,
    "outputKw": 55,
    "outputHp": 75,
    "frame": "250M",
    "basePrice": 1165900,
    "flangePrice": 49350
  },
  {
    "id": "S-IE3-4P-45-24",
    "type": "IE3",
    "poles": 4,
    "outputKw": 45,
    "outputHp": 60,
    "frame": "225M",
    "basePrice": 842450,
    "flangePrice": 31550
  },
  {
    "id": "S-IE3-4P-55-25",
    "type": "IE3",
    "poles": 4,
    "outputKw": 55,
    "outputHp": 75,
    "frame": "250M",
    "basePrice": 1222950,
    "flangePrice": 49350
  },
  {
    "id": "S-IE3-2P-75-26",
    "type": "IE3",
    "poles": 2,
    "outputKw": 75,
    "outputHp": 100,
    "frame": "280S",
    "basePrice": 1545850,
    "flangePrice": 64650
  },
  {
    "id": "S-IE3-4P-75-26",
    "type": "IE3",
    "poles": 4,
    "outputKw": 75,
    "outputHp": 100,
    "frame": "280S",
    "basePrice": 1471250,
    "flangePrice": 64650
  },
  {
    "id": "S-IE3-2P-90-27",
    "type": "IE3",
    "poles": 2,
    "outputKw": 90,
    "outputHp": 120,
    "frame": "280M",
    "basePrice": 1740550,
    "flangePrice": 64650
  },
  {
    "id": "S-IE3-4P-90-27",
    "type": "IE3",
    "poles": 4,
    "outputKw": 90,
    "outputHp": 120,
    "frame": "280M",
    "basePrice": 1706400,
    "flangePrice": 64650
  },
  {
    "id": "S-IE3-2P-110-28",
    "type": "IE3",
    "poles": 2,
    "outputKw": 110,
    "outputHp": 150,
    "frame": "315S",
    "basePrice": 2154850,
    "flangePrice": 113950
  },
  {
    "id": "S-IE3-4P-110-28",
    "type": "IE3",
    "poles": 4,
    "outputKw": 110,
    "outputHp": 150,
    "frame": "315S",
    "basePrice": 2074950,
    "flangePrice": 113950
  },
  {
    "id": "S-IE3-2P-132-29",
    "type": "IE3",
    "poles": 2,
    "outputKw": 132,
    "outputHp": 180,
    "frame": "315M",
    "basePrice": 2548550,
    "flangePrice": 113950
  },
  {
    "id": "S-IE3-4P-132-29",
    "type": "IE3",
    "poles": 4,
    "outputKw": 132,
    "outputHp": 180,
    "frame": "315M",
    "basePrice": 2280600,
    "flangePrice": 113950
  },
  {
    "id": "S-IE3-2P-160-30",
    "type": "IE3",
    "poles": 2,
    "outputKw": 160,
    "outputHp": 215,
    "frame": "315L",
    "basePrice": 2901700,
    "flangePrice": 113950
  },
  {
    "id": "S-IE3-4P-160-30",
    "type": "IE3",
    "poles": 4,
    "outputKw": 160,
    "outputHp": 215,
    "frame": "315L",
    "basePrice": 2617950,
    "flangePrice": 113950
  },
  {
    "id": "S-IE3-2P-200-31",
    "type": "IE3",
    "poles": 2,
    "outputKw": 200,
    "outputHp": 270,
    "frame": "315L",
    "basePrice": 3212450,
    "flangePrice": 113950
  },
  {
    "id": "S-IE3-4P-200-31",
    "type": "IE3",
    "poles": 4,
    "outputKw": 200,
    "outputHp": 270,
    "frame": "315L",
    "basePrice": 3178200,
    "flangePrice": 113950
  },
  {
    "id": "S-IE3-6P-018-37",
    "type": "IE3",
    "poles": 6,
    "outputKw": 0.18,
    "outputHp": 0.25,
    "frame": "71",
    "basePrice": 31700,
    "flangePrice": 1250
  },
  {
    "id": "S-IE3-6P-025-38",
    "type": "IE3",
    "poles": 6,
    "outputKw": 0.25,
    "outputHp": 0.35,
    "frame": "71",
    "basePrice": 33550,
    "flangePrice": 1250
  },
  {
    "id": "S-IE3-6P-037-39",
    "type": "IE3",
    "poles": 6,
    "outputKw": 0.37,
    "outputHp": 0.5,
    "frame": "80",
    "basePrice": 36350,
    "flangePrice": 1350
  },
  {
    "id": "S-IE3-6P-055-40",
    "type": "IE3",
    "poles": 6,
    "outputKw": 0.55,
    "outputHp": 0.75,
    "frame": "80",
    "basePrice": 40100,
    "flangePrice": 1350
  },
  {
    "id": "S-IE3-6P-075-41",
    "type": "IE3",
    "poles": 6,
    "outputKw": 0.75,
    "outputHp": 1,
    "frame": "90S",
    "basePrice": 48150,
    "flangePrice": 1800
  },
  {
    "id": "S-IE3-6P-11-42",
    "type": "IE3",
    "poles": 6,
    "outputKw": 1.1,
    "outputHp": 1.5,
    "frame": "90L",
    "basePrice": 56450,
    "flangePrice": 1800
  },
  {
    "id": "S-IE3-6P-15-43",
    "type": "IE3",
    "poles": 6,
    "outputKw": 1.5,
    "outputHp": 2,
    "frame": "100",
    "basePrice": 71450,
    "flangePrice": 2150
  },
  {
    "id": "S-IE3-6P-22-45",
    "type": "IE3",
    "poles": 6,
    "outputKw": 2.2,
    "outputHp": 3,
    "frame": "112M",
    "basePrice": 83450,
    "flangePrice": 2700
  },
  {
    "id": "S-IE3-6P-37-46",
    "type": "IE3",
    "poles": 6,
    "outputKw": 3.7,
    "outputHp": 5,
    "frame": "132S",
    "basePrice": 120400,
    "flangePrice": 3650
  },
  {
    "id": "S-IE3-6P-55-47",
    "type": "IE3",
    "poles": 6,
    "outputKw": 5.5,
    "outputHp": 7.5,
    "frame": "132M",
    "basePrice": 150000,
    "flangePrice": 3650
  },
  {
    "id": "S-IE3-6P-75-48",
    "type": "IE3",
    "poles": 6,
    "outputKw": 7.5,
    "outputHp": 10,
    "frame": "160M",
    "basePrice": 254850,
    "flangePrice": 9550
  },
  {
    "id": "S-IE3-6P-11-49",
    "type": "IE3",
    "poles": 6,
    "outputKw": 11,
    "outputHp": 15,
    "frame": "160L",
    "basePrice": 317450,
    "flangePrice": 9550
  },
  {
    "id": "S-IE3-6P-15-50",
    "type": "IE3",
    "poles": 6,
    "outputKw": 15,
    "outputHp": 20,
    "frame": "180M",
    "basePrice": 396350,
    "flangePrice": 13850
  },
  {
    "id": "S-IE3-6P-185-51",
    "type": "IE3",
    "poles": 6,
    "outputKw": 18.5,
    "outputHp": 25,
    "frame": "200L",
    "basePrice": 515700,
    "flangePrice": 21750
  },
  {
    "id": "S-IE3-6P-22-52",
    "type": "IE3",
    "poles": 6,
    "outputKw": 22,
    "outputHp": 30,
    "frame": "200L",
    "basePrice": 570000,
    "flangePrice": 21750
  },
  {
    "id": "S-IE3-6P-30-53",
    "type": "IE3",
    "poles": 6,
    "outputKw": 30,
    "outputHp": 40,
    "frame": "225M",
    "basePrice": 770400,
    "flangePrice": 31550
  },
  {
    "id": "S-IE3-6P-37-54",
    "type": "IE3",
    "poles": 6,
    "outputKw": 37,
    "outputHp": 50,
    "frame": "250M",
    "basePrice": 1105200,
    "flangePrice": 49350
  },
  {
    "id": "S-IE3-6P-45-55",
    "type": "IE3",
    "poles": 6,
    "outputKw": 45,
    "outputHp": 60,
    "frame": "280S",
    "basePrice": 1315300,
    "flangePrice": 64650
  },
  {
    "id": "S-IE3-6P-55-56",
    "type": "IE3",
    "poles": 6,
    "outputKw": 55,
    "outputHp": 75,
    "frame": "280M",
    "basePrice": 1495250,
    "flangePrice": 64650
  },
  {
    "id": "S-IE3-6P-75-57",
    "type": "IE3",
    "poles": 6,
    "outputKw": 75,
    "outputHp": 100,
    "frame": "315S",
    "basePrice": 1838900,
    "flangePrice": 113950
  },
  {
    "id": "S-IE3-6P-90-58",
    "type": "IE3",
    "poles": 6,
    "outputKw": 90,
    "outputHp": 120,
    "frame": "315S",
    "basePrice": 2170650,
    "flangePrice": 113950
  },
  {
    "id": "S-IE3-6P-110-59",
    "type": "IE3",
    "poles": 6,
    "outputKw": 110,
    "outputHp": 150,
    "frame": "315L",
    "basePrice": 2444450,
    "flangePrice": 113950
  },
  {
    "id": "S-IE3-6P-132-60",
    "type": "IE3",
    "poles": 6,
    "outputKw": 132,
    "outputHp": 180,
    "frame": "315L",
    "basePrice": 2831700,
    "flangePrice": 113950
  },
  {
    "id": "S-IE4-2P-025-6",
    "type": "IE4",
    "poles": 2,
    "outputKw": 0.25,
    "outputHp": 0.35,
    "frame": "71",
    "basePrice": 18200,
    "flangePrice": 625
  },
  {
    "id": "S-IE4-4P-025-6",
    "type": "IE4",
    "poles": 4,
    "outputKw": 0.25,
    "outputHp": 0.35,
    "frame": "71",
    "basePrice": 19625,
    "flangePrice": 625
  },
  {
    "id": "S-IE4-2P-037-7",
    "type": "IE4",
    "poles": 2,
    "outputKw": 0.37,
    "outputHp": 0.5,
    "frame": "71",
    "basePrice": 20575,
    "flangePrice": 625
  },
  {
    "id": "S-IE4-4P-037-7",
    "type": "IE4",
    "poles": 4,
    "outputKw": 0.37,
    "outputHp": 0.5,
    "frame": "71",
    "basePrice": 19625,
    "flangePrice": 625
  },
  {
    "id": "S-IE4-2P-055-8",
    "type": "IE4",
    "poles": 2,
    "outputKw": 0.55,
    "outputHp": 0.75,
    "frame": "80",
    "basePrice": 21450,
    "flangePrice": 675
  },
  {
    "id": "S-IE4-4P-055-8",
    "type": "IE4",
    "poles": 4,
    "outputKw": 0.55,
    "outputHp": 0.75,
    "frame": "80",
    "basePrice": 23400,
    "flangePrice": 675
  },
  {
    "id": "S-IE4-2P-075-9",
    "type": "IE4",
    "poles": 2,
    "outputKw": 0.75,
    "outputHp": 1,
    "frame": "80",
    "basePrice": 26000,
    "flangePrice": 675
  },
  {
    "id": "S-IE4-4P-075-9",
    "type": "IE4",
    "poles": 4,
    "outputKw": 0.75,
    "outputHp": 1,
    "frame": "80",
    "basePrice": 25425,
    "flangePrice": 675
  },
  {
    "id": "S-IE4-2P-11-10",
    "type": "IE4",
    "poles": 2,
    "outputKw": 1.1,
    "outputHp": 1.5,
    "frame": "90S",
    "basePrice": 28150,
    "flangePrice": 900
  },
  {
    "id": "S-IE4-4P-11-10",
    "type": "IE4",
    "poles": 4,
    "outputKw": 1.1,
    "outputHp": 1.5,
    "frame": "90S",
    "basePrice": 28525,
    "flangePrice": 900
  },
  {
    "id": "S-IE4-2P-15-11",
    "type": "IE4",
    "poles": 2,
    "outputKw": 1.5,
    "outputHp": 2,
    "frame": "90L",
    "basePrice": 33850,
    "flangePrice": 900
  },
  {
    "id": "S-IE4-4P-15-11",
    "type": "IE4",
    "poles": 4,
    "outputKw": 1.5,
    "outputHp": 2,
    "frame": "90L",
    "basePrice": 32450,
    "flangePrice": 900
  },
  {
    "id": "S-IE4-2P-22-13",
    "type": "IE4",
    "poles": 2,
    "outputKw": 2.2,
    "outputHp": 3,
    "frame": "100L",
    "basePrice": 52775,
    "flangePrice": 1075
  },
  {
    "id": "S-IE4-4P-22-13",
    "type": "IE4",
    "poles": 4,
    "outputKw": 2.2,
    "outputHp": 3,
    "frame": "100L",
    "basePrice": 41275,
    "flangePrice": 1075
  },
  {
    "id": "S-IE4-2P-37-14",
    "type": "IE4",
    "poles": 2,
    "outputKw": 3.7,
    "outputHp": 5,
    "frame": "112M",
    "basePrice": 66100,
    "flangePrice": 1350
  },
  {
    "id": "S-IE4-4P-37-14",
    "type": "IE4",
    "poles": 4,
    "outputKw": 3.7,
    "outputHp": 5,
    "frame": "112M",
    "basePrice": 55225,
    "flangePrice": 1350
  },
  {
    "id": "S-IE4-2P-55-15",
    "type": "IE4",
    "poles": 2,
    "outputKw": 5.5,
    "outputHp": 7.5,
    "frame": "132S",
    "basePrice": 78325,
    "flangePrice": 1825
  },
  {
    "id": "S-IE4-4P-55-15",
    "type": "IE4",
    "poles": 4,
    "outputKw": 5.5,
    "outputHp": 7.5,
    "frame": "132S",
    "basePrice": 76625,
    "flangePrice": 1825
  },
  {
    "id": "S-IE4-2P-75-16",
    "type": "IE4",
    "poles": 2,
    "outputKw": 7.5,
    "outputHp": 10,
    "frame": "132S",
    "basePrice": 84825,
    "flangePrice": 1825
  },
  {
    "id": "S-IE4-4P-75-16",
    "type": "IE4",
    "poles": 4,
    "outputKw": 7.5,
    "outputHp": 10,
    "frame": "132M",
    "basePrice": 89175,
    "flangePrice": 1825
  },
  {
    "id": "S-IE4-2P-11-17",
    "type": "IE4",
    "poles": 2,
    "outputKw": 11,
    "outputHp": 15,
    "frame": "160M",
    "basePrice": 155975,
    "flangePrice": 4775
  },
  {
    "id": "S-IE4-4P-11-17",
    "type": "IE4",
    "poles": 4,
    "outputKw": 11,
    "outputHp": 15,
    "frame": "160M",
    "basePrice": 178425,
    "flangePrice": 4775
  },
  {
    "id": "S-IE4-2P-15-18",
    "type": "IE4",
    "poles": 2,
    "outputKw": 15,
    "outputHp": 20,
    "frame": "160M",
    "basePrice": 179450,
    "flangePrice": 4775
  },
  {
    "id": "S-IE4-4P-15-18",
    "type": "IE4",
    "poles": 4,
    "outputKw": 15,
    "outputHp": 20,
    "frame": "160L",
    "basePrice": 223625,
    "flangePrice": 4775
  },
  {
    "id": "S-IE4-2P-185-19",
    "type": "IE4",
    "poles": 2,
    "outputKw": 18.5,
    "outputHp": 25,
    "frame": "160L",
    "basePrice": 221650,
    "flangePrice": 4775
  },
  {
    "id": "S-IE4-4P-185-19",
    "type": "IE4",
    "poles": 4,
    "outputKw": 18.5,
    "outputHp": 25,
    "frame": "180M",
    "basePrice": 279200,
    "flangePrice": 6925
  },
  {
    "id": "S-IE4-2P-22-20",
    "type": "IE4",
    "poles": 2,
    "outputKw": 22,
    "outputHp": 30,
    "frame": "180M",
    "basePrice": 249925,
    "flangePrice": 6925
  },
  {
    "id": "S-IE4-4P-22-20",
    "type": "IE4",
    "poles": 4,
    "outputKw": 22,
    "outputHp": 30,
    "frame": "180L",
    "basePrice": 319875,
    "flangePrice": 6925
  },
  {
    "id": "S-IE4-2P-30-21",
    "type": "IE4",
    "poles": 2,
    "outputKw": 30,
    "outputHp": 40,
    "frame": "200L",
    "basePrice": 348075,
    "flangePrice": 10875
  },
  {
    "id": "S-IE4-4P-30-21",
    "type": "IE4",
    "poles": 4,
    "outputKw": 30,
    "outputHp": 40,
    "frame": "200L",
    "basePrice": 404525,
    "flangePrice": 10875
  },
  {
    "id": "S-IE4-2P-37-22",
    "type": "IE4",
    "poles": 2,
    "outputKw": 37,
    "outputHp": 50,
    "frame": "200L",
    "basePrice": 416800,
    "flangePrice": 10875
  },
  {
    "id": "S-IE4-4P-37-22",
    "type": "IE4",
    "poles": 4,
    "outputKw": 37,
    "outputHp": 50,
    "frame": "225S",
    "basePrice": 491275,
    "flangePrice": 15775
  },
  {
    "id": "S-IE4-2P-45-23",
    "type": "IE4",
    "poles": 2,
    "outputKw": 45,
    "outputHp": 60,
    "frame": "225M",
    "basePrice": 536075,
    "flangePrice": 15775
  },
  {
    "id": "S-IE4-4P-45-23",
    "type": "IE4",
    "poles": 4,
    "outputKw": 45,
    "outputHp": 60,
    "frame": "225M",
    "basePrice": 539775,
    "flangePrice": 15775
  },
  {
    "id": "S-IE4-2P-55-24",
    "type": "IE4",
    "poles": 2,
    "outputKw": 55,
    "outputHp": 75,
    "frame": "250M",
    "basePrice": 758000,
    "flangePrice": 24675
  },
  {
    "id": "S-IE4-4P-55-24",
    "type": "IE4",
    "poles": 4,
    "outputKw": 55,
    "outputHp": 75,
    "frame": "250M",
    "basePrice": 757300,
    "flangePrice": 24675
  },
  {
    "id": "S-IE4-2P-75-25",
    "type": "IE4",
    "poles": 2,
    "outputKw": 75,
    "outputHp": 100,
    "frame": "280S",
    "basePrice": 939100,
    "flangePrice": 32325
  },
  {
    "id": "S-IE4-4P-75-25",
    "type": "IE4",
    "poles": 4,
    "outputKw": 75,
    "outputHp": 100,
    "frame": "280S",
    "basePrice": 951300,
    "flangePrice": 32325
  },
  {
    "id": "S-IE4-2P-90-26",
    "type": "IE4",
    "poles": 2,
    "outputKw": 90,
    "outputHp": 120,
    "frame": "280M",
    "basePrice": 1077500,
    "flangePrice": 32325
  },
  {
    "id": "S-IE4-4P-90-26",
    "type": "IE4",
    "poles": 4,
    "outputKw": 90,
    "outputHp": 120,
    "frame": "280M",
    "basePrice": 1077125,
    "flangePrice": 32325
  },
  {
    "id": "S-IE4-2P-110-27",
    "type": "IE4",
    "poles": 2,
    "outputKw": 110,
    "outputHp": 150,
    "frame": "315S",
    "basePrice": 1428300,
    "flangePrice": 56975
  },
  {
    "id": "S-IE4-4P-110-27",
    "type": "IE4",
    "poles": 4,
    "outputKw": 110,
    "outputHp": 150,
    "frame": "315S",
    "basePrice": 1349700,
    "flangePrice": 56975
  },
  {
    "id": "S-IE4-2P-132-28",
    "type": "IE4",
    "poles": 2,
    "outputKw": 132,
    "outputHp": 180,
    "frame": "315M",
    "basePrice": 1561950,
    "flangePrice": 56975
  },
  {
    "id": "S-IE4-4P-132-28",
    "type": "IE4",
    "poles": 4,
    "outputKw": 132,
    "outputHp": 180,
    "frame": "315M",
    "basePrice": 1439600,
    "flangePrice": 56975
  },
  {
    "id": "S-IE4-2P-160-29",
    "type": "IE4",
    "poles": 2,
    "outputKw": 160,
    "outputHp": 215,
    "frame": "315L",
    "basePrice": 1714650,
    "flangePrice": 56975
  },
  {
    "id": "S-IE4-4P-160-29",
    "type": "IE4",
    "poles": 4,
    "outputKw": 160,
    "outputHp": 215,
    "frame": "315L",
    "basePrice": 1684025,
    "flangePrice": 56975
  },
  {
    "id": "S-IE4-2P-200-30",
    "type": "IE4",
    "poles": 2,
    "outputKw": 200,
    "outputHp": 270,
    "frame": "315L",
    "basePrice": 2006325,
    "flangePrice": 56975
  },
  {
    "id": "S-IE4-4P-200-30",
    "type": "IE4",
    "poles": 4,
    "outputKw": 200,
    "outputHp": 270,
    "frame": "315L",
    "basePrice": 1910650,
    "flangePrice": 56975
  },
  {
    "id": "S-IE4-6P-018-43",
    "type": "IE4",
    "poles": 6,
    "outputKw": 0.18,
    "outputHp": 0.35,
    "frame": "71",
    "basePrice": 20600,
    "flangePrice": 625
  },
  {
    "id": "S-IE4-6P-025-44",
    "type": "IE4",
    "poles": 6,
    "outputKw": 0.25,
    "outputHp": 0.5,
    "frame": "71",
    "basePrice": 20925,
    "flangePrice": 625
  },
  {
    "id": "S-IE4-6P-037-45",
    "type": "IE4",
    "poles": 6,
    "outputKw": 0.37,
    "outputHp": 0.5,
    "frame": "80",
    "basePrice": 23325,
    "flangePrice": 675
  },
  {
    "id": "S-IE4-6P-055-46",
    "type": "IE4",
    "poles": 6,
    "outputKw": 0.55,
    "outputHp": 0.75,
    "frame": "80",
    "basePrice": 25375,
    "flangePrice": 675
  },
  {
    "id": "S-IE4-6P-075-47",
    "type": "IE4",
    "poles": 6,
    "outputKw": 0.75,
    "outputHp": 1,
    "frame": "90S",
    "basePrice": 28875,
    "flangePrice": 900
  },
  {
    "id": "S-IE4-6P-11-48",
    "type": "IE4",
    "poles": 6,
    "outputKw": 1.1,
    "outputHp": 1.5,
    "frame": "100L",
    "basePrice": 43400,
    "flangePrice": 1075
  },
  {
    "id": "S-IE4-6P-15-49",
    "type": "IE4",
    "poles": 6,
    "outputKw": 1.5,
    "outputHp": 2,
    "frame": "100L",
    "basePrice": 43400,
    "flangePrice": 1075
  },
  {
    "id": "S-IE4-6P-22-51",
    "type": "IE4",
    "poles": 6,
    "outputKw": 2.2,
    "outputHp": 3,
    "frame": "112M",
    "basePrice": 52650,
    "flangePrice": 1350
  },
  {
    "id": "S-IE4-6P-37-52",
    "type": "IE4",
    "poles": 6,
    "outputKw": 3.7,
    "outputHp": 5,
    "frame": "132S",
    "basePrice": 79775,
    "flangePrice": 1825
  },
  {
    "id": "S-IE4-6P-55-53",
    "type": "IE4",
    "poles": 6,
    "outputKw": 5.5,
    "outputHp": 7.5,
    "frame": "132M",
    "basePrice": 95500,
    "flangePrice": 1825
  },
  {
    "id": "S-IE4-6P-75-54",
    "type": "IE4",
    "poles": 6,
    "outputKw": 7.5,
    "outputHp": 10,
    "frame": "160M",
    "basePrice": 161325,
    "flangePrice": 4775
  },
  {
    "id": "S-IE4-6P-11-55",
    "type": "IE4",
    "poles": 6,
    "outputKw": 11,
    "outputHp": 15,
    "frame": "160M",
    "basePrice": 203900,
    "flangePrice": 4775
  },
  {
    "id": "S-IE4-6P-15-56",
    "type": "IE4",
    "poles": 6,
    "outputKw": 15,
    "outputHp": 20,
    "frame": "180L",
    "basePrice": 250675,
    "flangePrice": 6925
  },
  {
    "id": "S-IE4-6P-185-57",
    "type": "IE4",
    "poles": 6,
    "outputKw": 18.5,
    "outputHp": 25,
    "frame": "180L",
    "basePrice": 349400,
    "flangePrice": 6925
  },
  {
    "id": "S-IE4-6P-22-58",
    "type": "IE4",
    "poles": 6,
    "outputKw": 22,
    "outputHp": 30,
    "frame": "200L",
    "basePrice": 372400,
    "flangePrice": 10875
  },
  {
    "id": "S-IE4-6P-30-59",
    "type": "IE4",
    "poles": 6,
    "outputKw": 30,
    "outputHp": 40,
    "frame": "225M",
    "basePrice": 499550,
    "flangePrice": 15775
  },
  {
    "id": "S-IE4-6P-37-60",
    "type": "IE4",
    "poles": 6,
    "outputKw": 37,
    "outputHp": 50,
    "frame": "250M",
    "basePrice": 694550,
    "flangePrice": 24675
  },
  {
    "id": "S-IE4-6P-45-61",
    "type": "IE4",
    "poles": 6,
    "outputKw": 45,
    "outputHp": 60,
    "frame": "280S",
    "basePrice": 854600,
    "flangePrice": 32325
  },
  {
    "id": "S-IE4-6P-55-62",
    "type": "IE4",
    "poles": 6,
    "outputKw": 55,
    "outputHp": 75,
    "frame": "280M",
    "basePrice": 934150,
    "flangePrice": 32325
  },
  {
    "id": "S-IE4-6P-75-63",
    "type": "IE4",
    "poles": 6,
    "outputKw": 75,
    "outputHp": 100,
    "frame": "315S",
    "basePrice": 1230100,
    "flangePrice": 56975
  },
  {
    "id": "S-IE4-6P-90-64",
    "type": "IE4",
    "poles": 6,
    "outputKw": 90,
    "outputHp": 120,
    "frame": "315M",
    "basePrice": 1383575,
    "flangePrice": 56975
  },
  {
    "id": "S-IE4-6P-110-65",
    "type": "IE4",
    "poles": 6,
    "outputKw": 110,
    "outputHp": 150,
    "frame": "315L",
    "basePrice": 1543125,
    "flangePrice": 56975
  },
  {
    "id": "S-IE4-6P-132-66",
    "type": "IE4",
    "poles": 6,
    "outputKw": 132,
    "outputHp": 180,
    "frame": "315L",
    "basePrice": 1752300,
    "flangePrice": 56975
  }
];
