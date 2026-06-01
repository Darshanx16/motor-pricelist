export interface CromptonMotor {
  id: string;
  type: 'IE2' | 'IE3';
  poles: number;
  outputKw: number;
  outputHp: number;
  frame: string;
  basePrice: number;
  addonType: '3%' | '5%' | 'NIL';
}

export const cromptonMotors: CromptonMotor[] = [
  {
    "id": "C-IE2-4P-055-9",
    "type": "IE2",
    "poles": 4,
    "outputKw": 0.55,
    "outputHp": 0.75,
    "frame": "ND80",
    "basePrice": 19881,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-2P-075-10",
    "type": "IE2",
    "poles": 2,
    "outputKw": 0.75,
    "outputHp": 1,
    "frame": "ND80",
    "basePrice": 19881,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-4P-075-10",
    "type": "IE2",
    "poles": 4,
    "outputKw": 0.75,
    "outputHp": 1,
    "frame": "ND80",
    "basePrice": 20179,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-2P-11-11",
    "type": "IE2",
    "poles": 2,
    "outputKw": 1.1,
    "outputHp": 1.5,
    "frame": "ND80",
    "basePrice": 21602,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-4P-11-11",
    "type": "IE2",
    "poles": 4,
    "outputKw": 1.1,
    "outputHp": 1.5,
    "frame": "ND90S",
    "basePrice": 26804,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-2P-15-12",
    "type": "IE2",
    "poles": 2,
    "outputKw": 1.5,
    "outputHp": 2,
    "frame": "ND90S",
    "basePrice": 25539,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-4P-15-12",
    "type": "IE2",
    "poles": 4,
    "outputKw": 1.5,
    "outputHp": 2,
    "frame": "ND90L",
    "basePrice": 30229,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-2P-22-13",
    "type": "IE2",
    "poles": 2,
    "outputKw": 2.2,
    "outputHp": 3,
    "frame": "ND90L",
    "basePrice": 31846,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-4P-22-13",
    "type": "IE2",
    "poles": 4,
    "outputKw": 2.2,
    "outputHp": 3,
    "frame": "ND100L",
    "basePrice": 37057,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-2P-37-14",
    "type": "IE2",
    "poles": 2,
    "outputKw": 3.7,
    "outputHp": 5,
    "frame": "ND100L",
    "basePrice": 41552,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-4P-37-14",
    "type": "IE2",
    "poles": 4,
    "outputKw": 3.7,
    "outputHp": 5,
    "frame": "ND112M",
    "basePrice": 49095,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-2P-55-15",
    "type": "IE2",
    "poles": 2,
    "outputKw": 5.5,
    "outputHp": 7.5,
    "frame": "ND112M",
    "basePrice": 54940,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-2P-55-16",
    "type": "IE2",
    "poles": 2,
    "outputKw": 5.5,
    "outputHp": 7.5,
    "frame": "ND132S",
    "basePrice": 67146,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-4P-55-16",
    "type": "IE2",
    "poles": 4,
    "outputKw": 5.5,
    "outputHp": 7.5,
    "frame": "ND132S",
    "basePrice": 66605,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-2P-75-17",
    "type": "IE2",
    "poles": 2,
    "outputKw": 7.5,
    "outputHp": 10,
    "frame": "ND132S",
    "basePrice": 75087,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-4P-75-17",
    "type": "IE2",
    "poles": 4,
    "outputKw": 7.5,
    "outputHp": 10,
    "frame": "ND132M",
    "basePrice": 78824,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-2P-93-18",
    "type": "IE2",
    "poles": 2,
    "outputKw": 9.3,
    "outputHp": 12.5,
    "frame": "ND132M",
    "basePrice": 106430,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-4P-93-18",
    "type": "IE2",
    "poles": 4,
    "outputKw": 9.3,
    "outputHp": 12.5,
    "frame": "NG132M",
    "basePrice": 101062,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-2P-93-19",
    "type": "IE2",
    "poles": 2,
    "outputKw": 9.3,
    "outputHp": 12.5,
    "frame": "ND160M",
    "basePrice": 126698,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-4P-93-19",
    "type": "IE2",
    "poles": 4,
    "outputKw": 9.3,
    "outputHp": 12.5,
    "frame": "ND160M",
    "basePrice": 124434,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-2P-11-20",
    "type": "IE2",
    "poles": 2,
    "outputKw": 11,
    "outputHp": 15,
    "frame": "ND160M",
    "basePrice": 139817,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-4P-11-20",
    "type": "IE2",
    "poles": 4,
    "outputKw": 11,
    "outputHp": 15,
    "frame": "ND160M",
    "basePrice": 128624,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-2P-15-21",
    "type": "IE2",
    "poles": 2,
    "outputKw": 15,
    "outputHp": 20,
    "frame": "ND160M",
    "basePrice": 147150,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-4P-15-21",
    "type": "IE2",
    "poles": 4,
    "outputKw": 15,
    "outputHp": 20,
    "frame": "ND160L",
    "basePrice": 162091,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-2P-185-22",
    "type": "IE2",
    "poles": 2,
    "outputKw": 18.5,
    "outputHp": 25,
    "frame": "ND160L",
    "basePrice": 184687,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-4P-185-22",
    "type": "IE2",
    "poles": 4,
    "outputKw": 18.5,
    "outputHp": 25,
    "frame": "ND180M",
    "basePrice": 202379,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-2P-22-23",
    "type": "IE2",
    "poles": 2,
    "outputKw": 22,
    "outputHp": 30,
    "frame": "ND180M",
    "basePrice": 212383,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-4P-22-23",
    "type": "IE2",
    "poles": 4,
    "outputKw": 22,
    "outputHp": 30,
    "frame": "ND180L",
    "basePrice": 233613,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-2P-30-24",
    "type": "IE2",
    "poles": 2,
    "outputKw": 30,
    "outputHp": 40,
    "frame": "ND200L",
    "basePrice": 308916,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-4P-30-24",
    "type": "IE2",
    "poles": 4,
    "outputKw": 30,
    "outputHp": 40,
    "frame": "ND200L",
    "basePrice": 317857,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-2P-37-25",
    "type": "IE2",
    "poles": 2,
    "outputKw": 37,
    "outputHp": 50,
    "frame": "ND200L",
    "basePrice": 358037,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-4P-37-25",
    "type": "IE2",
    "poles": 4,
    "outputKw": 37,
    "outputHp": 50,
    "frame": "ND225S",
    "basePrice": 355457,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-2P-45-26",
    "type": "IE2",
    "poles": 2,
    "outputKw": 45,
    "outputHp": 60,
    "frame": "ND225M",
    "basePrice": 471445,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-4P-45-26",
    "type": "IE2",
    "poles": 4,
    "outputKw": 45,
    "outputHp": 60,
    "frame": "ND225M",
    "basePrice": 421038,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-2P-55-27",
    "type": "IE2",
    "poles": 2,
    "outputKw": 55,
    "outputHp": 75,
    "frame": "ND250MX",
    "basePrice": 620247,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-4P-55-27",
    "type": "IE2",
    "poles": 4,
    "outputKw": 55,
    "outputHp": 75,
    "frame": "ND250MX",
    "basePrice": 592028,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-2P-75-28",
    "type": "IE2",
    "poles": 2,
    "outputKw": 75,
    "outputHp": 100,
    "frame": "ND280S",
    "basePrice": 832327,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-4P-75-28",
    "type": "IE2",
    "poles": 4,
    "outputKw": 75,
    "outputHp": 100,
    "frame": "ND280S",
    "basePrice": 763977,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-2P-90-29",
    "type": "IE2",
    "poles": 2,
    "outputKw": 90,
    "outputHp": 120,
    "frame": "ND280M",
    "basePrice": 937814,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-4P-90-29",
    "type": "IE2",
    "poles": 4,
    "outputKw": 90,
    "outputHp": 120,
    "frame": "ND280M",
    "basePrice": 889844,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-2P-110-30",
    "type": "IE2",
    "poles": 2,
    "outputKw": 110,
    "outputHp": 150,
    "frame": "ND315S",
    "basePrice": 1209743,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-4P-110-30",
    "type": "IE2",
    "poles": 4,
    "outputKw": 110,
    "outputHp": 150,
    "frame": "ND315S",
    "basePrice": 1028098,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-2P-125-31",
    "type": "IE2",
    "poles": 2,
    "outputKw": 125,
    "outputHp": 170,
    "frame": "ND315M",
    "basePrice": 1416583,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-4P-125-31",
    "type": "IE2",
    "poles": 4,
    "outputKw": 125,
    "outputHp": 170,
    "frame": "ND315M",
    "basePrice": 1143922,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-2P-132-32",
    "type": "IE2",
    "poles": 2,
    "outputKw": 132,
    "outputHp": 180,
    "frame": "ND315M",
    "basePrice": 1452265,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-4P-132-32",
    "type": "IE2",
    "poles": 4,
    "outputKw": 132,
    "outputHp": 180,
    "frame": "ND315M",
    "basePrice": 1204719,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-4P-150-33",
    "type": "IE2",
    "poles": 4,
    "outputKw": 150,
    "outputHp": 201,
    "frame": "ND315LX",
    "basePrice": 1416170,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-2P-160-34",
    "type": "IE2",
    "poles": 2,
    "outputKw": 160,
    "outputHp": 215,
    "frame": "ND315LX",
    "basePrice": 1644039,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-4P-160-34",
    "type": "IE2",
    "poles": 4,
    "outputKw": 160,
    "outputHp": 215,
    "frame": "ND315LX",
    "basePrice": 1509076,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-2P-180-35",
    "type": "IE2",
    "poles": 2,
    "outputKw": 180,
    "outputHp": 240,
    "frame": "ND315LX",
    "basePrice": 1730784,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-4P-180-35",
    "type": "IE2",
    "poles": 4,
    "outputKw": 180,
    "outputHp": 240,
    "frame": "ND315LX",
    "basePrice": 1605023,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-2P-200-36",
    "type": "IE2",
    "poles": 2,
    "outputKw": 200,
    "outputHp": 270,
    "frame": "ND315LX",
    "basePrice": 1832197,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-4P-200-36",
    "type": "IE2",
    "poles": 4,
    "outputKw": 200,
    "outputHp": 270,
    "frame": "ND315LX",
    "basePrice": 1656663,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-2P-225-37",
    "type": "IE2",
    "poles": 2,
    "outputKw": 225,
    "outputHp": 300,
    "frame": "ND355LX’",
    "basePrice": 2111039,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-4P-225-37",
    "type": "IE2",
    "poles": 4,
    "outputKw": 225,
    "outputHp": 300,
    "frame": "ND355LX",
    "basePrice": 2106894,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-2P-250-38",
    "type": "IE2",
    "poles": 2,
    "outputKw": 250,
    "outputHp": 335,
    "frame": "ND355LX”",
    "basePrice": 2162144,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-4P-250-38",
    "type": "IE2",
    "poles": 4,
    "outputKw": 250,
    "outputHp": 335,
    "frame": "ND355LX",
    "basePrice": 2235504,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-2P-275-39",
    "type": "IE2",
    "poles": 2,
    "outputKw": 275,
    "outputHp": 370,
    "frame": "ND355LX”",
    "basePrice": 2223236,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-4P-275-39",
    "type": "IE2",
    "poles": 4,
    "outputKw": 275,
    "outputHp": 370,
    "frame": "ND355LX",
    "basePrice": 2283090,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-2P-315-40",
    "type": "IE2",
    "poles": 2,
    "outputKw": 315,
    "outputHp": 425,
    "frame": "ND355LX’",
    "basePrice": 2380147,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-4P-315-40",
    "type": "IE2",
    "poles": 4,
    "outputKw": 315,
    "outputHp": 425,
    "frame": "ND355LX’",
    "basePrice": 2488759,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-6P-037-5",
    "type": "IE2",
    "poles": 6,
    "outputKw": 0.37,
    "outputHp": 0.55,
    "frame": "ND80",
    "basePrice": 22636,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-8P-037-5",
    "type": "IE2",
    "poles": 8,
    "outputKw": 0.37,
    "outputHp": 0.55,
    "frame": "ND90S",
    "basePrice": 26750,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-6P-055-6",
    "type": "IE2",
    "poles": 6,
    "outputKw": 0.55,
    "outputHp": 0.75,
    "frame": "ND80",
    "basePrice": 22585,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-8P-055-6",
    "type": "IE2",
    "poles": 8,
    "outputKw": 0.55,
    "outputHp": 0.75,
    "frame": "ND90L",
    "basePrice": 30160,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-6P-075-7",
    "type": "IE2",
    "poles": 6,
    "outputKw": 0.75,
    "outputHp": 1,
    "frame": "ND90S",
    "basePrice": 25418,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-8P-075-7",
    "type": "IE2",
    "poles": 8,
    "outputKw": 0.75,
    "outputHp": 1,
    "frame": "ND100L",
    "basePrice": 37071,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-6P-11-8",
    "type": "IE2",
    "poles": 6,
    "outputKw": 1.1,
    "outputHp": 1.5,
    "frame": "ND90L",
    "basePrice": 27888,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-8P-11-8",
    "type": "IE2",
    "poles": 8,
    "outputKw": 1.1,
    "outputHp": 1.5,
    "frame": "ND100L",
    "basePrice": 43798,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-6P-15-9",
    "type": "IE2",
    "poles": 6,
    "outputKw": 1.5,
    "outputHp": 2,
    "frame": "ND100L",
    "basePrice": 40573,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-8P-15-9",
    "type": "IE2",
    "poles": 8,
    "outputKw": 1.5,
    "outputHp": 2,
    "frame": "ND112M",
    "basePrice": 52250,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-6P-22-10",
    "type": "IE2",
    "poles": 6,
    "outputKw": 2.2,
    "outputHp": 3,
    "frame": "ND112M",
    "basePrice": 43968,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-8P-22-10",
    "type": "IE2",
    "poles": 8,
    "outputKw": 2.2,
    "outputHp": 3,
    "frame": "ND132S",
    "basePrice": 70781,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-6P-37-11",
    "type": "IE2",
    "poles": 6,
    "outputKw": 3.7,
    "outputHp": 5,
    "frame": "ND132S",
    "basePrice": 71585,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-8P-37-11",
    "type": "IE2",
    "poles": 8,
    "outputKw": 3.7,
    "outputHp": 5,
    "frame": "ND160M",
    "basePrice": 118263,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-6P-55-13",
    "type": "IE2",
    "poles": 6,
    "outputKw": 5.5,
    "outputHp": 7.5,
    "frame": "ND132M",
    "basePrice": 86445,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-8P-55-13",
    "type": "IE2",
    "poles": 8,
    "outputKw": 5.5,
    "outputHp": 7.5,
    "frame": "ND160M",
    "basePrice": 140586,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-6P-75-14",
    "type": "IE2",
    "poles": 6,
    "outputKw": 7.5,
    "outputHp": 10,
    "frame": "ND160M",
    "basePrice": 126205,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-8P-75-14",
    "type": "IE2",
    "poles": 8,
    "outputKw": 7.5,
    "outputHp": 10,
    "frame": "ND160L",
    "basePrice": 170506,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-6P-93-16",
    "type": "IE2",
    "poles": 6,
    "outputKw": 9.3,
    "outputHp": 12.5,
    "frame": "ND160L",
    "basePrice": 149850,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-8P-93-16",
    "type": "IE2",
    "poles": 8,
    "outputKw": 9.3,
    "outputHp": 12.5,
    "frame": "ND180M",
    "basePrice": 221704,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-6P-11-17",
    "type": "IE2",
    "poles": 6,
    "outputKw": 11,
    "outputHp": 15,
    "frame": "ND160L",
    "basePrice": 155286,
    "addonType": "3%"
  },
  {
    "id": "C-IE2-8P-11-17",
    "type": "IE2",
    "poles": 8,
    "outputKw": 11,
    "outputHp": 15,
    "frame": "ND180L",
    "basePrice": 233795,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-6P-15-18",
    "type": "IE2",
    "poles": 6,
    "outputKw": 15,
    "outputHp": 20,
    "frame": "ND180L",
    "basePrice": 207652,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-8P-15-18",
    "type": "IE2",
    "poles": 8,
    "outputKw": 15,
    "outputHp": 20,
    "frame": "ND200L",
    "basePrice": 327826,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-6P-185-19",
    "type": "IE2",
    "poles": 6,
    "outputKw": 18.5,
    "outputHp": 25,
    "frame": "ND200L",
    "basePrice": 286847,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-8P-185-19",
    "type": "IE2",
    "poles": 8,
    "outputKw": 18.5,
    "outputHp": 25,
    "frame": "ND225S",
    "basePrice": 410904,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-6P-22-20",
    "type": "IE2",
    "poles": 6,
    "outputKw": 22,
    "outputHp": 30,
    "frame": "ND200L",
    "basePrice": 313725,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-8P-22-20",
    "type": "IE2",
    "poles": 8,
    "outputKw": 22,
    "outputHp": 30,
    "frame": "ND225M",
    "basePrice": 494034,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-6P-30-21",
    "type": "IE2",
    "poles": 6,
    "outputKw": 30,
    "outputHp": 40,
    "frame": "ND225M",
    "basePrice": 441471,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-8P-30-21",
    "type": "IE2",
    "poles": 8,
    "outputKw": 30,
    "outputHp": 40,
    "frame": "ND250M",
    "basePrice": 647914,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-6P-37-22",
    "type": "IE2",
    "poles": 6,
    "outputKw": 37,
    "outputHp": 50,
    "frame": "ND250M",
    "basePrice": 566625,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-8P-37-22",
    "type": "IE2",
    "poles": 8,
    "outputKw": 37,
    "outputHp": 50,
    "frame": "ND280S",
    "basePrice": 876817,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-6P-45-23",
    "type": "IE2",
    "poles": 6,
    "outputKw": 45,
    "outputHp": 60,
    "frame": "ND280S",
    "basePrice": 771404,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-8P-45-23",
    "type": "IE2",
    "poles": 8,
    "outputKw": 45,
    "outputHp": 60,
    "frame": "ND280M",
    "basePrice": 942455,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-6P-55-24",
    "type": "IE2",
    "poles": 6,
    "outputKw": 55,
    "outputHp": 75,
    "frame": "ND280M",
    "basePrice": 885901,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-8P-55-24",
    "type": "IE2",
    "poles": 8,
    "outputKw": 55,
    "outputHp": 75,
    "frame": "ND315S",
    "basePrice": 1043831,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-6P-75-25",
    "type": "IE2",
    "poles": 6,
    "outputKw": 75,
    "outputHp": 100,
    "frame": "ND315S",
    "basePrice": 997283,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-8P-75-25",
    "type": "IE2",
    "poles": 8,
    "outputKw": 75,
    "outputHp": 100,
    "frame": "ND315M",
    "basePrice": 1265967,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-6P-90-26",
    "type": "IE2",
    "poles": 6,
    "outputKw": 90,
    "outputHp": 120,
    "frame": "ND315M",
    "basePrice": 1219467,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-8P-90-26",
    "type": "IE2",
    "poles": 8,
    "outputKw": 90,
    "outputHp": 120,
    "frame": "ND315L",
    "basePrice": 1714307,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-6P-110-27",
    "type": "IE2",
    "poles": 6,
    "outputKw": 110,
    "outputHp": 150,
    "frame": "ND315M",
    "basePrice": 1328150,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-8P-110-27",
    "type": "IE2",
    "poles": 8,
    "outputKw": 110,
    "outputHp": 150,
    "frame": "ND315LX",
    "basePrice": 1987669,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-6P-125-28",
    "type": "IE2",
    "poles": 6,
    "outputKw": 125,
    "outputHp": 170,
    "frame": "ND315LX",
    "basePrice": 1585570,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-8P-125-28",
    "type": "IE2",
    "poles": 8,
    "outputKw": 125,
    "outputHp": 170,
    "frame": "ND315LX",
    "basePrice": 1993933,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-6P-132-29",
    "type": "IE2",
    "poles": 6,
    "outputKw": 132,
    "outputHp": 180,
    "frame": "ND315LX",
    "basePrice": 1624305,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-8P-132-29",
    "type": "IE2",
    "poles": 8,
    "outputKw": 132,
    "outputHp": 180,
    "frame": "ND315LX",
    "basePrice": 2102601,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-6P-160-31",
    "type": "IE2",
    "poles": 6,
    "outputKw": 160,
    "outputHp": 215,
    "frame": "ND315LX",
    "basePrice": 1768191,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-8P-160-31",
    "type": "IE2",
    "poles": 8,
    "outputKw": 160,
    "outputHp": 215,
    "frame": "ND355LX",
    "basePrice": 2559235,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-6P-180-32",
    "type": "IE2",
    "poles": 6,
    "outputKw": 180,
    "outputHp": 240,
    "frame": "ND355LX",
    "basePrice": 2089172,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-8P-180-32",
    "type": "IE2",
    "poles": 8,
    "outputKw": 180,
    "outputHp": 240,
    "frame": "ND355LX",
    "basePrice": 2625733,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-6P-200-33",
    "type": "IE2",
    "poles": 6,
    "outputKw": 200,
    "outputHp": 270,
    "frame": "ND355LX",
    "basePrice": 2236693,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-8P-200-33",
    "type": "IE2",
    "poles": 8,
    "outputKw": 200,
    "outputHp": 270,
    "frame": "ND355LX",
    "basePrice": 2812847,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-6P-225-34",
    "type": "IE2",
    "poles": 6,
    "outputKw": 225,
    "outputHp": 300,
    "frame": "ND355LX",
    "basePrice": 2303868,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-8P-225-34",
    "type": "IE2",
    "poles": 8,
    "outputKw": 225,
    "outputHp": 300,
    "frame": "ND355LX",
    "basePrice": 3814864,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-6P-250-35",
    "type": "IE2",
    "poles": 6,
    "outputKw": 250,
    "outputHp": 335,
    "frame": "ND355LX",
    "basePrice": 2463302,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-6P-275-36",
    "type": "IE2",
    "poles": 6,
    "outputKw": 275,
    "outputHp": 370,
    "frame": "ND355LX’",
    "basePrice": 2863826,
    "addonType": "5%"
  },
  {
    "id": "C-IE2-6P-315-37",
    "type": "IE2",
    "poles": 6,
    "outputKw": 315,
    "outputHp": 425,
    "frame": "ND355LX’",
    "basePrice": 3545158,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-2P-055-9",
    "type": "IE3",
    "poles": 2,
    "outputKw": 0.55,
    "outputHp": 0.75,
    "frame": "NS80M",
    "basePrice": 21188,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-4P-055-9",
    "type": "IE3",
    "poles": 4,
    "outputKw": 0.55,
    "outputHp": 0.75,
    "frame": "NS80M",
    "basePrice": 22455,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-2P-075-10",
    "type": "IE3",
    "poles": 2,
    "outputKw": 0.75,
    "outputHp": 1,
    "frame": "NS80M",
    "basePrice": 21886,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-4P-075-10",
    "type": "IE3",
    "poles": 4,
    "outputKw": 0.75,
    "outputHp": 1,
    "frame": "NS80M",
    "basePrice": 23995,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-2P-11-11",
    "type": "IE3",
    "poles": 2,
    "outputKw": 1.1,
    "outputHp": 1.5,
    "frame": "NS80M",
    "basePrice": 23839,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-4P-11-11",
    "type": "IE3",
    "poles": 4,
    "outputKw": 1.1,
    "outputHp": 1.5,
    "frame": "NS90S",
    "basePrice": 29214,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-2P-15-12",
    "type": "IE3",
    "poles": 2,
    "outputKw": 1.5,
    "outputHp": 2,
    "frame": "NS90S",
    "basePrice": 27306,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-4P-15-12",
    "type": "IE3",
    "poles": 4,
    "outputKw": 1.5,
    "outputHp": 2,
    "frame": "NS90L",
    "basePrice": 34008,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-2P-22-13",
    "type": "IE3",
    "poles": 2,
    "outputKw": 2.2,
    "outputHp": 3,
    "frame": "NS90L",
    "basePrice": 35080,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-4P-22-13",
    "type": "IE3",
    "poles": 4,
    "outputKw": 2.2,
    "outputHp": 3,
    "frame": "NS100L",
    "basePrice": 40493,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-2P-37-14",
    "type": "IE3",
    "poles": 2,
    "outputKw": 3.7,
    "outputHp": 5,
    "frame": "NS100L",
    "basePrice": 51886,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-4P-37-14",
    "type": "IE3",
    "poles": 4,
    "outputKw": 3.7,
    "outputHp": 5,
    "frame": "NS112M",
    "basePrice": 52513,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-2P-55-15",
    "type": "IE3",
    "poles": 2,
    "outputKw": 5.5,
    "outputHp": 7.5,
    "frame": "NS132S",
    "basePrice": 71001,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-4P-55-15",
    "type": "IE3",
    "poles": 4,
    "outputKw": 5.5,
    "outputHp": 7.5,
    "frame": "NS132S",
    "basePrice": 74381,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-2P-75-16",
    "type": "IE3",
    "poles": 2,
    "outputKw": 7.5,
    "outputHp": 10,
    "frame": "NS132S",
    "basePrice": 75633,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-4P-75-16",
    "type": "IE3",
    "poles": 4,
    "outputKw": 7.5,
    "outputHp": 10,
    "frame": "NS132MX",
    "basePrice": 87896,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-2P-93-17",
    "type": "IE3",
    "poles": 2,
    "outputKw": 9.3,
    "outputHp": 12.5,
    "frame": "NS132M",
    "basePrice": 115123,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-2P-93-18",
    "type": "IE3",
    "poles": 2,
    "outputKw": 9.3,
    "outputHp": 12.5,
    "frame": "ND160M",
    "basePrice": 133512,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-4P-93-18",
    "type": "IE3",
    "poles": 4,
    "outputKw": 9.3,
    "outputHp": 12.5,
    "frame": "ND160M",
    "basePrice": 137111,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-2P-11-19",
    "type": "IE3",
    "poles": 2,
    "outputKw": 11,
    "outputHp": 15,
    "frame": "ND160M",
    "basePrice": 141411,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-4P-11-19",
    "type": "IE3",
    "poles": 4,
    "outputKw": 11,
    "outputHp": 15,
    "frame": "ND160M",
    "basePrice": 141838,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-2P-15-20",
    "type": "IE3",
    "poles": 2,
    "outputKw": 15,
    "outputHp": 20,
    "frame": "ND160M",
    "basePrice": 154820,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-4P-15-20",
    "type": "IE3",
    "poles": 4,
    "outputKw": 15,
    "outputHp": 20,
    "frame": "ND160L",
    "basePrice": 177060,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-2P-185-21",
    "type": "IE3",
    "poles": 2,
    "outputKw": 18.5,
    "outputHp": 25,
    "frame": "ND160L",
    "basePrice": 193173,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-4P-185-21",
    "type": "IE3",
    "poles": 4,
    "outputKw": 18.5,
    "outputHp": 25,
    "frame": "ND180M",
    "basePrice": 216718,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-2P-22-22",
    "type": "IE3",
    "poles": 2,
    "outputKw": 22,
    "outputHp": 30,
    "frame": "ND180M",
    "basePrice": 220706,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-4P-22-22",
    "type": "IE3",
    "poles": 4,
    "outputKw": 22,
    "outputHp": 30,
    "frame": "ND180L",
    "basePrice": 237344,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-2P-30-23",
    "type": "IE3",
    "poles": 2,
    "outputKw": 30,
    "outputHp": 40,
    "frame": "ND200L",
    "basePrice": 332741,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-4P-30-23",
    "type": "IE3",
    "poles": 4,
    "outputKw": 30,
    "outputHp": 40,
    "frame": "ND200L",
    "basePrice": 327461,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-2P-37-24",
    "type": "IE3",
    "poles": 2,
    "outputKw": 37,
    "outputHp": 50,
    "frame": "ND200L",
    "basePrice": 394666,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-4P-37-24",
    "type": "IE3",
    "poles": 4,
    "outputKw": 37,
    "outputHp": 50,
    "frame": "ND225S",
    "basePrice": 409604,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-2P-45-25",
    "type": "IE3",
    "poles": 2,
    "outputKw": 45,
    "outputHp": 60,
    "frame": "ND225M",
    "basePrice": 520005,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-4P-45-25",
    "type": "IE3",
    "poles": 4,
    "outputKw": 45,
    "outputHp": 60,
    "frame": "ND225M",
    "basePrice": 496513,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-2P-55-26",
    "type": "IE3",
    "poles": 2,
    "outputKw": 55,
    "outputHp": 75,
    "frame": "ND250MX",
    "basePrice": 651101,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-4P-55-26",
    "type": "IE3",
    "poles": 4,
    "outputKw": 55,
    "outputHp": 75,
    "frame": "ND250MX",
    "basePrice": 607424,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-2P-75-27",
    "type": "IE3",
    "poles": 2,
    "outputKw": 75,
    "outputHp": 100,
    "frame": "ND280S",
    "basePrice": 882196,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-4P-75-27",
    "type": "IE3",
    "poles": 4,
    "outputKw": 75,
    "outputHp": 100,
    "frame": "ND280S",
    "basePrice": 802027,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-2P-90-28",
    "type": "IE3",
    "poles": 2,
    "outputKw": 90,
    "outputHp": 120,
    "frame": "ND280M",
    "basePrice": 1017648,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-4P-90-28",
    "type": "IE3",
    "poles": 4,
    "outputKw": 90,
    "outputHp": 120,
    "frame": "ND280M",
    "basePrice": 934201,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-2P-110-29",
    "type": "IE3",
    "poles": 2,
    "outputKw": 110,
    "outputHp": 150,
    "frame": "ND315S",
    "basePrice": 1303311,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-4P-110-29",
    "type": "IE3",
    "poles": 4,
    "outputKw": 110,
    "outputHp": 150,
    "frame": "ND315S",
    "basePrice": 1090330,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-2P-125-30",
    "type": "IE3",
    "poles": 2,
    "outputKw": 125,
    "outputHp": 170,
    "frame": "ND315M",
    "basePrice": 1459665,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-4P-125-30",
    "type": "IE3",
    "poles": 4,
    "outputKw": 125,
    "outputHp": 170,
    "frame": "ND315M",
    "basePrice": 1213189,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-2P-132-31",
    "type": "IE3",
    "poles": 2,
    "outputKw": 132,
    "outputHp": 180,
    "frame": "ND315M",
    "basePrice": 1485299,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-4P-132-31",
    "type": "IE3",
    "poles": 4,
    "outputKw": 132,
    "outputHp": 180,
    "frame": "ND315M",
    "basePrice": 1277607,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-2P-160-32",
    "type": "IE3",
    "poles": 2,
    "outputKw": 160,
    "outputHp": 215,
    "frame": "ND315L",
    "basePrice": 1706453,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-4P-160-32",
    "type": "IE3",
    "poles": 4,
    "outputKw": 160,
    "outputHp": 215,
    "frame": "ND315L",
    "basePrice": 1608099,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-2P-180-33",
    "type": "IE3",
    "poles": 2,
    "outputKw": 180,
    "outputHp": 240,
    "frame": "ND315L",
    "basePrice": 1796394,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-4P-180-33",
    "type": "IE3",
    "poles": 4,
    "outputKw": 180,
    "outputHp": 240,
    "frame": "ND315L",
    "basePrice": 1815218,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-2P-200-34",
    "type": "IE3",
    "poles": 2,
    "outputKw": 200,
    "outputHp": 270,
    "frame": "ND315L",
    "basePrice": 1880015,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-4P-200-34",
    "type": "IE3",
    "poles": 4,
    "outputKw": 200,
    "outputHp": 270,
    "frame": "ND315L",
    "basePrice": 1891087,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-2P-225-35",
    "type": "IE3",
    "poles": 2,
    "outputKw": 225,
    "outputHp": 300,
    "frame": "ND355S",
    "basePrice": 2204016,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-4P-225-35",
    "type": "IE3",
    "poles": 4,
    "outputKw": 225,
    "outputHp": 300,
    "frame": "ND355L",
    "basePrice": 2298742,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-2P-250-36",
    "type": "IE3",
    "poles": 2,
    "outputKw": 250,
    "outputHp": 335,
    "frame": "ND355L",
    "basePrice": 2266343,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-4P-250-36",
    "type": "IE3",
    "poles": 4,
    "outputKw": 250,
    "outputHp": 335,
    "frame": "ND355L",
    "basePrice": 2451286,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-2P-275-37",
    "type": "IE3",
    "poles": 2,
    "outputKw": 275,
    "outputHp": 370,
    "frame": "ND355L",
    "basePrice": 2294962,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-4P-275-37",
    "type": "IE3",
    "poles": 4,
    "outputKw": 275,
    "outputHp": 370,
    "frame": "ND355L",
    "basePrice": 2412884,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-2P-315-38",
    "type": "IE3",
    "poles": 2,
    "outputKw": 315,
    "outputHp": 425,
    "frame": "ND355L",
    "basePrice": 2513285,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-4P-315-38",
    "type": "IE3",
    "poles": 4,
    "outputKw": 315,
    "outputHp": 425,
    "frame": "ND355L",
    "basePrice": 2707624,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-6P-037-5",
    "type": "IE3",
    "poles": 6,
    "outputKw": 0.37,
    "outputHp": 0.5,
    "frame": "NS80M",
    "basePrice": 24939,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-8P-037-5",
    "type": "IE3",
    "poles": 8,
    "outputKw": 0.37,
    "outputHp": 0.5,
    "frame": "NS90S",
    "basePrice": 31891,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-6P-055-6",
    "type": "IE3",
    "poles": 6,
    "outputKw": 0.55,
    "outputHp": 0.75,
    "frame": "NS80M",
    "basePrice": 25625,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-8P-055-6",
    "type": "IE3",
    "poles": 8,
    "outputKw": 0.55,
    "outputHp": 0.75,
    "frame": "NS90L",
    "basePrice": 34874,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-6P-075-7",
    "type": "IE3",
    "poles": 6,
    "outputKw": 0.75,
    "outputHp": 1,
    "frame": "NS90S",
    "basePrice": 31105,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-8P-075-7",
    "type": "IE3",
    "poles": 8,
    "outputKw": 0.75,
    "outputHp": 1,
    "frame": "NS100L",
    "basePrice": 42850,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-6P-11-8",
    "type": "IE3",
    "poles": 6,
    "outputKw": 1.1,
    "outputHp": 1.5,
    "frame": "NS90L",
    "basePrice": 34008,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-8P-11-8",
    "type": "IE3",
    "poles": 8,
    "outputKw": 1.1,
    "outputHp": 1.5,
    "frame": "NS100L",
    "basePrice": 52091,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-6P-15-9",
    "type": "IE3",
    "poles": 6,
    "outputKw": 1.5,
    "outputHp": 2,
    "frame": "NS100L",
    "basePrice": 50732,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-8P-15-9",
    "type": "IE3",
    "poles": 8,
    "outputKw": 1.5,
    "outputHp": 2,
    "frame": "NS112M",
    "basePrice": 60373,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-6P-22-10",
    "type": "IE3",
    "poles": 6,
    "outputKw": 2.2,
    "outputHp": 3,
    "frame": "NS112M",
    "basePrice": 55113,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-8P-22-10",
    "type": "IE3",
    "poles": 8,
    "outputKw": 2.2,
    "outputHp": 3,
    "frame": "NS132S",
    "basePrice": 79907,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-6P-37-11",
    "type": "IE3",
    "poles": 6,
    "outputKw": 3.7,
    "outputHp": 5,
    "frame": "NS132S",
    "basePrice": 81252,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-8P-37-11",
    "type": "IE3",
    "poles": 8,
    "outputKw": 3.7,
    "outputHp": 5,
    "frame": "ND160M",
    "basePrice": 124381,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-6P-55-12",
    "type": "IE3",
    "poles": 6,
    "outputKw": 5.5,
    "outputHp": 7.5,
    "frame": "NS132MX",
    "basePrice": 96975,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-8P-55-12",
    "type": "IE3",
    "poles": 8,
    "outputKw": 5.5,
    "outputHp": 7.5,
    "frame": "ND160M",
    "basePrice": 180988,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-6P-75-13",
    "type": "IE3",
    "poles": 6,
    "outputKw": 7.5,
    "outputHp": 10,
    "frame": "ND160M",
    "basePrice": 145787,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-8P-75-13",
    "type": "IE3",
    "poles": 8,
    "outputKw": 7.5,
    "outputHp": 10,
    "frame": "ND160L",
    "basePrice": 191375,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-6P-93-15",
    "type": "IE3",
    "poles": 6,
    "outputKw": 9.3,
    "outputHp": 12.5,
    "frame": "ND160L",
    "basePrice": 158861,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-8P-93-15",
    "type": "IE3",
    "poles": 8,
    "outputKw": 9.3,
    "outputHp": 12.5,
    "frame": "ND180M",
    "basePrice": 248859,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-6P-11-16",
    "type": "IE3",
    "poles": 6,
    "outputKw": 11,
    "outputHp": 15,
    "frame": "ND160L",
    "basePrice": 179487,
    "addonType": "3%"
  },
  {
    "id": "C-IE3-8P-11-16",
    "type": "IE3",
    "poles": 8,
    "outputKw": 11,
    "outputHp": 15,
    "frame": "ND180L",
    "basePrice": 262441,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-6P-15-17",
    "type": "IE3",
    "poles": 6,
    "outputKw": 15,
    "outputHp": 20,
    "frame": "ND180M",
    "basePrice": 239334,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-8P-15-17",
    "type": "IE3",
    "poles": 8,
    "outputKw": 15,
    "outputHp": 20,
    "frame": "ND200L",
    "basePrice": 359465,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-6P-185-18",
    "type": "IE3",
    "poles": 6,
    "outputKw": 18.5,
    "outputHp": 25,
    "frame": "ND200L",
    "basePrice": 313456,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-8P-185-18",
    "type": "IE3",
    "poles": 8,
    "outputKw": 18.5,
    "outputHp": 25,
    "frame": "ND225S",
    "basePrice": 461262,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-6P-22-19",
    "type": "IE3",
    "poles": 6,
    "outputKw": 22,
    "outputHp": 30,
    "frame": "ND200L",
    "basePrice": 336757,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-8P-22-19",
    "type": "IE3",
    "poles": 8,
    "outputKw": 22,
    "outputHp": 30,
    "frame": "ND225M",
    "basePrice": 554498,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-6P-30-20",
    "type": "IE3",
    "poles": 6,
    "outputKw": 30,
    "outputHp": 40,
    "frame": "ND225M",
    "basePrice": 482231,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-8P-30-20",
    "type": "IE3",
    "poles": 8,
    "outputKw": 30,
    "outputHp": 40,
    "frame": "ND250M",
    "basePrice": 748647,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-6P-37-21",
    "type": "IE3",
    "poles": 6,
    "outputKw": 37,
    "outputHp": 50,
    "frame": "ND250M",
    "basePrice": 609074,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-8P-37-21",
    "type": "IE3",
    "poles": 8,
    "outputKw": 37,
    "outputHp": 50,
    "frame": "ND280S",
    "basePrice": 1013173,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-6P-45-22",
    "type": "IE3",
    "poles": 6,
    "outputKw": 45,
    "outputHp": 60,
    "frame": "ND280S",
    "basePrice": 829169,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-8P-45-22",
    "type": "IE3",
    "poles": 8,
    "outputKw": 45,
    "outputHp": 60,
    "frame": "ND280M",
    "basePrice": 1088970,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-6P-55-23",
    "type": "IE3",
    "poles": 6,
    "outputKw": 55,
    "outputHp": 75,
    "frame": "ND280M",
    "basePrice": 930515,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-8P-55-23",
    "type": "IE3",
    "poles": 8,
    "outputKw": 55,
    "outputHp": 75,
    "frame": "ND315S",
    "basePrice": 1178114,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-6P-75-24",
    "type": "IE3",
    "poles": 6,
    "outputKw": 75,
    "outputHp": 100,
    "frame": "ND315S",
    "basePrice": 1047557,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-8P-75-24",
    "type": "IE3",
    "poles": 8,
    "outputKw": 75,
    "outputHp": 100,
    "frame": "ND315M",
    "basePrice": 1421036,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-6P-90-25",
    "type": "IE3",
    "poles": 6,
    "outputKw": 90,
    "outputHp": 120,
    "frame": "ND315M",
    "basePrice": 1280942,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-8P-90-25",
    "type": "IE3",
    "poles": 8,
    "outputKw": 90,
    "outputHp": 120,
    "frame": "ND315L",
    "basePrice": 1924187,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-6P-110-26",
    "type": "IE3",
    "poles": 6,
    "outputKw": 110,
    "outputHp": 150,
    "frame": "ND315M",
    "basePrice": 1395161,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-8P-110-26",
    "type": "IE3",
    "poles": 8,
    "outputKw": 110,
    "outputHp": 150,
    "frame": "ND315LX",
    "basePrice": 2096969,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-6P-125-27",
    "type": "IE3",
    "poles": 6,
    "outputKw": 125,
    "outputHp": 170,
    "frame": "ND315L",
    "basePrice": 1748748,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-8P-125-27",
    "type": "IE3",
    "poles": 8,
    "outputKw": 125,
    "outputHp": 170,
    "frame": "ND315LX",
    "basePrice": 2303885,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-6P-132-28",
    "type": "IE3",
    "poles": 6,
    "outputKw": 132,
    "outputHp": 180,
    "frame": "ND315L",
    "basePrice": 1750789,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-8P-132-28",
    "type": "IE3",
    "poles": 8,
    "outputKw": 132,
    "outputHp": 180,
    "frame": "ND315LX",
    "basePrice": 2360051,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-6P-160-29",
    "type": "IE3",
    "poles": 6,
    "outputKw": 160,
    "outputHp": 215,
    "frame": "ND315L",
    "basePrice": 1815100,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-8P-160-29",
    "type": "IE3",
    "poles": 8,
    "outputKw": 160,
    "outputHp": 215,
    "frame": "ND355LX",
    "basePrice": 2889913,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-6P-180-30",
    "type": "IE3",
    "poles": 6,
    "outputKw": 180,
    "outputHp": 240,
    "frame": "ND355L",
    "basePrice": 2439122,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-8P-180-30",
    "type": "IE3",
    "poles": 8,
    "outputKw": 180,
    "outputHp": 240,
    "frame": "ND355LX",
    "basePrice": 2896022,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-6P-200-31",
    "type": "IE3",
    "poles": 6,
    "outputKw": 200,
    "outputHp": 270,
    "frame": "ND355L",
    "basePrice": 2543475,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-8P-200-31",
    "type": "IE3",
    "poles": 8,
    "outputKw": 200,
    "outputHp": 270,
    "frame": "ND355LX",
    "basePrice": 3102397,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-6P-225-32",
    "type": "IE3",
    "poles": 6,
    "outputKw": 225,
    "outputHp": 300,
    "frame": "ND355LX",
    "basePrice": 2761577,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-8P-225-32",
    "type": "IE3",
    "poles": 8,
    "outputKw": 225,
    "outputHp": 300,
    "frame": "ND355LX",
    "basePrice": 4407884,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-6P-250-33",
    "type": "IE3",
    "poles": 6,
    "outputKw": 250,
    "outputHp": 335,
    "frame": "ND355LX",
    "basePrice": 2868911,
    "addonType": "5%"
  },
  {
    "id": "C-IE3-6P-275-34",
    "type": "IE3",
    "poles": 6,
    "outputKw": 275,
    "outputHp": 370,
    "frame": "ND355LX",
    "basePrice": 3243221,
    "addonType": "5%"
  }
];
