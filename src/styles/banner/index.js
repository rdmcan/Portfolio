import { Typography, Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
// import { Colors } from "../theme";
import { BsFillPersonLinesFill } from "react-icons/bs"; // npm i react-icons
import { FaFacebookSquare, FaBlogger } from "react-icons/fa"; // npm i react-icons

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "550px",
  height: "300px",
  border: "2px solid #000000",
  // marginTop: "2px",
  marginBottom: "40px",

  [theme.breakpoints.down("md")]: {
    width: "150px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "150px",
    borderRadius: 400 / 2,
  },
}));

export const BannerContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const BannerContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
}));

export const BannerSocials = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  marginTop: "12px",
  [theme.breakpoints.down("sm")]: {
    direction: "row",
    spacing: 6.2,
    marginTop: "35px",
  },
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.36rem",
  fontWeight: "Medium",
  fontFamily: "source-code-pro, monospace",
  color:'#E8E8E8',
  [theme.breakpoints.down("lg")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.8rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.18rem",
  },
}));

export const BannerTxtContent = styled(Typography)(({ theme }) => ({
  marginTop: "200px",
  marginLeft: "155px",
  [theme.breakpoints.down("md")]: {
    marginTop: "200px",
    marginLeft: "14px",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "200px",
    marginLeft: "14px",
  },
}));

export const socialArr = [
  {
    aria: "Blogger",
    icon: <FaBlogger />,
    href: "https://rdmejia.blogspot.com",
  },
  {
    aria: "Facebook",
    icon: <FaFacebookSquare />,
    href: "https://www.facebook.com/juanfe.mejia.5",
  },
  {
    aria: "Person",
    icon: <BsFillPersonLinesFill />,
    href: "#footer",
  },
];
