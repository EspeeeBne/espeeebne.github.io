import React, { createContext, useState, useEffect, ReactNode } from 'react';
import {
Settings,
initialSettings,
getInitialSettings,
saveSettings
} from '../config/settings';

interface SettingsContextType {
settings: Settings;
setTheme: (mode: Settings['theme']) => void;
}

const SettingsContext = createContext<SettingsContextType>({
settings: initialSettings,
setTheme: () => {}
});

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
const [settings, setSettings] = useState<Settings>(getInitialSettings);

useEffect(() => {
    saveSettings(settings);
}, [settings]);

const setTheme = (theme: Settings['theme']) => {
    setSettings({ ...settings, theme });
};

return (
    <SettingsContext.Provider value={{ settings, setTheme }}>
    {children}
    </SettingsContext.Provider>
);
};

export default SettingsContext;
