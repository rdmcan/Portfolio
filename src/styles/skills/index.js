import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
// import { Colors } from "../theme";
// https://react.school/material-ui/grid

export const SkillContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "20px",
  marginBottom: "120px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const SkillTitle = styled(Typography)(({ theme }) => ({
  fontSize: "34px",
  fontWeight: "bold",
  marginBottom: "22px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
}));

export const SkillContent = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

export const SkillItem = styled(Box)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(1),
  textAlign: "left",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(0.3),
    textAlign: "left",
  },
}));
