import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* This is where the page content will be rendered */}
      </main>
      <Footer />
    </>
)}

export default MainLayout
