import {
  AboutmeContainer,
  AboutmeTitle,
  AboutmeDescription,
  AboutmeImage,
  AboutmeContent,
  AboutDescContainer,
} from "../../styles/aboutme/indexAboutme";
import Fade from "react-reveal/Fade";
import { Box } from "@mui/material";

export default function Aboutme() {
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AboutmeContainer id="aboutme">
      <AboutmeContent>
        <AboutmeTitle variant="h6">About me</AboutmeTitle>
        <Fade cascade>
          <AboutDescContainer>
            <Box justifyContent="center" mr="30px">
              <AboutmeImage src="/images/banner/DSCN0148.png" />
            </Box>
            <Box
              display="flex"
              textAlign="justifyContent"
              maxWidth="600px"
              height="200=px"
            >
              <AboutmeDescription>
              Data Analyst with expertise in Business Analytics Solutions such as Microsoft Power BI, 
              highly skill in Microsoft Excel, SQL, and Programming Languages such as Python, JavaScript, 
              and C#. Able to use metrics and insights to generate data-driven decisions that align with 
              company goals and strategies. Excellent communication skills to design compelling dashboards 
              and reports that employ storytelling technics to uncover key insights in Agile environments. 
              An extensive experience in teaching Math that fuels my ability to work independently and as 
              a member of a team. I am currently taking a Data Science Certificate Program at the University 
              of Waterloo to be update in the data analysis field. 
              </AboutmeDescription>
            </Box>
          </AboutDescContainer>
        </Fade>
      </AboutmeContent>
    </AboutmeContainer>
  );
}
