import { Stack, Link, Box, Typography } from "@mui/material";
import {
  ProjectsImage,
  ProjectsText,
  ProjectsIcon,
} from "../../styles/projects/index";
import { FiGithub } from "react-icons/fi";

export default function ProjectsScheme(props) {
  return (
    <Box
      sx={{
        boxShadow: 3,
        height: "590px",
        borderRadius: 2,
        marginBottom: "10px",
        marginRight: "4.5px",
        // bgcolor: (theme) =>
        //   theme.palette.mode === "dark" ? "#101010" : "#fff",
        // color: (theme) =>
        //   theme.palette.mode === "dark" ? "grey.300" : "grey.800",
      }}
    >
      <ProjectsImage src={props.imgSrc} />
      <Box margin="10px 15px 15px 15px">
        <Typography
          Typography
          variant="button"
          display="block"
          color="rosybrown"
          gutterBottom
        >
          {props.type}
        </Typography>
        <ProjectsText>
          <Typography variant="h6" fontWeight="bold">
            {props.title}
          </Typography>
          <Stack>
            <Link href={props.github} isExternal>
              <ProjectsIcon>
                <FiGithub />
              </ProjectsIcon>
            </Link>
          </Stack>
        </ProjectsText>
        {props.languages}
        <Typography
          variant="body1"
          color="gray"
          align="justify"
          marginTop={"5px"}
        >
          {props.description}
        </Typography>
      </Box>
    </Box>
  );
}
