import React from "react";
import { Snackbar, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

function CustomSnackbar({ open, setOpen, message, pos }) {
  const { vertical, horizontal } = pos;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <Close fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={handleClose}
      autoHideDuration={1600}
      message={message}
      key={vertical + horizontal}
      action={action}
      sx={{
        maxWidth: "50%",
        left: "25%",
        right: "auto",
        "& .MuiSnackbarContent-message": {
          fontSize: { xs: "0.45rem", md: "0.75rem", lg: "1rem" },
        },
      }}
    ></Snackbar>
  );
}

export default CustomSnackbar;
