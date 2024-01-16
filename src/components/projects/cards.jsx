// Images
import image1 from '../../assets/images/cards/1.jpg'
import image2 from '../../assets/images/cards/2.jpg'
import image3 from '../../assets/images/cards/3.jpg'
import image4 from '../../assets/images/cards/4.jpg'
import image5 from '../../assets/images/cards/5.jpg'

const Cards = ()=> {
  return (
    <div className="cards">
        {/*
          for each card we have:
          _ a background image
          _ 3 buttons displayed none by default
          _ an animation to show the buttons
          _ a hover with low dak opacity to show the button 
         */}
        <div className="card">
          <img src={image1} alt="project image" />
          <div className="tech-desc">
            <div className="tech">
              <ul>
                <li>html</li>
                <li>css</li>
                <li>js</li>
                <li>react</li>
              </ul>
            </div>
            <div className='desc'>
              <button>description</button>
              <button>live</button>
              <button>github</button>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={image2} alt="project image" />
          <div className="tech-desc">
            <div className="tech">
              <ul>
                <li>html</li>
                <li>css</li>
                <li>js</li>
                <li>react</li>
              </ul>
            </div>
            <div className='desc'>
              <button>description</button>
              <button>live</button>
              <button>github</button>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={image3} alt="project image" />
          <div className="tech-desc">
            <div className="tech">
              <ul>
                <li>html</li>
                <li>css</li>
                <li>js</li>
                <li>react</li>
              </ul>
            </div>
            <div className='desc'>
              <button>description</button>
              <button>live</button>
              <button>github</button>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={image4} alt="project image" />
          <div className="tech-desc">
            <div className="tech">
              <ul>
                <li>html</li>
                <li>css</li>
                <li>js</li>
                <li>react</li>
              </ul>
            </div>
            <div className='desc'>
              <button>description</button>
              <button>live</button>
              <button>github</button>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={image5} alt="project image" />
          <div className="tech-desc">
            <div className="tech">
              <ul>
                <li>html</li>
                <li>css</li>
                <li>js</li>
                <li>react</li>
              </ul>
            </div>
            <div className='desc'>
              <button>description</button>
              <button>live</button>
              <button>github</button>
            </div>
          </div>
        </div>
        
      </div>
  )
}

export default Cards;
