import "./App.css";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Vita from "./sections/Vita";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Divider, Box } from "@mui/material";
import Footer from "./components/Footer";

let theme = createTheme({
  palette: {
    background: {
      default: "#EDE8E8",
    },
    primary: {
      main: "#1B264B",
    },
    secondary: {
      main: "#8896AB",
    },
    accent: {
      main: "FFF2F1",
    },
  },
  typography: {
    h1: {
      color: "#1B264B",
    },
    h2: {
      color: "#1B264B",
    },
    h3: {
      color: "#1B264B",
    },
    h4: {
      color: "#1B264B",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#fcfcfc",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
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
