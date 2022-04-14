import React, { useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";
import { Menu, GitHub, LinkedIn, Email } from "@mui/icons-material";
import LightTooltip from "./LightTooltip";
import logo from "../assets/images/logo.png";
import CustomSnackbar from "./CustomSnackbar";
import Constants from "../Constants";

const copyText = require("clipboard-copy");

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleCopyClick = () => {
    setOpen(true);
    copyText(Constants.EMAIL);
  };

  return (
    <Box>
      <AppBar position="static">
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
              height: 90,
              width: 410,
              maxHeight: { xs: 50, md: 75 },
              maxWidth: { xs: 230, md: 360 },
              m: 0.5,
            }}
            alt="logo"
            src={logo}
          />
          <Box
            sx={{
              position: "absolute",
              right: "120px",
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
                    fontSize: 32,
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
                    fontSize: 32,
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
                    fontSize: 32,
                  },
                }}
              >
                <LinkedIn />
              </IconButton>
            </a>
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mx: 2.5,
              "& svg": {
                fontSize: 52,
              },
              position: "absolute",
              right: "0.5%",
            }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
