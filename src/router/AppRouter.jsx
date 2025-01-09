
import { Routes, Route } from 'react-router-dom'; 
import Home from '../pages/Home'; 
import About from '../pages/About'; 
import Web from '../pages/Web';
import QualityAssurance from '../pages/Quality';
import Seo from '../pages/Seo';
import ContentWritingService from '../pages/Content';
import CareerDevelopmentPage from '../pages/Career';
import Mental from '../pages/Mental';
import BlogPage from '../pages/Blogpage';
import Contact from '../pages/Contact';
import Business from '../pages/Business';
import PrivacyPolicy from '../pages/Policy';
import LearnMore from '../pages/Learn';



const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/web" element={<Web />} />
      <Route path="/quality" element={<QualityAssurance />} />
      <Route path="/seo" element={<Seo />} />    
      <Route path="/content" element={<ContentWritingService />} />    
      <Route path="/career" element={<CareerDevelopmentPage />} />
      <Route path="/mental" element={<Mental />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/business" element={<Business />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
      <Route path="/learn-more" element={<LearnMore/>} />
      
    </Routes>
  );
}

export default AppRouter;
