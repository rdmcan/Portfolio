import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ProjectsContainer = styled(Box)((theme) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "100px",
}));

export const ProjectsTitle = styled(Typography)(({ theme }) => ({
  fontSize: "34px",
  fontWeight: "bold",
  marginBottom: "30px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
}));

export const ProjectsImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "325px",
  height: "250px",
  borderRadius: 3,
}));

export const ProjectsText = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const ProjectsIcon = styled(Box)(({ theme }) => ({
  border: 2,
  borderRadius: 3,
  borderColor: "black",
  width: "2rem",
  height: "2rem",
  textAlign: "center",
  backgroundColor: "#9fb7c9",
  lineHeight: 2.2,
  "&:hover": {
    backgroundColor: "lightgray",
    opacity: [0.9, 0.8, 0.7],
  },
}));
