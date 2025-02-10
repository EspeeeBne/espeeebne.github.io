import darkTheme from './dark/index';
import lightTheme from './light/index';

export const getTheme = (mode: 'light' | 'dark') => (mode === 'light' ? lightTheme : darkTheme);

export { darkTheme, lightTheme };
