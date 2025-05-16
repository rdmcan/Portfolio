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
import { HiOutlineMail } from "react-icons/hi";

export default function Contactme() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="contact"
      display="flex"
      flexDirection="row"
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Stack id="contactme" spacing={2}>
        <Fade>
          <ContactTitle>Contact me</ContactTitle>
        </Fade>
        <Box>
          {matches ? (
            <Box display="flex" flexDirection="column" marginBottom="100px">
              <Fade cascade>
                <Container>
                  <Paper
                    elevation={3}
                    sx={{
                      pt: 2,
                      pb: 3,
                      pl: 3,
                      pr: 3,
                      bgcolor: "background.default",
                    }}
                  >
                    <HiOutlineMail style={{ fontSize: "30px" }} />
                    <Link href="mailto:rdmejia@hotmail.com">
                      <Typography fontWeight="Bold">
                        rdmcand@gmail.com
                      </Typography>
                    </Link>
                    <br></br>
                    <Link href="mailto:bideveloper@rdmejia.com">
                      <Typography fontWeight="Bold">
                        bideveloper@rdmejia.com
                      </Typography>
                    </Link>                    
                  </Paper>
                </Container>
              </Fade>
            </Box>
          ) : (
            <Box display="flex" marginBottom="80px">
              <Fade cascade>
                <Container>
                  <Paper
                    elevation={3}
                    sx={{
                      pt: 4,
                      pb: 4,
                      pl: 7,
                      pr: 7,
                      bgcolor: "background.default",
                    }}
                  >
                    <HiOutlineMail style={{ fontSize: "30px" }} />
                    <Link href="mailto:rdmejia@hotmail.com">
                      <Typography fontWeight="Bold">
                        rdmcand@gmail.com
                      </Typography>
                    </Link>
                    <br></br>
                    <Link href="mailto:bideveloper@rdmejia.com">
                      <Typography fontWeight="Bold">
                        bideveloper@rdmejia.com
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
