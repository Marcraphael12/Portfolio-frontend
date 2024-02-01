import { faAngellist, faGithub, faLinkedin, faMedium, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = ()=> {
	return (
		<footer>
			<ul>
				<li>
					<a href="">
						<FontAwesomeIcon icon={faLinkedin}/>
					</a>

					<a href="">
						<FontAwesomeIcon icon={faGithub}/>
					</a>

					<a href="">
						<FontAwesomeIcon icon={faYoutube}/>
					</a>

					<a href="">
						<FontAwesomeIcon icon={faAngellist}/>
					</a>

					<a href="">
						<FontAwesomeIcon icon={faMedium}/>
					</a>
				</li>

				<li>
					CopyRight &copy;Marc raphael 2024
				</li>
			</ul>
		</footer>
	)
}

export default Footer;
