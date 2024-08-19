// Dependencies
import { Fragment } from 'react';

// primereact Assets
import 'primereact/resources/themes/lara-light-cyan/theme.css'; //theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const PrimeReactThemeProvider: RPO = ({ children }) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

export default PrimeReactThemeProvider;