import React from "react";
import { Paper, Avatar, Typography, Box } from "@mui/material";
import Constants from "../Constants";
import profilePicture from "../assets/images/profile.png";

function About() {
  return (
    <Paper id="about" elevation={6} sx={{ mx: 4, my: 6, p: 2 }}>
      <Typography
        variant="h1"
        gutterBottom
        component="div"
        sx={{
          textAlign: "center",
          m: 3,
          mb: 5,
        }}
      >
        About
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mx: 5,
          mb: 6,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "auto",
          }}
        >
          <Avatar
            alt="Profilbild"
            src={profilePicture}
            sx={{
              width: 700,
              height: 700,
              maxHeight: { xs: 175, sm: 250, md: 350, lg: 500, xl: 625 },
              maxWidth: { xs: 175, sm: 250, md: 350, lg: 500, xl: 625 },
              mt: 1.5,
              ml: 2,
              mr: 8,
              mb: 2,
              float: "left",
            }}
          />
          <Box
            sx={{
              p: "0 2 2",
              mx: 4,
            }}
          >
            <Typography
              sx={{
                textAlign: "justify",
              }}
            >
              {Constants.LOREM_IPSUM + Constants.LOREM_IPSUM}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default About;
