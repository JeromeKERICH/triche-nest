
import "../styles/Testimonials.css"
const testimonialsData = [
  {
    name: "Lucy Kariuki",
    role: "Thriving Moms Space.",
    feedback: "The web development service was outstanding. Our website is now faster and more visually appealing than ever.",
    image: "assets/lucy-min.jpg",
  },
  {
    name: "Festus Kirui",
    role: "Abthan Technologies.",
    feedback: "Their copywriting and SEO services significantly boosted our website traffic. Highly recommended!",
    image: "assets/kirui.jpeg",
  },
  {
    name: "Miriam Maru",
    role: "Freelancer",
    feedback: "Partnering with Emmanuel to design my website was seamless and amazing! He captured my vision perfectly, delivering a sleek, user-friendly, and visually striking design that truly represents my brand.",
    image: "assets/MAR.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-container">
      <h2 className="testimonials-title">Testimonials That Matter</h2>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img
              src={testimonial.image}
              alt={`${testimonial.name}'s avatar`}
              className="testimonial-avatar"
            />
            <div className="testimonial-content">
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
