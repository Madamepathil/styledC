import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import { GlobalStyle } from "../styles/globalStyles";
import { darkTheme, lightTheme } from "../styles/theme";

export const ThemeContext = createContext({
  theme: "",
  setTheme: () => {},
});

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeContext.Provider value={{ setTheme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
