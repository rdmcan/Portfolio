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

export default function Degrees() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="degrees"
      display="flex"
      flexDirection="row"
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      paddingTop="60px"
    >
      <Stack id="bac&college" spacing={2}>
        <Box>
          {matches ? (
            <Box display="flex" flexDirection="column" marginBottom="150px">
              <Fade>
                <ContactTitle marginBottom="20px">
                  Bac & College Degrees
                </ContactTitle>
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
                    <Link href="https://en.wikipedia.org/wiki/Fanshawe_College">
                      <img
                        src="/images/Bacs/fanshawe.jpg"
                        width={210}
                        height={70}
                        alt="Fanshawe College"
                      />
                    </Link>
                    <Link href="https://drive.google.com/file/d/1kwoz9vXw387cjQQKwQzMwami6ItfZeXF/view?usp=sharing">
                      <Typography fontWeight="Bold" fontSize={13}>
                        Computer Programming and Analysis
                      </Typography>
                    </Link>
                    <br />
                    <Link href="https://en.wikipedia.org/wiki/Francisco_Jos%C3%A9_de_Caldas_District_University">
                      <img
                        src="/images/Bacs/UDistrital.png"
                        width={230}
                        height={60}
                        alt="Universidad Distrital Francisco Jose de Caldas"
                      />
                    </Link>
                    <Link href="https://drive.google.com/file/d/1ccquv4xiW94Pd3Mu8QQbeb90NACOCB01/view?usp=sharing">
                      <Typography fontWeight="Bold" paddingTop={0.5} fontSize={13}>
                        Bachelor of Mathematics
                      </Typography>
                    </Link>
                    <Link href="https://drive.google.com/file/d/1cdqZgo-CQldYPudMNdyepy1ZBoelTIQg/view?usp=sharing">
                      <Typography fontWeight="Bold" paddingTop={1.5} fontSize={13}>
                        Postgraduate Diploma in Technology Education
                      </Typography>
                    </Link>
                    <br />
                  </Paper>
                </Container>
              </Fade>
            </Box>
          ) : (
            <Box display="flex" flexDirection="column" marginBottom="180px">
              <Fade>
                <ContactTitle marginBottom="20px">
                  Bac & College Degrees
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
                    <Link href="https://en.wikipedia.org/wiki/Fanshawe_College">
                      <img
                        src="/images/Bacs/fanshawe.jpg"
                        width={240}
                        height={80}
                        alt="Fanshawe College"
                      />
                    </Link>
                    <Link href="https://drive.google.com/file/d/1kwoz9vXw387cjQQKwQzMwami6ItfZeXF/view?usp=sharing">
                      <Typography fontWeight="Bold">
                        Computer Programming and Analysis
                      </Typography>
                    </Link>
                    <br />
                    <Link href="https://en.wikipedia.org/wiki/Francisco_Jos%C3%A9_de_Caldas_District_University">
                      <img
                        src="/images/Bacs/UDistrital.png"
                        width={260}
                        height={80}
                        alt="Universidad Distrital Francisco Jose de Caldas"
                      />
                    </Link>
                    <Link href="https://drive.google.com/file/d/1ccquv4xiW94Pd3Mu8QQbeb90NACOCB01/view?usp=sharing">
                      <Typography fontWeight="Bold" paddingTop={0.5}>
                        Bachelor of Mathematics
                      </Typography>
                    </Link>
                    <Link href="https://drive.google.com/file/d/1cdqZgo-CQldYPudMNdyepy1ZBoelTIQg/view?usp=sharing">
                      <Typography fontWeight="Bold" paddingTop={1.5}>
                        Postgraduate Diploma in Technology Education
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
