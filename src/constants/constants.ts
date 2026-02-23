export const ROWS = ['A', 'B', 'C'];

export type Theme =
  | 'dark'
  | 'light'
  | 'purple'
  | 'green'
  | 'yellow'
  | 'blue'
  | 'pink';

export const COLOR_THEMES: { id: Theme; color: string }[] = [
  { id: 'purple', color: '#8b2fc9' },
  { id: 'green', color: '#2e7d32' },
  { id: 'yellow', color: '#f9a825' },
  { id: 'blue', color: '#1976d2' },
  { id: 'pink', color: '#e91e63' },
];
