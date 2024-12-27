import { BrowserRouter as Router } from 'react-router-dom'; 
import Navbar from './components/layout/Navbar'; 
import Footer from './components/layout/Footer';
import AppRouter from './router/AppRouter';  

import './components/styles/Navbar.css'; 



function App() {
  return (
    <Router>  
      <Navbar /> 
      <AppRouter />  
      <Footer />
    </Router>
  );
}

export default App;
