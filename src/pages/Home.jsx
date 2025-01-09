
import CTA from '../components/common/CTA';
import FAQ from '../components/sections/FAQ'
import Hero from '../components/sections/Hero';
import Popup from '../components/common/Popup';
import Projects from '../components/sections/Projects'
import Reason from '../components/sections/Reason';
import Service from '../components/sections/Service'
import Testimonials from '../components/sections/Testimonials';
import Newsletter from '../components/sections/Newsletter';

const Home = () => {
  return (
    <div>
      <Hero />
      <Popup/>
      <Service />
      <CTA/>
      <Reason/>
      <Projects />
      <FAQ/>
      <Testimonials/>
      <Newsletter/>
  
      
    </div>
  );
};

export default Home;
