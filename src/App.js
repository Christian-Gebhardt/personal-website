import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Vita from "./sections/Vita";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import { Divider, Box, CircularProgress } from "@mui/material";
import Footer from "./components/Footer";
import { client } from "./client";

function App() {
  const [profile, setProfile] = useState();
  const [about, setAbout] = useState();
  const [vita, setVita] = useState();
  const [skills, setSkills] = useState();
  const [projects, setProjects] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const queryProfile = '*[_type == "profile"]';
      const queryAbout = '*[_type == "about"]';
      const queryVita = '*[_type == "vita"]';
      const querySkills = '*[_type == "skills"]';
      const queryProjects = '*[_type == "projects"]';

      await client.fetch(queryProfile).then((data) => setProfile(data[0]));
      await client.fetch(queryAbout).then((data) => setAbout(data[0]));
      await client
        .fetch(queryVita)
        .then((data) =>
          setVita(data.sort((a, b) => b.time.localeCompare(a.time)))
        );
      await client
        .fetch(querySkills)
        .then((data) =>
          setSkills(data.sort((a, b) => a.priority - b.priority))
        );
      await client
        .fetch(queryProjects)
        .then((data) =>
          setProjects(data.sort((a, b) => a.priority - b.priority))
        );

      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Box>
      <Navbar profile={profile} />
      {!isLoading ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <About about={about} />
          <Divider variant="middle" />
          <Vita vita={vita} />
          <Divider variant="middle" />
          <Skills skills={skills} />
          <Divider variant="middle" />
          <Projects projects={projects} />
          <Footer profile={profile} />
        </Box>
      ) : (
        <CircularProgress
          sx={{
            position: "absolute",
            top: "50%",
            right: "50%",
          }}
        />
      )}
    </Box>
  );
}

export default App;
