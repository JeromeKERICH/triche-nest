
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Hero from '../components/Hero';
import Popup from '../components/Popup';
import Projects from '../components/Projects'
import Reason from '../components/Reason';
import Service from '../components/Service'
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <Popup/>
      <Projects />
      <CTA />
      <Service />
      <Reason/>
      <FAQ />
      <Testimonials/>
      
      
    </div>
  );
};

export default Home;
