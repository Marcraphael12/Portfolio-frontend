const Contact = ()=> {
  return (
    <section id='Contact' className='flex flex-col'>
      <div>
        <h1>
          Get in touch
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sapiente reiciendis hic, corporis aspernatur.
        </p>
      </div>

      <form action="">
        <h2>
          Whats up?
        </h2>

        <div>
          <label htmlFor="name">Name(required)</label>
          <input type="text" name="name" id="" placeholder="Full name"/>

          <label htmlFor="email">Email(required)</label>
          <input type="email" name="email" id="" placeholder="Email address"/>

          <label htmlFor="subject">Subject(required)</label>
          <input type="text" name="subject" id="" placeholder="Subject"/>

          <label htmlFor="comment">Comment(required)</label>
          <textarea name="comment" id="" cols="30" rows="10" placeholder="Type comment"></textarea>

          <button type="submit">Contact me</button>
        </div>
      </form>

      <div>
        <h2>What is on your plan? Call me</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aliquid? Commodi modi vitae architecto suscipit temporibus natus excepturi in sunt adipisci repudiandae fuga vero, aperiam ipsam asperiores, corporis eaque eligendi?</p>

        <ul>
          <li>
            <span>icon</span>
            <span>marcraphael979@gmail.com</span>
          </li>

          <li>
            <span>
              icon
            </span>
            <span>
              +237 698 334 054
            </span>
          </li>
        </ul>
      </div>

    </section>
  )
}

export default Contact;
