import { useState } from 'react';
import "../pages/styles/Learn.css"

const LearnMore = () => {
  const [storyIndex, setStoryIndex] = useState(0);

  const story = [
    {
      title: "The Birth of Triche Nest",
      content: "Triche Nest was born out of a desire to create a platform where creativity and technology could work hand-in-hand to produce cutting-edge solutions. Our founder, with years of experience in tech, realized the need for a nurturing environment where entrepreneurs, creators, and innovators could thrive. This realization became the foundation of what would soon become a leading force in the tech world.",
    },
    {
      title: "The Evolution: From Idea to Platform",
      content: "What started as a single idea quickly evolved into a fully-fledged platform. The vision grew with each day, backed by a talented team that believed in the mission. Through relentless research, product development, and collaboration with industry leaders, Triche Nest transitioned from a fledgling startup to a market disruptor in just a few short years.",
    },
    {
      title: "The Core Services of Triche Nest",
      content: "Triche Nest offers a wide array of services, each designed to cater to the unique needs of startups and growing businesses. From tech development and web solutions to creative design and branding, we’ve crafted a suite of offerings that can scale with your business and drive your vision forward. Our services include custom software development, digital marketing strategies, content creation, web development, and user experience design.",
    },
    {
      title: "Our Unique Approach",
      content: "At Triche Nest, we believe in a human-centered approach to business solutions. By placing people—customers and team members—at the center of everything we do, we build sustainable, long-term success. Whether it’s through data-driven marketing strategies, seamless web design, or custom software solutions, our focus is always on solving real-world problems with creative, actionable strategies.",
    },
    {
      title: "Looking to the Future",
      content: "As Triche Nest continues to grow, we remain focused on innovation and pushing the boundaries of what’s possible. With new technologies emerging every day, we are constantly exploring how we can incorporate these advancements into our services. Our future lies in building deeper partnerships, launching new products, and creating even more personalized solutions for our clients.",
    },
  ];

  const handleNextStory = () => {
    setStoryIndex((prevIndex) => (prevIndex + 1) % story.length);
  };

  return (
    <div className="Learn-container">
      <section className="her-header">
        <h2>Your Gateway to Innovation and Creativity</h2>
        <p>
          Triche Nest is more than just a company—It’s a movement, a passion-driven ecosystem where ideas come to life.
        </p>
      </section>

      <section className="story-section">
        <h2>{story[storyIndex].title}</h2>
        <p>{story[storyIndex].content}</p>
        <button className="story-btn"onClick={handleNextStory}>Next Story</button>
      </section>

      <section className="services-area">
        <h3>Our Services</h3>
        <div className="services-spac">
          <div className="services-space">
            <h4>Custom Software Development</h4>
            <p>
              We specialize in building custom software tailored to your specific business needs. Whether it's a mobile app, desktop software, or an integrated system, we have the expertise to bring your ideas to life.
            </p>
          </div>
          <div className="services-space">
            <h4>Web Development</h4>
            <p>
              From simple landing pages to complex e-commerce solutions, we offer a full range of web development services. Our team ensures that your website is both aesthetically pleasing and fully functional across all devices.
            </p>
          </div>
          <div className="services-space">
          <h4>Career Development</h4>
            <p>
                Unlock your potential with our career development services. We help individuals and businesses thrive by offering personalized coaching, resume optimization, LinkedIn profile enhancement, and career guidance.
            </p>

          </div>
        </div>
      </section>

      <section className="about-learn">
        <h3>Our Journey</h3>
        <p>
          Triche Nest was founded with the mission of creating innovative solutions that bridge the gap between technology and creativity. Over the years, we have helped dozens of businesses navigate the complexities of modern technology and turn their visions into reality. Our team is driven by a passion for excellence and a commitment to providing exceptional service.
        </p>
      </section>

      <section className="approach-learn">
        <h3>Our Approach</h3>
        <p>
          At Triche Nest, our approach to business solutions is simple: combine cutting-edge technology with human-centered design. By listening to the needs of our clients and understanding their pain points, we are able to craft solutions that not only meet their current needs but also position them for long-term success.
        </p>
      </section>

      <section className="future-learn">
        <h3>What’s Next?</h3>
        <p>
          Looking forward, Triche Nest is poised for exponential growth. With emerging technologies like AI, IoT, and machine learning, we’re exploring new ways to enhance our services and add value to our clients. Our goal is to be at the forefront of the digital revolution, helping businesses adapt and thrive in an ever-changing world.
        </p>
      </section>
    </div>
  );
};

export default LearnMore;
