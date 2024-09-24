
// Providers
import { ThemeProvider } from "@material-tailwind/react";

const MaterialUiProvider: RPO = ({ children }) => {

  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )

}


export default MaterialUiProvider;
