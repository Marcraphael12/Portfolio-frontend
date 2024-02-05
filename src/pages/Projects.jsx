// import Projects_nav from "../components/projects/navigation";
import Cards from "../components/projects/cards"
import Card from "../components/projects/card";
import "../styles/projects.scss";
const Projects = () => {
  return (
    <section id="Projects">
      {/* <Projects_nav /> */}
      <Cards />
      <Card />
      <div className='Hire-btn flex flex-wrap justify-center items-center p-3'>
				<h3 className='text-lg font-bold text-white'>
					Do you have a project for me?
				</h3>

				<button className='flex items-center text-md font-semibold'>
					Let&apos;s do it!
				</button>
			</div>
    </section>
  );
};

export default Projects;
