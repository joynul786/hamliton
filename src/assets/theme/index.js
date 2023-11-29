import { createTheme } from "@mui/material";

export const Theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "inherit",
          whiteSpace: "pre-wrap",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "inherit",
          borderRadius: "6px",
          padding: "10px 20px",
          textTransform: "capitalize",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: "inherit",
          fontWeight: "inherit",
          color: "inherit",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: "inherit",
          fontWeight: "inherit",
          color: "inherit",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#00877a",
      100: "rgba(0, 135, 122, 0.1)",
      200: "rgba(0, 135, 122, 0.2)",
      300: "rgba(0, 135, 122, 0.3)",
      400: "rgba(0, 135, 122, 0.4)",
      500: "rgba(0, 135, 122, 0.5)",
      600: "rgba(0, 135, 122, 0.6)",
      700: "rgba(0, 135, 122, 0.7)",
      800: "rgba(0, 135, 122, 0.8)",
      900: "rgba(0, 135, 122, 0.9)",
      contrastText: "#EEEEEE",
    },
    secondary: {
      main: "#faaf01",
      100: "rgba(250, 175, 1, 0.1)",
      200: "rgba(250, 175, 1, 0.2)",
      300: "rgba(250, 175, 1, 0.3)",
      400: "rgba(250, 175, 1, 0.4)",
      500: "rgba(250, 175, 1, 0.5)",
      600: "rgba(250, 175, 1, 0.6)",
      700: "rgba(250, 175, 1, 0.7)",
      800: "rgba(250, 175, 1, 0.8)",
      900: "rgba(250, 175, 1, 0.9)",
      contrastText: "#010101",
    },
    black: {
      main: "#000",
      100: "rgba(0, 0, 0, 0.1)",
      200: "rgba(0, 0, 0, 0.2)",
      300: "rgba(0, 0, 0, 0.3)",
      400: "rgba(0, 0, 0, 0.4)",
      500: "rgba(0, 0, 0, 0.5)",
      600: "rgba(0, 0, 0, 0.6)",
      700: "rgba(0, 0, 0, 0.7)",
      800: "rgba(0, 0, 0, 0.8)",
      900: "rgba(0, 0, 0, 0.9)",
      contrastText: "#fff",
    },
    white: {
      main: "#fff",
      contrastText: "#000",
    },
    dark: {
      main: "#010101",
      secondary: "#020202",
      dark3: "#2A2A2A",
      contrastText: "#fff",
    },
    text: {
      main: "rgba(0, 0, 0, 0.61)",
      secondary: "#545454",
      grey: "#E0E0E0",
      primaryLight: "rgba(78, 183, 167, 1)",
    },
    blue: {
      main: "#5771CD",
    },
    grey: {
      main: "#909090",
      light: "#F8F8F8",
    },
    orange: {
      main: "#FF720C",
    },
  },
});
console.log(Theme);
