import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/components/Projects.css';

const projects = [
  { id: 2, image: '/assets/abth.jpg', title: 'Abthan Technologies', description: 'Internt Service Provider.' },
  { id: 1, image: '/assets/thri.jpg', title: 'Thriving Moms Space', description: 'Empowering Motherhod Journey.' },
  { id: 3, image: '/assets/high.jpg', title: 'HTC Hotel', description: 'Learn, Unwind & Have Fun' },
  { id: 4, image: '/assets/book.png', title: 'Book Jerome App', description: 'Booking App (Ongoing)' },
];

const Projects = () => {
  const isDesktop = window.innerWidth > 768;

  return (
    <section className="projects-section">
      <h2 className="section-title">Recent Masterpieces</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
