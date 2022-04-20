import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// break points
const breakpoints = {
  values: {
    xs: 0,
    sm: 425,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
    "3xl": 1920,
    "4xl": 2560,
    "5xl": 3200,
  },
};

// color palette
const palette = {
  background: {
    default: "#EDE8E8",
  },
  primary: {
    main: "#1B264B",
  },
  secondary: {
    main: "#8896AB",
  },
  accent: {
    main: "FFF2F1",
  },
};

// global component styling
const components = {
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundColor: "#fcfcfc",
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        backgroundColor: "#ffffff",
      },
    },
  },
};

// compute fontSize depending on screen width:
function setFontSize(factor) {
  const width = window.innerWidth;
  if (width >= breakpoints.values["xl"]) {
    return 20 * factor;
  } else if (width >= breakpoints.values["md"]) {
    return 16 * factor;
  } else {
    return 12 * factor;
  }
}

// compute spacing depending on screen width
function setSpacing(factor) {
  const width = window.innerWidth;
  if (width >= breakpoints.values["xl"]) {
    return 8 * factor;
  } else if (width >= breakpoints.values["md"]) {
    return 6 * factor;
  } else {
    return 2 * factor;
  }
}

// compute font factor depending on screen width for responsive fontSize
function setFontFactor(factor) {
  const width = window.innerWidth;
  switch (width) {
    case width > breakpoints.values["2xl"]:
      return 2 * factor;
    case width > breakpoints.values["xl"]:
      return 4 * factor;
    case width > breakpoints.values["md"]:
      return 6 * factor;
    default:
      return 8;
  }
}

// typography styling
const typography = {
  fontSize: setFontSize(1),
  h1: {
    color: "#1B264B",
  },
  h2: {
    color: "#1B264B",
  },
  h3: {
    color: "#1B264B",
  },
  h4: {
    color: "#1B264B",
  },
};

// create custom theme
let styling = createTheme({
  spacing: setSpacing(1),
  palette: palette,
  breakpoints: breakpoints,
  typography: typography,
  components: components,
});

// create responsive font sizes
export let theme = responsiveFontSizes(styling, {
  breakpoints: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"],
  factor: setFontFactor(1),
});
