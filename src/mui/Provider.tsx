import { FC, PropsWithChildren } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getRootStyleSheet } from '../utils/styles';

const getStyleSheetProperty = getRootStyleSheet();

const materialTheme = createTheme({
  palette: {
    primary: {
      main: getStyleSheetProperty("--primary-color"),
      contrastText: getStyleSheetProperty("--secondary-color"),
    },
  },
  typography: {
    allVariants: {
      color: getStyleSheetProperty("--primary-color"),
    },
    fontFamily: "Roboto, sans-serif",
  },
});

const MuiThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={materialTheme} children={children} />;
};

export default MuiThemeProvider;