import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image2 from '../../assets/images/cards/4.jpg'
import { faClose } from '@fortawesome/free-solid-svg-icons';
const Card = ()=> {
	return (
		<aside>
			<div>
				<button className='close flex items-center justify-center bg-white text-blue-600 p-1 mb-4'>
					<FontAwesomeIcon icon={faClose} />
				</button>
			</div>

			<div>

				<img src={image2} alt="project image" />

				<div>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, cumque sit eligendi eos corrupti doloremque, ea rem sapiente amet aspernatur perspiciatis iusto, ipsum evenie.</p>
					<ul>
						<li><a href="">live</a></li>
						<li><a href="">Github</a></li>
					</ul>
				</div>
			</div>

		</aside>
	)
}

export default Card;
