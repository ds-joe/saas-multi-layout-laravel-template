// Dependencies
import { useState, useEffect } from 'react';

// Providers
import MaterialUiProvider from '../MaterialUiProvider';

// Services
import ThemeManager from '@/Services/ThemeManager';

// Global Assets
import '@/styles/style.scss';

const ThemeProvider: RPO = ({ children }) => {
  const [load, setLoad] = useState<boolean>(false);
  const themeManger = new ThemeManager();

  useEffect(() => {
    (async () => {
      await themeManger.loadStoredTheme();
      setLoad(true);
    })();
  }, []);

  return <MaterialUiProvider>{load && children}</MaterialUiProvider>;
};

export default ThemeProvider;
