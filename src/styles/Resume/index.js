import { Typography, Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ResumeTitle = styled(Typography)(({ theme }) => ({
  fontSize: "34px",
  fontWeight: "bold",
  marginBottom: "22px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
}));

export const ResumeContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginBottom: "500px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "450px",
  },
}));

export const ResumeContent = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  height: "200px",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "42px",
  },
}));
