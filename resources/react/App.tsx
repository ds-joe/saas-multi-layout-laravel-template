// Providers
import ThemeProvider from "./Providers/Global/ThemeProvider";

const App: RPO = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default App;
