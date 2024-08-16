// Provider
import ThemeProvider from "./Providers/Global/ThemeProvider";
import PrimeReactThemeProvider from "./Providers/Global/PrimeReactThemeProvider";

const App: RPO = ({ children }) => {
  return (
    <ThemeProvider>
      <PrimeReactThemeProvider>
        {children}
      </PrimeReactThemeProvider>
    </ThemeProvider>
  )
}

export default App;