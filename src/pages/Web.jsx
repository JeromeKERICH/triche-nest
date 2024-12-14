import '../styles/components/web.css';
import { FaShoppingCart, FaPaintBrush, FaFileAlt, FaBriefcase, FaUniversity, FaHeart, FaNewspaper, FaMobileAlt, FaWhatsapp } from 'react-icons/fa'; // Import icons

const App = () => {
  const handleBuyNow = () => {
    alert('Redirecting to purchase page...');
    
  };

  const handleWhatsapp = () => {
    window.open('https://wa.me/254788120422', '_blank'); 
  };

  return (
    <div className="app">
      

     
      <main>
       
        <section id="services">
          <div className="services-container">
            <div className="services-card">
              <FaFileAlt size={50} />
              <h3>Landing Page</h3>
              <p>Price: $120</p>
              <ul>
                <li>Single-page design</li>
                <li>Lead generation form</li>
                <li>Clear call-to-action</li>
                <li>Free Domain & Hosting</li>
              </ul>
              <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
            </div>
            <div className="services-card">
              <FaBriefcase size={50} />
              <h3>Business Website</h3>
              <p>Price: $700</p>
              <ul>
                <li>Services/products listing</li>
                <li>Testimonial section</li>
                <li>Social media integration</li>
                <li>Free Domain & Hosting</li>
              </ul>
              <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
            </div>
            <div className="services-card">
              <FaShoppingCart size={50} />
              <h3>E-commerce Website</h3>
              <p>Price: $700</p>
              <ul>
                <li>Product listing</li>
                <li>Payment gateway integration</li>
                <li>Order tracking</li>
                <li>Free Domain & Hosting</li>
              </ul>
              <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
            </div>
            <div className="services-card">
              <FaPaintBrush size={50} />
              <h3>Portfolio Website</h3>
              <p>Price: $700</p>
              <ul>
                <li>Showcase your work</li>
                <li>Contact or hire me section</li>
                <li>Personal branding</li>
                <li>Free Domain & Hosting</li>
              </ul>
              <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
            </div>
            <div className="services-card">
              <FaUniversity size={50} />
              <h3>Educational Website</h3>
              <p>Price: $700</p>
              <ul>
                <li>Online courses</li>
                <li>Student enrollment system</li>
                <li>Quizzes and assessments</li>
                <li>Free Domain & Hosting</li>
              </ul>
              <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
            </div>
            <div className="services-card">
              <FaHeart size={50} />
              <h3>Non-Profit Website</h3>
              <p>Price: $700</p>
              <ul>
                <li>Donation system</li>
                <li>Volunteer registration</li>
                <li>Mission and vision statements</li>
                <li>Free Domain & Hosting</li>
              </ul>
              <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
            </div>
            <div className="services-card">
              <FaNewspaper size={50} />
              <h3>News Website</h3>
              <p>Price: $700</p>
              <ul>
                <li>News articles</li>
                <li>Breaking news alerts</li>
                <li>Trending topics</li>
                <li>Free Domain & Hosting</li>
              </ul>
              <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
            </div>
            <div className="services-card">
              <FaMobileAlt size={50} />
              <h3>Social Media Website</h3>
              <p>Price: $700</p>
              <ul>
                <li>User profiles</li>
                <li>Messaging and friend requests</li>
                <li>Photo/video sharing</li>
                <li>Free Domain & Hosting</li>
              </ul>
              <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
            </div>
          </div>
        </section>

        {/* Service Explanation Section */}
        <section id="explanation">
          <h2>Why Choose Us?</h2>
          <p>
            We specialize in building responsive, user-friendly, and fast websites tailored to your business needs. 
            Whether you are looking for a simple landing page or a complex e-commerce platform, we have the expertise 
            to bring your vision to life. Our websites are fully optimized for all devices, ensuring a seamless experience 
            for your visitors. We also offer ongoing support and updates to keep your website running smoothly.
          </p>
          <button className="whatsapp-btn" onClick={handleWhatsapp}>
            <FaWhatsapp size={20} /> Talk with Us on WhatsApp
          </button>
        </section>
      </main>
    </div>
  );
};

export default App;
