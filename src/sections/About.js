import React from "react";
import { Paper, Avatar, Typography, Box } from "@mui/material";
import Constants from "../Constants";
import profilePicture from "../assets/images/profile.png";

function About() {
  return (
    <Paper
      id="about"
      sx={{
        p: 2,
        m: 8,
      }}
      elevation={6}
    >
      <Typography
        variant="h1"
        gutterBottom
        component="div"
        sx={{
          textAlign: "center",
          m: 3,
        }}
      >
        About
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignContent: "stretch",
        }}
      >
        <Avatar
          alt="Profilbild"
          src={profilePicture}
          sx={{
            width: 700,
            height: 700,
            maxHeight: { xs: 450, md: 575 },
            maxWidth: { xs: 450, md: 575 },
            mx: 4,
            mb: 6,
          }}
        />
        <Box
          sx={{
            mx: 2,
            maxWidth: 800,
          }}
        >
          <Typography
            sx={{
              fontSize: "1.28rem",
            }}
          >
            {Constants.LOREM_IPSUM + Constants.LOREM_IPSUM}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}

export default About;
