import '../styles/home.scss';

import { faAngellist, faGithub, faLinkedin, faMedium, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Home = () => {
  return (
    <section id="Home" className="df-c justify-end">

      <div className="df-c items-center justify-between p-6">

        <div className="text df-c items-center">
          <span className='font-bold'>
            Hello, I am
          </span>
          <h1 className=''>
            Marc raphael
          </h1>
          <p className='text-[#0400ff] font-bold pl-3 pr-3 bg-white'>
            Full-stack web developper
          </p>
        </div>
        
        <ul className='flex'>
          <li className='w-40 text-lg flex flex-wrap justify-between text-white'>
            <a href="" className=''>
              <FontAwesomeIcon icon={faAngellist}/>
            </a>

            <a href="" className=''>
              <FontAwesomeIcon icon={faLinkedin}/>
            </a>

            <a href="" className=''>
              <FontAwesomeIcon icon={faGithub}/>
            </a>

            <a href="" className=''>
              <FontAwesomeIcon icon={faYoutube}/>
            </a>

            <a href="" className=''>
              <FontAwesomeIcon icon={faMedium}/>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Home;

