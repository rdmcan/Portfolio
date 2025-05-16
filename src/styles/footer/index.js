import { Typography, Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FooterTitle = styled(Typography)(({ theme }) => ({
  fontSize: "34px",
  fontWeight: "bold",
  marginBottom: "22px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "42px",
  },
}));
