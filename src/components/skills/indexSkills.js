import { Stack, useMediaQuery, Box } from "@mui/material";
import {
  SiPython,
  SiJavascript,
  SiCsharp,
  SiHtml5,
  SiTypescript,
  //
  SiNodedotjs,
  SiReact,
  //
  SiPandas,
  SiScikitlearn,
  SiPowerbi,
  //
  SiPostgresql,
  // SiMysql,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiFirebase,
  //
  SiGit,
  SiVisualstudio,
  SiMicrosoftsharepoint,
  SiPycharm,
  //
  SiDocker,
  SiWolframmathematica,
  SiCisco,
} from "react-icons/si";
import { DiJira } from "react-icons/di";
import { FaChartPie } from "react-icons/fa";
import { GiBigWave } from "react-icons/gi";
import {
  SkillContainer,
  SkillContent,
  SkillTitle,
  SkillItem,
} from "../../styles/skills";
import Divider from "@mui/material/Divider";
import Fade from "react-reveal/Fade";
import { useTheme } from "@mui/system";

export default function Skills() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <SkillContainer id="skills">
      <SkillTitle variant="h6">Skills</SkillTitle>
      <Fade cascade>
        <SkillContent>
          {matches ? (
            <Box>
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
              >
                <SkillItem>
                  <Stack direction="column">
                    <SkillItem style={{ fontWeight: "bold", fontSize: "21px" }}>
                      Languages
                    </SkillItem>
                    <SkillItem>
                      <SiPython /> Python
                    </SkillItem>
                    <SkillItem>
                      <SiCsharp /> C#
                    </SkillItem>
                    <SkillItem>
                      <SiJavascript /> Javascript
                    </SkillItem>
                    <SkillItem>
                      <SiTypescript /> TypeScript
                    </SkillItem>
                    <SkillItem>
                      <SiHtml5 /> HTML/CSS
                    </SkillItem>
                  </Stack>
                </SkillItem>
                <SkillItem>
                  <Stack direction="column">
                    <SkillItem style={{ fontWeight: "bold", fontSize: "21px" }}>
                      Data Analyst
                    </SkillItem>
                    <SkillItem>
                      <SiPowerbi  /> Power BI
                    </SkillItem>
                    <SkillItem>
                      <SiPandas /> Pandas
                    </SkillItem>
                    <SkillItem>
                      <FaChartPie /> Mathplotlib
                    </SkillItem>
                    <SkillItem>
                      <GiBigWave /> Seaborn
                    </SkillItem>
                    <SkillItem>
                      <SiScikitlearn /> Scikit Learn
                    </SkillItem>
                  </Stack>
                </SkillItem>
              </Stack>
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2.5}
                marginTop="12px"
              >
                <SkillItem>
                  <Stack direction="column">
                    <SkillItem style={{ fontWeight: "bold", fontSize: "21px" }}>
                      Frameworks
                    </SkillItem>
                    <SkillItem>
                      <SiNodedotjs /> NodeJS
                    </SkillItem>
                    <SkillItem>
                      <SiReact /> ReactJS
                    </SkillItem>
                  </Stack>
                </SkillItem>
                <SkillItem>
                  <Stack direction="column">
                    <SkillItem style={{ fontWeight: "bold", fontSize: "21px" }}>
                      Databases
                    </SkillItem>
                    <SkillItem>
                      <SiPostgresql /> PostgreSQL
                    </SkillItem>
                    <SkillItem>
                      <SiMicrosoftsqlserver /> SQLServer
                    </SkillItem>
                    <SkillItem>
                      <SiMongodb /> MongoDB
                    </SkillItem>
                    <SkillItem>
                      <SiFirebase /> FireBase
                    </SkillItem>
                  </Stack>
                </SkillItem>
              </Stack>
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2.5}
                marginTop="12px"
              >
                <SkillItem>
                  <Stack direction="column">
                    <SkillItem style={{ fontWeight: "bold", fontSize: "21px" }}>
                      Tools
                    </SkillItem>
                    <SkillItem>
                      <SiGit /> Git-GitHub
                    </SkillItem>
                    <SkillItem>
                      <SiVisualstudio /> VS/VS Code
                    </SkillItem>
                    <SkillItem>
                      <SiMicrosoftsharepoint /> SharePoint
                    </SkillItem>
                    <SkillItem>
                      <SiPycharm  /> PyCharm
                    </SkillItem>
                  </Stack>
                </SkillItem>
                <SkillItem>
                  <Stack direction="column">
                    <SkillItem style={{ fontWeight: "bold", fontSize: "21px" }}>
                      Others
                    </SkillItem>
                    <SkillItem>
                      <DiJira /> Jira
                    </SkillItem>
                    <SkillItem>
                      <SiDocker /> Docker
                    </SkillItem>
                    <SkillItem>
                      <SiCisco /> R/S
                    </SkillItem>
                    <SkillItem>
                      <SiWolframmathematica /> Mathematica
                    </SkillItem>
                  </Stack>
                </SkillItem>
              </Stack>
            </Box>
          ) : (
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <SkillItem>
                <Stack direction="column">
                  <SkillItem style={{ fontWeight: "bold", fontSize: "21px" }}>
                    Languages
                  </SkillItem>
                  <SkillItem>
                    <SiPython /> Python
                  </SkillItem>
                  <SkillItem>
                    <SiCsharp /> C#
                  </SkillItem>
                  <SkillItem>
                    <SiJavascript /> Javascript
                  </SkillItem>
                  <SkillItem>
                    <SiTypescript /> TypeScript
                  </SkillItem>
                  <SkillItem>
                    <SiHtml5 /> HTML/CSS
                  </SkillItem>
                </Stack>
              </SkillItem>
              <SkillItem>
                <Stack direction="column">
                  <SkillItem style={{ fontWeight: "bold", fontSize: "21px" }}>
                    Data Analyst
                  </SkillItem>
                  <SkillItem>
                      <SiPowerbi  /> Power BI
                    </SkillItem>
                  <SkillItem>
                    <SiPandas /> Pandas
                  </SkillItem>
                  <SkillItem>
                    <FaChartPie /> Mathplotlib
                  </SkillItem>
                  <SkillItem>
                    <GiBigWave /> Seaborn
                  </SkillItem>
                  <SkillItem>
                    <SiScikitlearn /> Scikit Learn
                  </SkillItem>
                </Stack>
              </SkillItem>
              <SkillItem>
                <Stack direction="column">
                  <SkillItem style={{ fontWeight: "bold", fontSize: "21px" }}>
                    Frameworks
                  </SkillItem>
                  <SkillItem>
                    <SiNodedotjs /> NodeJS
                  </SkillItem>
                  <SkillItem>
                    <SiReact /> ReactJS
                  </SkillItem>
                </Stack>
              </SkillItem>
              <SkillItem>
                <Stack direction="column">
                  <SkillItem style={{ fontWeight: "bold", fontSize: "21px" }}>
                    Databases
                  </SkillItem>
                  <SkillItem>
                    <SiMicrosoftsqlserver /> SQLServer
                  </SkillItem>
                  <SkillItem>
                    <SiPostgresql /> PostgreSQL
                  </SkillItem>
                  <SkillItem>
                    <SiMongodb /> MongoDB
                  </SkillItem>
                  <SkillItem>
                    <SiFirebase /> FireBase
                  </SkillItem>
                </Stack>
              </SkillItem>
              <SkillItem>
                <Stack direction="column">
                  <SkillItem style={{ fontWeight: "bold", fontSize: "21px" }}>
                    Tools
                  </SkillItem>
                  <SkillItem>
                    <SiGit /> Git-GitHub
                  </SkillItem>
                  <SkillItem>
                    <SiVisualstudio /> VS/VS Code
                  </SkillItem>
                  <SkillItem>
                    <SiMicrosoftsharepoint /> SharePoint
                  </SkillItem>
                  <SkillItem>
                    <SiPycharm  /> PyCharm
                  </SkillItem>
                </Stack>
              </SkillItem>
              <SkillItem>
                <Stack direction="column">
                  <SkillItem style={{ fontWeight: "bold", fontSize: "21px" }}>
                    Others
                  </SkillItem>
                  <SkillItem>
                    <DiJira /> Jira
                  </SkillItem>
                  <SkillItem>
                    <SiDocker /> Docker
                  </SkillItem>
                  <SkillItem>
                    <SiCisco /> R/S
                  </SkillItem>
                  <SkillItem>
                    <SiWolframmathematica /> Mathematica
                  </SkillItem>
                </Stack>
              </SkillItem>
            </Stack>
          )}
        </SkillContent>
      </Fade>
    </SkillContainer>
  );
}
