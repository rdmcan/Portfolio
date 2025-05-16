import { ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";
import theme from "./styles/theme/index";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Aboutme from "./components/aboutme";
import Skills from "./components/skills/indexSkills";
import Projects from "./components/projects/indexprojects";
import Courses from "./components/courses/courses";
import Degrees from "./components/degrees/degrees";
// import Resume from "./components/Resume/resumeindex";
import Contactme from "./components/contactme/contactmeIndex";
import Footer from "./components/footer/indexfooter";
import Dashboards  from "./components/dashboards/dashboards";

function App() {
  useEffect(() => {
    document.title = "Ruben Mejia";
  });

  return (
    <ThemeProvider theme={theme}>
      <Appbar />
      <Banner />
      <Aboutme />
      <Skills />
      <Dashboards/>
      <Projects />
      <Degrees/>
      <Courses />
      {/* <Resume /> */}
      <Contactme />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
