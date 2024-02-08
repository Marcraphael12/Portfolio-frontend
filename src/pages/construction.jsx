import '../styles/construction.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import l_i from '../assets/images/p_i.png'
import a_i from '../assets/images/1_i.png'
import b_i from '../assets/images/2_i.png'
import c_i from '../assets/images/3_i.png'
import d_i from '../assets/images/4_i.png'


const Construction = ()=> {
	return (
		<main className='flex justify-center items-center'>
			<div className='p-4'>
				<div className='image flex flex-col items-center justify-center bg-black'>
					<h1 className='font-extrabold'>
						<FontAwesomeIcon icon={faPersonDigging} className='mr-4' />
						<span className=''>
							Under Construction 
						</span>
					</h1>
					<h2 className='text-center text-black font-bold bg-white w-[100%]'>
						<span className='mr-4'>
							While waiting, Checktout some of my projects.
						</span>

						<span>
							<a href="https://www.linkedin.com/in/marc-raphael-essogo-bidzogo/" className='mr-3'>
								<FontAwesomeIcon icon={faLinkedin}/>
							</a>

							<a href="https://github.com/Marcraphael12/" className=''>
								<FontAwesomeIcon icon={faGithub}/>
							</a>
						</span>
					</h2>
				</div>

				<section className=''>
					<ul className='flex flex-wrap items-center justify-center'>
						<li>
							<img src={l_i} alt="" />
							<div>
								<a href="https://github.com/Marcraphael12/https://github.com/JavierAybar/Full_Stack_Capstone_Front_End-books">See on GitHub</a>
								<a href="https://vehicle-reservation-system.netlify.app/">See it online</a>
							</div>
						</li>

						<li>
							<img src="https://github.com/Marcraphael12/Awesome-books/raw/main/image/AwesomeBooks1.png" alt="" />
							<div>
								<a href="https://github.com/Marcraphael12/Awesome-books">See on GitHub</a>
								<a href="https://marcraphael12.github.io/Awesome-books/">See it online</a>
							</div>
						</li>

						<li>
							<img src={a_i} alt="" />
							<div>
								<a href="https://github.com/Marcraphael12/ip-address-tracker">See on GitHub</a>
								<a href="https://ip-tracker-marc-12.netlify.app/">See it online</a>
							</div>
						</li>

						<li>
							<img src={b_i} alt="" />
							<div>
								<a href="https://github.com/Marcraphael12/Easybank-landing-page">See on GitHub</a>
								<a href="https://easy-bank-landing-page-marc.netlify.app/">See it online</a>
							</div>
						</li>

						<li>
							<img src={c_i} alt="" />
							<div>
								<a href="https://github.com/Marcraphael12/Space-traveler-s-hub">See on GitHub</a>
								<a href="https://spacetravelerhub.netlify.app/">See it online</a>
							</div>
						</li>

						<li>
							<img src={d_i} alt="" />
							<div>
								<a href="https://github.com/Marcraphael12/Marc-first-capstone">See on GitHub</a>
								<a href="https://marcraphael12.github.io/Marc-first-capstone">See it online</a>
							</div>
						</li>
					</ul>
				</section>
			</div>
		</main>
	)
}

export default Construction;
