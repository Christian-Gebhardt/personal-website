import React, { useState } from "react";
import { BottomNavigation, Typography, IconButton, Box } from "@mui/material";
import LightTooltip from "./LightTooltip";
import CustomSnackbar from "./CustomSnackbar";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const copyText = require("clipboard-copy");

function Footer({ profile }) {
  const [open, setOpen] = useState(false);

  const handleCopyClick = () => {
    setOpen(true);
    copyText(profile.email);
  };

  return (
    <BottomNavigation
      sx={{
        height: { xs: 60, sm: 70, lg: 90, xl: 100 },
        backgroundColor: "#EDE8E8",
        justifyContent: "space-evenly",
        alignItems: "center",
        "& p": {
          fontSize: { xs: "0.6rem", sm: "0.8rem", lg: "1rem" },
          color: "text.secondary",
          mx: 4,
        },
      }}
    >
      <Box>
        <Typography>© 2022 Christian Gebhardt</Typography>
      </Box>
      <Box>
        <Typography>{profile ? "Kontakt: " + profile.email : ""}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
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
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="email"
            onClick={handleCopyClick}
            sx={{
              mx: 1,
              "& svg": {
                fontSize: { xs: "1rem", lg: "2rem" },
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
          pos={{ vertical: "bottom", horizontal: "center" }}
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
              mx: 1,
              "& svg": {
                fontSize: { xs: "1rem", lg: "2rem" },
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
              mx: 1,
              "& svg": {
                fontSize: { xs: "1rem", lg: "2rem" },
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
