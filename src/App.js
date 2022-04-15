import "./App.css";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Vita from "./sections/Vita";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { Divider, Box } from "@mui/material";
import Footer from "./components/Footer";

let theme = createTheme({
  palette: {
    primary: {
      main: "#c5cae9",
    },
    secondary: {
      main: "#edead3",
    },
    accent: {
      main: "#383d6b",
    },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: "auto",
        }}
      >
        <Navbar />
        <About />
        <Divider variant="middle" />
        <Vita />
        <Divider variant="middle" />
        <Skills />
        <Divider variant="middle" />
        <Projects />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
