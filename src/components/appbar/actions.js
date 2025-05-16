import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import {
  ActionsContainerMobile,
  ActionsContainerDesktop,
  MyLIst,
} from "../../styles/appbar";

export default function Actions({ matches }) {
  const Component = matches ? ActionsContainerMobile : ActionsContainerDesktop;

  return (
    <Component>
      <MyLIst type="row">
        <ListItemButton
          sx={{ justifyContent: "center" }}
          href="https://ca.linkedin.com/in/ruben-mejia-8b8095248"
        >
          <ListItemIcon sx={{ disply: "flex", justifyContent: "center" }}>
            <LinkedInIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton
          sx={{ justifyContent: "center" }}
          href="https://github.com/rdmcan/time-series"
        >
          <ListItemIcon sx={{ disply: "flex", justifyContent: "center" }}>
            <GitHubIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton
          sx={{ justifyContent: "center" }}
          href="mailto:rdmcand@gmail.com"
        >
          <ListItemIcon sx={{ disply: "flex", justifyContent: "center" }}>
            <EmailIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
      </MyLIst>
    </Component>
  );
}
