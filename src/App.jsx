// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar'; 
import Home from './pages/Home'; 
import About from './pages/About'; 
import './styles/components/Navbar.css'; 
import Footer from './components/Footer';
import Web from './pages/Web';
import QualityAssurance from './pages/Quality';
import Seo from './pages/Seo';
import ContentWritingService from './pages/Content';
import CareerDevelopmentPage from './pages/Career';
import Mental from './pages/Mental';
import BlogPage from './pages/Blogpage';








function App() {
  return (
    <Router>
      <Navbar /> 
      
      
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/blog" element={<BlogPage/>} />
        
        <Route path="/about" element={<About />} />
        <Route path="/web" element={<Web />} />
        <Route path="/quality" element={<QualityAssurance/>} />
        <Route path="/seo" element={<Seo/>} />    
        <Route path="/content" element={<ContentWritingService/>} />    
        <Route path="/career" element={<CareerDevelopmentPage/>} />
        <Route path="/mental" element={<Mental/>} />
        
        
     
      </Routes>
      <Footer/>
    
  
     
    </Router>
  );
}

export default App;
