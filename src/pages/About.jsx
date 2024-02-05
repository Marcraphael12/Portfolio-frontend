import '../styles/about.scss'
const About = ()=> {
	return (
		<section id="About" className='flex flex-col'>
			<div className='p-3 text'>
				<h1 className='text-3xl font-bold mb-6'>Coding is a passion!</h1>
				<p className='mb-6'>
					Hello, I am Marc; A 24 -year-old full-stack developer. I started programming in 2019 and continued to specialize in 2021. These days, along with programming, I study about startups and businesses, and besides all this, I play the dulcimer and watch my favorite series. am working!
				</p>
			</div>

			<div className='bg-[#0400ff18] p-6 skills'>
				<h3 className='text-xl font-bold'>
					Tech Skills
				</h3>

				<p>
					Here you can see my skills, one of the fascinations of the computer world is the momentary changes of technologies, but I try to update my knowledge every day and experience new technologies.
				</p>

				<ul className='flex flex-wrap justify-evenly'>
					<li>Ruby</li>
					<li>Ruby on Rails</li>
					<li>APIs</li>
					<li>Postgresql</li>
					<li>Javascript</li>
					<li>Webpack</li>
					<li>React&Redux</li>
					<li>HTML&CSS</li>
					<li>Tailwind CSS</li>
					<li>SCSS</li>
					<li>Git</li>
					<li>GitHub</li>
					<li>Algorithmes</li>
					<li>DataStructure</li>
				</ul>
			</div>

			<div className='flex flex-col bg-[#0400ff18] p-6 skills'>
				<h3 className='text-xl font-bold'>
					Languages skills
				</h3>

				<p>
					One of my hobbies is studying and learning languages. I try to be able to learn and use my favorite languages.
				</p>

				<div className='flex flex-row max-w-96'>
					<div>
						<span>99%</span>
						<span>French</span>
					</div>

					<div className='ml-3'>
						<span>65%</span>
						<span>English</span>
					</div>
				</div>
			</div>

			<div className='Hire-btn flex flex-wrap justify-center items-center p-3'>
				<h3 className='text-lg font-bold text-white'>
					I am available for remote jobs!
				</h3>

				<button className='flex items-center text-md font-semibold'>
					Hire me now!
				</button>
			</div>

		</section>
	)
}

export default About;
