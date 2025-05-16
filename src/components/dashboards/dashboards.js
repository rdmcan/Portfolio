import { Box, Container, Stack, useMediaQuery } from "@mui/material";
import { ContactTitle } from "../../styles/contactme/index";
import Fade from "react-reveal/Fade";
import { useTheme } from "@mui/system";
import Paper from "@mui/material/Paper";

export default function Dashboards() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="dashboards"
      display="flex"
      flexDirection="row"
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      paddingTop="60px"
    >
      <Stack id="dashboard_reports" spacing={2}>
        <Box>
          {matches ? (
            <Box display="flex" flexDirection="column" marginBottom="150px">
              <Fade>
                <ContactTitle marginBottom="20px">Dashboards</ContactTitle>
              </Fade>
              <Fade cascade>
                <Container>
                  <Paper
                    elevation={3}
                    sx={{
                      pt: 1,
                      pb: 3,
                      pl: 6,
                      pr: 6,
                      bgcolor: "background.default",
                    }}
                  >
                    <iframe
                      title="Sales Analysis"
                      width="300"
                      height="250"
                      src="https://app.powerbi.com/view?r=eyJrIjoiNTQxYmRlMmMtMmQxNi00MzU0LWI3YWUtNDkwYTQ5Y2EyYTA2IiwidCI6IjJhNzkxYWEzLTEwMzktNGZhZS1hYTljLTQwMDkzYWVlNDU4ZSJ9"
                      frameborder="0"
                      allowFullScreen="true"
                    ></iframe>
                    <p>_______________________________</p>
                    <iframe
                      title="HR Analytics"
                      width="300"
                      height="250"
                      src="https://app.powerbi.com/view?r=eyJrIjoiNzIzOTI3ZDctODc4Ni00YzU3LWJlNmYtNmU0ODY4NjBjMDY3IiwidCI6IjJhNzkxYWEzLTEwMzktNGZhZS1hYTljLTQwMDkzYWVlNDU4ZSJ9&pageName=5b8da414e788dd928b6b"
                      frameborder="0"
                      allowFullScreen="true"
                    ></iframe>
                    <p>_______________________________</p>
                    <iframe
                      title="Bike Shop"
                      width="300"
                      height="250"
                      src="https://app.powerbi.com/view?r=eyJrIjoiOTY2ZmMxODYtMjRiYS00MWY4LWFkMzYtMmYwNDI3YzU3MzhiIiwidCI6IjJhNzkxYWEzLTEwMzktNGZhZS1hYTljLTQwMDkzYWVlNDU4ZSJ9"
                      frameborder="0"
                      allowFullScreen="true"
                    ></iframe>
                  </Paper>
                </Container>
              </Fade>
            </Box>
          ) : (
            <Box display="flex" flexDirection="column" marginBottom="180px">
              <Fade>
                <ContactTitle marginBottom="20px">
                  Dashboards & Reports
                </ContactTitle>
              </Fade>
              <Fade cascade>
                <Container>
                  <Paper
                    elevation={3}
                    sx={{
                      pt: 2,
                      pb: 2,
                      pl: 2,
                      pr: 2,
                      bgcolor: "background.default",
                    }}
                  >
                    <iframe
                      title="Sales Analysis"
                      width="1024"
                      height="612"
                      src="https://app.powerbi.com/view?r=eyJrIjoiNTQxYmRlMmMtMmQxNi00MzU0LWI3YWUtNDkwYTQ5Y2EyYTA2IiwidCI6IjJhNzkxYWEzLTEwMzktNGZhZS1hYTljLTQwMDkzYWVlNDU4ZSJ9"
                      frameborder="0"
                      allowFullScreen="True"
                    ></iframe>
                    <p>_______________________________</p>
                    <iframe
                      title="HR Analytics"
                      width="1024"
                      height="612"
                      src="https://app.powerbi.com/view?r=eyJrIjoiNzIzOTI3ZDctODc4Ni00YzU3LWJlNmYtNmU0ODY4NjBjMDY3IiwidCI6IjJhNzkxYWEzLTEwMzktNGZhZS1hYTljLTQwMDkzYWVlNDU4ZSJ9&pageName=5b8da414e788dd928b6b"
                      frameborder="0"
                      allowFullScreen="true"
                    ></iframe>
                    <p>_______________________________</p>
                    <img
                      src="/images/projects/Mobile Version.png"
                      width="375"
                      height="712"
                      alt="Power BI Dashboard"
                    />
                    <p>_______________________________</p>
                    <a href="https://app.powerbi.com/view?r=eyJrIjoiOGNmMWEwN2YtNTUwNi00NDBhLWExZTMtOWQ5MjdkOWJmNWU4IiwidCI6IjJhNzkxYWEzLTEwMzktNGZhZS1hYTljLTQwMDkzYWVlNDU4ZSJ9">
                      <img
                        src="/images/projects/Survey.png"
                        width="780"
                        height="900"
                        alt="Survey Form"
                      />
                    </a>
                    <p>_______________________________</p>
                    <iframe
                      title="Report Builder"
                      // class="pdf"
                      src="/images/projects/PowerBiReportBuilder.pdf"
                      width="800"
                      height="500"
                    ></iframe>
                    {/* <img
                      src="/images/courses/SharePoint_site.png"
                      width="1024"
                      height="750"
                      alt="Power BI Dashboard"
                    /> */}
                  </Paper>
                </Container>
              </Fade>
            </Box>
          )}
        </Box>
      </Stack>
    </Box>
  );
}
