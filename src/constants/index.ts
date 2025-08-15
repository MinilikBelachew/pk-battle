// Navigation tabs
export const NAVIGATION_TABS = [
  { id: 'live', label: 'Tiktok Live Match' },
  { id: 'upcoming', label: 'Upcoming' },
  { id: 'settled', label: 'Recently Settled' },
  { id: 'markets', label: 'Markets' },
] as const;

// Mock betting data
export const MOCK_BETTING_MATCHES = [
  {
    id: '1',
    title: 'Tiktok Live Bet, Sarha vs Abel, Who will win?',
    participants: [
      { id: 'sarha', name: 'Sarha', image: '', odds: 1.5 },
      { id: 'abel', name: 'Abel', image: '', odds: 2.1 },
    ],
    volume: '128k ETB',
    date: 'Nov 7, 26',
    startTime: '8:00 PM',
    endTime: '10:00 PM',
    chance: 60,
    status: 'live' as const,
    category: 'tiktok' as const,
  },
  {
    id: '2',
    title: 'Tiktok Live Bet, Maria vs John, Who will win?',
    participants: [
      { id: 'maria', name: 'Maria', image: '', odds: 1.8 },
      { id: 'john', name: 'John', image: '', odds: 1.9 },
    ],
    volume: '95k ETB',
    date: 'Nov 8, 26',
    startTime: '7:30 PM',
    endTime: '9:30 PM',
    chance: 45,
    status: 'upcoming' as const,
    category: 'tiktok' as const,
  },
  {
    id: '3',
    title: 'Tiktok Live Bet, Alex vs Sarah, Who will win?',
    participants: [
      { id: 'alex', name: 'Alex', image: '', odds: 2.2 },
      { id: 'sarah', name: 'Sarah', image: '', odds: 1.6 },
    ],
    volume: '156k ETB',
    date: 'Nov 9, 26',
    startTime: '6:00 PM',
    endTime: '8:00 PM',
    chance: 70,
    status: 'live' as const,
    category: 'tiktok' as const,
  },
  {
    id: '4',
    title: 'Tiktok Live Bet, Emma vs David, Who will win?',
    participants: [
      { id: 'emma', name: 'Emma', image: '', odds: 1.7 },
      { id: 'david', name: 'David', image: '', odds: 2.0 },
    ],
    volume: '89k ETB',
    date: 'Nov 10, 26',
    startTime: '5:00 PM',
    endTime: '7:00 PM',
    chance: 55,
    status: 'upcoming' as const,
    category: 'tiktok' as const,
  },
  {
    id: '5',
    title: 'Tiktok Live Bet, Lisa vs Mike, Who will win?',
    participants: [
      { id: 'lisa', name: 'Lisa', image: '', odds: 1.9 },
      { id: 'mike', name: 'Mike', image: '', odds: 1.8 },
    ],
    volume: '112k ETB',
    date: 'Nov 11, 26',
    startTime: '9:00 PM',
    endTime: '11:00 PM',
    chance: 48,
    status: 'upcoming' as const,
    category: 'tiktok' as const,
  },
  {
    id: '6',
    title: 'Tiktok Live Bet, Anna vs Tom, Who will win?',
    participants: [
      { id: 'anna', name: 'Anna', image: '', odds: 2.1 },
      { id: 'tom', name: 'Tom', image: '', odds: 1.7 },
    ],
    volume: '134k ETB',
    date: 'Nov 12, 26',
    startTime: '8:15 PM',
    endTime: '10:15 PM',
    chance: 65,
    status: 'upcoming' as const,
    category: 'tiktok' as const,
  },
  {
    id: '7',
    title: 'Tiktok Live Bet, Sophie vs Chris, Who will win?',
    participants: [
      { id: 'sophie', name: 'Sophie', image: '', odds: 1.6 },
      { id: 'chris', name: 'Chris', image: '', odds: 2.3 },
    ],
    volume: '167k ETB',
    date: 'Nov 13, 26',
    startTime: '7:45 PM',
    endTime: '9:45 PM',
    chance: 72,
    status: 'upcoming' as const,
    category: 'tiktok' as const,
  },
  {
    id: '8',
    title: 'Tiktok Live Bet, Rachel vs James, Who will win?',
    participants: [
      { id: 'rachel', name: 'Rachel', image: '', odds: 1.4 },
      { id: 'james', name: 'James', image: '', odds: 2.5 },
    ],
    volume: '98k ETB',
    date: 'Nov 14, 26',
    startTime: '6:30 PM',
    endTime: '8:30 PM',
    chance: 38,
    status: 'upcoming' as const,
    category: 'tiktok' as const,
  },
  {
    id: '9',
    title: 'Tiktok Live Bet, Nicole vs Daniel, Who will win?',
    participants: [
      { id: 'nicole', name: 'Nicole', image: '', odds: 2.0 },
      { id: 'daniel', name: 'Daniel', image: '', odds: 1.5 },
    ],
    volume: '145k ETB',
    date: 'Nov 15, 26',
    startTime: '8:30 PM',
    endTime: '10:30 PM',
    chance: 58,
    status: 'upcoming' as const,
    category: 'tiktok' as const,
  },
];

// API endpoints (for future use)
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
  },
  BETTING: {
    MATCHES: '/betting/matches',
    PLACE_BET: '/betting/place-bet',
    MY_BETS: '/betting/my-bets',
  },
  USER: {
    PROFILE: '/user/profile',
    WALLET: '/user/wallet',
  },
} as const;

// App configuration
export const APP_CONFIG = {
  APP_NAME: 'PK Battle',
  CURRENCY: 'ETB',
  DEFAULT_BALANCE: 1000,
} as const; 