import '../styles/contact.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePhone } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-regular-svg-icons';
const Contact = ()=> {
  return (
    <section id='Contact' className='flex flex-col'>
      <div className=''>
        <h1 className='flex flex-col items-center text-3xl font-bold mb-3'>
          Get in touch
        </h1>

        <p className='mb-4'>
          Any suggestion, issue, criticism, or you just want to say hello,
          feel free, i will be glad to answer yo!
        </p>
      </div>

      <form action="" className='flex flex-col mt-4 mb-6 p-6'>
        <h2 className='text-xl font-bold'>
          Whats up?
        </h2>

        <div className='flex flex-col'>
          <label htmlFor="name">Name(required)</label>
          <input type="text" name="name" id="name" autoComplete='true' placeholder="Full name"/>

          <label htmlFor="email">Email(required)</label>
          <input type="email" name="email" id="email" autoComplete='true' placeholder="Email address"/>

          <label htmlFor="subject">Subject(required)</label>
          <input type="text" name="subject" id="subject" autoComplete='true' placeholder="Subject"/>

          <label htmlFor="comment">Comment(required)</label>
          <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Type comment"></textarea>

          <button type="submit" className='mt-4 font-bold text-md mb-5'>Contact me</button>
        </div>
      </form>

      <div className='flex flex-col mt-4'>
        <h2 className='text-xl font-bold mb-4'>What is on your plan? Call me</h2>
        <p className='mb-5'>You can get my contact information here and if you like, you can checkout my profil on social networks.</p>

        <ul className='flex flex-col'>
          <li>
            <span>
            <FontAwesomeIcon icon={faComments} />
            </span>
            <span>marcraphael979@gmail.com</span>
          </li>

          <li>
            <span>
            <FontAwesomeIcon icon={faSquarePhone} />
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
