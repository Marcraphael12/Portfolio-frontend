import Projects_nav from "../components/projects/navigation";
import Cards from "../components/projects/cards"
// import Card from "../components/projects/card";
import "../styles/projects.scss";
const Projects = () => {
  return (
    <section id="Projects">
      <Projects_nav />
      <Cards />
      {/* <Card /> */}
    </section>
  );
};

export default Projects;
