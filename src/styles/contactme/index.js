import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContactTitle = styled(Typography)(({ theme }) => ({
  fontSize: "34px",
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
}));
