// Providers
import MaterialUiProvider from '../MaterialUiProvider';

// Global Assets
import '@/styles/style.scss';

const ThemeProvider: RPO = ({ children }) => {
  return <MaterialUiProvider>{children}</MaterialUiProvider>;
};

export default ThemeProvider;
