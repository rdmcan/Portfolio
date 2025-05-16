import { Link } from "@mui/material";
import {
  AppbarContainer,
  AppbarHeader,
  MyLIst,
  AppbarText,
} from "../../styles/appbar";
// import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";

export default function AppbarDesktop({ matches }) {
  const changeBackground = (e) => {
    e.target.style.background = "lightgray";
  };
  const returnBackground = (e) => {
    e.target.style.background = "white";
  };

  return (
    <AppbarContainer>
      <AppbarHeader>Ruben Mejia</AppbarHeader>
      <MyLIst type="row">
        <Link
          href="#aboutme"
          underline="none"
          marginRight="15px"
          onMouseOver={changeBackground}
          onMouseLeave={returnBackground}
        >
          <AppbarText>About me</AppbarText>
        </Link>
        <Link
          href="#skills"
          underline="none"
          marginRight="15px"
          onMouseOver={changeBackground}
          onMouseLeave={returnBackground}
        >
          <AppbarText>Skills</AppbarText>
        </Link>
        <Link
          href="#projects"
          underline="none"
          marginRight="15px"
          onMouseOver={changeBackground}
          onMouseLeave={returnBackground}
        >
          <AppbarText>Projects</AppbarText>
        </Link>
        <Link
          href="#dashboards"
          underline="none"
          marginRight="15px"
          onMouseOver={changeBackground}
          onMouseLeave={returnBackground}
        >
          <AppbarText>Dashboards</AppbarText>
        </Link>
        <Link
          href="#courses"
          underline="none"
          marginRight="15px"
          onMouseOver={changeBackground}
          onMouseLeave={returnBackground}
        >
          <AppbarText>Certifications</AppbarText>
        </Link>       
      </MyLIst>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
// npm i @mui/icons-material
