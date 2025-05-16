import {
  Typography,
  Box,
  Container,
  Stack,
  Link,
  useMediaQuery,
} from "@mui/material";
import { ContactTitle } from "../../styles/contactme/index";
import Fade from "react-reveal/Fade";
import { useTheme } from "@mui/system";
import Paper from "@mui/material/Paper";

export default function Courses() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="courses"
      display="flex"
      flexDirection="row"
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      paddingTop="60px"
    >
      <Stack id="contactme" spacing={2}>
        <Box>
          {matches ? (
            <Box display="flex" flexDirection="column" marginBottom="150px">
              <Fade>
                <ContactTitle marginBottom="20px">Certificates</ContactTitle>
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
                    <br />
                    <img
                      src="/images/courses/Power BI Certified.jpg"
                      width={100}
                      height={90}
                      alt="Microsoft logo"
                    />
                    <br />
                    <img
                      src="/images/courses/Microsoft_log.png"
                      width={110}
                      height={20}
                      alt="Microsoft logo"
                    />
                    <Link href="https://learn.microsoft.com/en-us/users/rubenmejia-2314/credentials/1c6ae4b56dec0204">
                      <Typography fontWeight="Bold" paddingTop={1.5}>
                        Microsoft PL-300 Certified Data Analyst
                      </Typography>
                    </Link>
                    <Link href="https://www.coursera.org/account/accomplishments/professional-cert/2SLKHSKMS4ZG">
                      <Typography fontWeight="Bold" paddingTop={1}>
                        Microsoft Power BI Data Analyst
                      </Typography>
                    </Link>
                    <br />
                    <img
                      src="/images/courses/UniversityOfWaterloo_logo.png"
                      width={180}
                      height={60}
                      alt="University of Waterloo logo"
                    />
                    <Link href="https://drive.google.com/file/d/1z0sZNj3CT2L7In-TIeRA8QRMW7hp2oZL/view?usp=sharing">
                      <Typography fontWeight="Bold" fontSize={13}>
                        Statistics for Data Science
                      </Typography>
                    </Link>
                    <Link href="https://drive.google.com/file/d/1KSLyiXuUkZj9FdIVKY07kUwyrq1HDIT3/view?usp=sharing">
                      <Typography
                        fontWeight="Bold"
                        fontSize={13}
                        paddingTop={1.5}
                      >
                        Foundations of Data Science
                      </Typography>
                    </Link>
                    <Link href="https://drive.google.com/file/d/1MhozOWkGeGta2YRNRgx3JXULr7DMbULs/view?usp=sharing">
                      <Typography
                        fontWeight="Bold"
                        fontSize={13}
                        paddingTop={1.5}
                      >
                        Intermediate SQL
                      </Typography>
                    </Link>
                    <Link href="https://drive.google.com/file/d/1Mlr3FHgviKQhSYYmsrDmPYi9TVAvh9MD/view?usp=sharing">
                      <Typography
                        fontWeight="Bold"
                        fontSize={13}
                        paddingTop={2}
                        paddingBottom={2}
                      >
                        Introduction to SQL
                      </Typography>
                    </Link>
                    <br />
                    <img
                      src="/images/courses/csm_logosimbolo.jpg"
                      width={80}
                      height={80}
                      alt="National University"
                    />
                    <Link href="https://drive.google.com/file/d/1HAt0zLhn-9ZyuuhTPnTaEOMgccjJmsT-/view?usp=sharing">
                      <Typography
                        fontWeight="Bold"
                        fontSize={13}
                        paddingTop={1.5}
                      >
                        Intro Python Programming II
                      </Typography>
                    </Link>
                    <Link href="https://uecp.edunext.io/certificates/cc78ee5d85ea42079b5bd58d2339478c">
                      <Typography
                        fontWeight="Bold"
                        fontSize={13}
                        paddingTop={2}
                      >
                        Intro Python Programming I
                      </Typography>
                    </Link>
                  </Paper>
                </Container>
              </Fade>
            </Box>
          ) : (
            <Box display="flex" flexDirection="column" marginBottom="180px">
              <Fade>
                <ContactTitle marginBottom="20px">
                  Courses and Certificates
                </ContactTitle>
              </Fade>
              <Fade cascade>
                <Container>
                  <Paper
                    elevation={3}
                    sx={{
                      pt: 2,
                      pb: 7,
                      pl: 14,
                      pr: 14,
                      bgcolor: "background.default",
                    }}
                  >
                    <br />
                    <img
                      src="/images/courses/Power BI Certified.jpg"
                      width={130}
                      height={120}
                      alt="Microsoft logo"
                    />
                    <br />
                    <img
                      src="/images/courses/Microsoft_log.png"
                      width={120}
                      height={23}
                      alt="Microsoft logo"
                    />
                    <Link href="https://learn.microsoft.com/en-us/users/rubenmejia-2314/credentials/1c6ae4b56dec0204">
                      <Typography fontWeight="Bold" paddingTop={1.5}>
                        Microsoft PL-300 Certified Data Analyst
                      </Typography>
                    </Link>
                    <Link href="https://www.coursera.org/account/accomplishments/professional-cert/2SLKHSKMS4ZG">
                      <Typography fontWeight="Bold" paddingTop={1}>
                        Microsoft Power BI Data Analyst
                      </Typography>
                    </Link>
                    <br />
                    <img
                      src="/images/courses/UniversityOfWaterloo_logo.png"
                      width={250}
                      height={80}
                      alt="University of Waterloo logo"
                    />
                    <Link href="https://drive.google.com/file/d/1z0sZNj3CT2L7In-TIeRA8QRMW7hp2oZL/view?usp=sharing">
                      <Typography fontWeight="Bold">
                        Statistics for Data Science
                      </Typography>
                    </Link>
                    <Link href="https://drive.google.com/file/d/1KSLyiXuUkZj9FdIVKY07kUwyrq1HDIT3/view?usp=sharing">
                      <Typography fontWeight="Bold" paddingTop={1.5}>
                        Foundations of Data Science
                      </Typography>
                    </Link>
                    <Link href="https://drive.google.com/file/d/1MhozOWkGeGta2YRNRgx3JXULr7DMbULs/view?usp=sharing">
                      <Typography fontWeight="Bold" paddingTop={1.5}>
                        Intermediate SQL
                      </Typography>
                    </Link>
                    <Link href="https://drive.google.com/file/d/1Mlr3FHgviKQhSYYmsrDmPYi9TVAvh9MD/view?usp=sharing">
                      <Typography fontWeight="Bold" paddingTop={1.5}>
                        Introduction to SQL
                      </Typography>
                    </Link>
                    <br />
                    <br />
                    <Link href="https://www.topuniversities.com/universities/universidad-nacional-de-colombia">
                      <img
                        src="/images/courses/csm_logosimbolo.jpg"
                        width={120}
                        height={120}
                        alt="National University of Colombia"
                      />
                    </Link>
                    <Link href="https://drive.google.com/file/d/1HAt0zLhn-9ZyuuhTPnTaEOMgccjJmsT-/view?usp=sharing">
                      <Typography fontWeight="Bold" paddingTop={1.5}>
                        Introduction to Python Programming II
                      </Typography>
                    </Link>
                    <Link href="https://uecp.edunext.io/certificates/cc78ee5d85ea42079b5bd58d2339478c">
                      <Typography fontWeight="Bold" paddingTop={2}>
                        Introduction to Python Programming I
                      </Typography>
                    </Link>
                    <br />
                    <br />
                    <img
                      src="/images/courses/uc_davis_logo.jpeg"
                      width={90}
                      height={80}
                      alt="Microsoft logo"
                    />
                    <Link href="https://www.coursera.org/account/accomplishments/verify/W267X7AEYZYD">
                      <Typography fontWeight="Bold">
                        SQL for Data Science
                      </Typography>
                    </Link>
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
