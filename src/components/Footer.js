import React, { useState } from "react";
import { BottomNavigation, Typography, IconButton, Box } from "@mui/material";
import LightTooltip from "./LightTooltip";
import CustomSnackbar from "./CustomSnackbar";
import Constants from "../Constants";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const copyText = require("clipboard-copy");

function Footer() {
  const [open, setOpen] = useState(false);

  const handleCopyClick = () => {
    setOpen(true);
    copyText(Constants.EMAIL);
  };

  return (
    <BottomNavigation
      sx={{
        height: 100,
        backgroundColor: "#EDE8E8",
        justifyContent: "space-evenly",
        alignItems: "center",
        "& p": {
          fontSize: "1.2rem",
          color: "text.secondary",
          mx: 4,
        },
      }}
    >
      <Box>
        <Typography>© 2022 Christian Gebhardt</Typography>
      </Box>
      <Box>
        <Typography>{"Kontakt: " + Constants.EMAIL}</Typography>
      </Box>
      <Box
        sx={{
          mx: 4,
        }}
      >
        <LightTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">{Constants.EMAIL}</Typography>
            </React.Fragment>
          }
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="email"
            onClick={handleCopyClick}
            sx={{
              mx: 1.5,
              "& svg": {
                fontSize: 24,
              },
            }}
          >
            <Email />
          </IconButton>
        </LightTooltip>
        <CustomSnackbar
          open={open}
          setOpen={setOpen}
          message="Email wurde in Zwischenablage kopiert."
          pos={{ vertical: "top", horizontal: "center" }}
        />
        <a
          target="_blank"
          href="https://github.com/Christian-Gebhardt"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="github"
            sx={{
              mx: 1.5,
              "& svg": {
                fontSize: 24,
              },
            }}
          >
            <GitHub />
          </IconButton>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/christian-gebhardt-a94081224/"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="linkedin"
            sx={{
              mx: 1.5,
              "& svg": {
                fontSize: 24,
              },
            }}
          >
            <LinkedIn />
          </IconButton>
        </a>
      </Box>
    </BottomNavigation>
  );
}

export default Footer;
