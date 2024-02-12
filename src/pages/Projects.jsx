// import Projects_nav from "../components/projects/navigation";
import Cards from "../components/projects/cards"
// import Card from "../components/projects/>Card";
import "../styles/projects.scss";
const Projects = () => {
  return (
    <>
      <section id="Projects">
      <div className='head'>
        <h1 className='flex flex-col items-center text-3xl font-bold mb-3'>
          What can i do?
        </h1>

        <p className='mb-4'>
        I craft dynamic and user-centric applications. From crafting sleek frontend interfaces to building robust backend systems, I&apos;m dedicated to delivering top-notch solutions that exceed expectations. Let&apos;s build something incredible together!
        </p>
      </div>
        {/* <Projects_nav /> */}
        <Cards />
        {/* <Card /> */}
      </section>
      <div className='Hire-btn flex flex-wrap justify-center items-center p-3'>
        <h3 className='text-lg font-bold text-white'>
          Do you have a project for me?
        </h3>

        <button className='flex items-center text-md font-semibold'>
          Let&apos;s do it!
        </button>
      </div>
    </>
  );
};

export default Projects;
