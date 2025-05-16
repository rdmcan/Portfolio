import { Divider, Box, ListItemButton, ListItemIcon } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function Actions() {
  return (
    <Box>
      <Box display="flex" flexDirection="row">
        <Divider orientation="vertical" flexItem />
        <ListItemButton href="https://ca.linkedin.com/in/ruben-mejia-8b8095248">
          <ListItemIcon sx={{ disply: "flex", justifyContent: "center" }}>
            <LinkedInIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton href="https://github.com/rdmcan/reactproject.git">
          <ListItemIcon sx={{ disply: "flex", justifyContent: "center" }}>
            <GitHubIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton href="mailto:rdmcand@gmail.com">
          <ListItemIcon sx={{ disply: "flex", justifyContent: "center" }}>
            <EmailIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
      </Box>
    </Box>
  );
}
