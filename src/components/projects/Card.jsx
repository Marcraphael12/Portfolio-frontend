import image2 from '../../assets/images/cards/4.jpg'
const Card = ()=> {
	return (
		<aside>
			<div>
				<button className='close'>
					x
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
