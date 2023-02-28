import styled from "styled-components";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";

const theme = {
  colors: {
    header: "white",
    /*     body: "wheat", */
    footer: "#003333",
  },

  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
      </>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  width: 80%;
  height: 150px;
  max-width: 900px;
  padding: 0 20px;
  margin: 0 auto;
`;
