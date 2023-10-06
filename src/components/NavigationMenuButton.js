import React, { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "react-scroll/modules/components/Link";

function NavigationMenuButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& li": {
            fontSize: { xs: "0.8rem", md: "1rem", lg: "1.2rem" },
            mx: { xs: 0.5, md: 1, lg: 2 },
            my: { xs: -2, md: 1, lg: 1 },
          },
        }}
      >
        <Link to="about" spy={true} smooth={true}>
          <MenuItem onClick={handleClose}>About</MenuItem>
        </Link>
        <Link to="vita" spy={true} smooth={true}>
          <MenuItem onClick={handleClose}>C.V.</MenuItem>
        </Link>
        <Link to="skills" spy={true} smooth={true}>
          <MenuItem onClick={handleClose}>Skills</MenuItem>
        </Link>
        <Link to="projects" spy={true} smooth={true}>
          <MenuItem onClick={handleClose}>Projekte</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default NavigationMenuButton;
