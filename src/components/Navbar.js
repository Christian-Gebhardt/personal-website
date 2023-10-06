import React, { useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import LightTooltip from "./LightTooltip";
import logo from "../assets/images/logo-white.png";
import CustomSnackbar from "./CustomSnackbar";
import NavigationMenuButton from "./NavigationMenuButton";

const copyText = require("clipboard-copy");

function Navbar({ profile }) {
  const [open, setOpen] = useState(false);

  const handleCopyClick = () => {
    setOpen(true);
    copyText(profile.email);
  };

  return (
    <Box>
      <AppBar position="static" color="primary">
        <Toolbar
          sx={{
            width: "100%",
            height: 100,
            maxHeight: {
              xs: 50,
              md: 75,
            },
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            component="img"
            sx={{
              height: 70,
              width: 360,
              maxHeight: { xs: 30, sm: 40, md: 50, lg: 60 },
              maxWidth: { xs: 150, sm: 200, md: 250, lg: 300 },
              m: 0.5,
            }}
            alt="logo"
            src={logo}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              mx: 2,
            }}
          >
            <LightTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">
                    {profile ? profile.email : ""}
                  </Typography>
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
                    fontSize: { xs: "1.6rem", lg: "2.1rem" },
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
              href={profile ? profile.githuburl : ""}
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
                    fontSize: { xs: "1.8rem", lg: "2.1rem" },
                  },
                }}
              >
                <GitHub />
              </IconButton>
            </a>
            <a
              target="_blank"
              href={profile ? profile.linkedinurl : ""}
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
                    fontSize: { xs: "1.8rem", lg: "2.1rem" },
                  },
                }}
              >
                <LinkedIn />
              </IconButton>
            </a>
            <Box
              sx={{
                mr: 1.5,
                ml: 6,
                "& svg": {
                  fontSize: { xs: "2.2rem", lg: "3rem" },
                },
              }}
            >
              <NavigationMenuButton />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
