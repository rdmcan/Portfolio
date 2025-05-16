import { Container, Stack } from "@mui/material";
import Fade from "react-reveal/Fade";
import { Element } from "react-scroll";
import {
  ResumeContainer,
  ResumeContent,
  ResumeTitle,
} from "../../styles/Resume/index";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Resume() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Element>
      <ResumeContainer id="resume">
        <ResumeContent>
          <Stack>
            <Fade>
              <ResumeTitle>Resume</ResumeTitle>
            </Fade>
            <Container>
              {matches ? (
                <iframe
                  src="https://drive.google.com/file/d/1_LrvsD0tamYhCrw0SfO0A_9sFW-BqU1f/preview"
                  width="100%"
                  height="480"
                  allow="autoplay"
                ></iframe>
              ) : (
                <iframe
                  src="https://drive.google.com/file/d/1_LrvsD0tamYhCrw0SfO0A_9sFW-BqU1f/preview"
                  width="640"
                  height="480"
                  allow="autoplay"
                ></iframe>
              )}
            </Container>
          </Stack>
        </ResumeContent>
      </ResumeContainer>
    </Element>
  );
}
