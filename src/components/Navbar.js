import React, { useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import LightTooltip from "./LightTooltip";
import logo from "../assets/images/logo-white.png";
import CustomSnackbar from "./CustomSnackbar";
import Constants from "../Constants";
import NavigationMenuButton from "./NavigationMenuButton";

const copyText = require("clipboard-copy");

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleCopyClick = () => {
    setOpen(true);
    copyText(Constants.EMAIL);
  };

  return (
    <Box>
      <AppBar position="static" color="primary">
        <Toolbar
          sx={{
            height: 100,
            maxHeight: {
              xs: 60,
              md: 85,
            },
          }}
        >
          <Box
            component="img"
            sx={{
              height: 70,
              width: 360,
              maxHeight: { xs: 50, md: 60 },
              maxWidth: { xs: 250, md: 320 },
              m: 0.5,
            }}
            alt="logo"
            src={logo}
          />
          <Box
            sx={{
              position: "absolute",
              right: "8%",
              mx: 2,
            }}
          >
            <LightTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">{Constants.EMAIL}</Typography>
                </React.Fragment>
              }
              placement="bottom"
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
                    fontSize: 28,
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
                    fontSize: 28,
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
                    fontSize: 28,
                  },
                }}
              >
                <LinkedIn />
              </IconButton>
            </a>
          </Box>
          <Box
            sx={{
              mx: 2.5,
              "& svg": {
                fontSize: 48,
              },
              position: "absolute",
              right: "0.5%",
            }}
          >
            <NavigationMenuButton />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
