export type ThemeMode = 'light' | 'dark';
export interface Settings { theme: ThemeMode; }

const STORAGE_KEY = 'app-settings';

function readStoredSettings(): Settings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<Settings>;
      if (parsed.theme === 'light' || parsed.theme === 'dark') {
        return { theme: parsed.theme };
      }
    }
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
  return {
    theme: window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  };
}

export const defaultSettings: Settings = { theme: 'light' };

export function saveSettings(s: Settings) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
}

export const initialSettings: Settings = defaultSettings;

export function getInitialSettings(): Settings {
  return typeof window === 'undefined'
    ? defaultSettings
    : readStoredSettings();
}
