import { List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import "@fontsource/montez";

export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: "2px",
  alignItems: "center",
}));

// header // npm i @fontsource/montez
export const AppbarHeader = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    padding: "1px",
    flexGrow: 1.5,
    fontSize: "3.2em",
    fontFamily: '"montez", "cursive"',
    marginLeft: "15px",
  },
  [theme.breakpoints.up("md")]: {
    padding: "1px",
    fontSize: "3.8em",
    fontFamily: '"montez", "cursive"',
    marginLeft: "15px",
  },
}));

export const MyLIst = styled(List)(({ type, theme }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 6,
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    background: "lightgray",
    marginLeft: "0px",
  },
}));

export const AppbarText = styled(Typography)(({ theme }) => ({
  fontSize: 23,
  padding: "10px",
  [theme.breakpoints.down("lg")]: {
    fontSize: 20,
    padding: "4px",
  },
}));

export const ActionsContainerMobile = styled(Box)(() => ({
  display: "flex",
  background: "shaft",
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  // width: "auto",
  alignItems: "center",
  zIndex: 99,
  borderTop: `1px solid ${"border"}`,
}));

export const ActionsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));
