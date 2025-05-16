import { Typography, Box, Icon } from "@mui/material";
// import { FooterTitle } from "../../styles/footer/index";
import { SiReact } from "react-icons/si";
import Actions from "./actions";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {matches ? (
        <></>
      ) : (
        <Box
        id="footer"
          display="flex"
          justifyContent="space-between"
          pt={"2rem"}
          pb={"1rem"}
          pl={"2rem"}
          mt={20}
          backgroundColor="lightgray"
        >
          <Box>
            <Typography>
              © {new Date().getFullYear()} Ruben Mejia - made with ReactJS{" "}
              <Icon as={SiReact} fontSize={"0.65rem"} color={"#BF616A"} />
            </Typography>
          </Box>
          <Actions />
        </Box>
      )}
    </>
  );
}
