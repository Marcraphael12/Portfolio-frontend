import Name from "../components/home/Name";
import Text from "../components/home/Text";
import Buttons from "../components/home/Buttons";

import '../styles/home.scss';
const Home = () => {
  return (
    <section id="Home" className="df-c">
      <Name />
      <Text />
      <Buttons />
    </section>
  )
}

export default Home;

