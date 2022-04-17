import "./App.css";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Vita from "./sections/Vita";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import { Divider, Box } from "@mui/material";
import Footer from "./components/Footer";

function App() {
  return (
    <Box>
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
    </Box>
  );
}

export default App;
