import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
// import { Colors } from "../theme";

export const AboutmeContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  marginTop: "130px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const AboutmeContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  textAlign: "justify",
}));

export const AboutDescContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  maxWidth: 800,
  padding: "20px",
}));

export const AboutmeTitle = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  fontSize: "34px",
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {
    fontSize: "28px",
  },
}));

export const AboutmeImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  borderRadius: 400 / 2,
  marginTop: "32px",
  [theme.breakpoints.down("md")]: {
    marginTop: "52px",
    width: "150px",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "52px",
    width: "150px",
    borderRadius: 400 / 2,
  },
}));

export const AboutmeDescription = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  marginTop: "0.5em",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    lineHeight: 1.5,
    // letterSpacing: 1.15,
  },
}));
