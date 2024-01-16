import Projects_nav from "../components/projects/navigation";
import Cards from "../components/projects/cards"
import Buttons from "../components/home/Buttons";
// import Card from "../components/projects/card";
import "../styles/projects.scss";
const Projects = () => {
  return (
    <section id="Projects">
      <Projects_nav />
      <Cards />
      {/* <Card /> */}
      <Buttons />
    </section>
  );
};

export default Projects;
