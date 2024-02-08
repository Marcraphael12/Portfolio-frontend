import '../styles/footer.scss';
import { faAngellist, faGithub, faLinkedin, faMedium, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = ()=> {
	return (
		<footer>
			<ul className='flex flex-wrap justify-between items-center content-center justify-items-center'>
				<li className='w-40 text-lg max-w-40 flex justify-between'>
					<a href="https://angel.co/u/marc-raphael12">
						<FontAwesomeIcon icon={faAngellist}/>
					</a>

					<a href="https://www.linkedin.com/in/marc-raphael-essogo-bidzogo/" className='text-white'>
						<FontAwesomeIcon icon={faLinkedin}/>
					</a>

					<a href="https://github.com/Marcraphael12/" className='text-white'>
						<FontAwesomeIcon icon={faGithub}/>
					</a>

					<a href="https://www.youtube.com/@simplecode5481/videos" className='text-white'>
						<FontAwesomeIcon icon={faYoutube}/>
					</a>

					<a href="">
						<FontAwesomeIcon icon={faMedium}/>
					</a>
				</li>

				<li>
					Copyright &copy;Marc raphael 2024
				</li>
			</ul>
		</footer>
	)
}

export default Footer;
