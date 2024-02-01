import '../styles/footer.scss';
import { faAngellist, faGithub, faLinkedin, faMedium, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = ()=> {
	return (
		<footer>
			<ul className='flex flex-wrap justify-between items-center content-center justify-items-center'>
				<li className='w-40 text-lg max-w-40 flex justify-between'>
					<a href="">
						<FontAwesomeIcon icon={faAngellist}/>
					</a>

					<a href="" className='text-[#2056f7]'>
						<FontAwesomeIcon icon={faLinkedin}/>
					</a>

					<a href="" className='text-blue-900'>
						<FontAwesomeIcon icon={faGithub}/>
					</a>

					<a href="" className='text-[red]'>
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
