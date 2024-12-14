import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/components/Projects.css';

const projects = [
  { id: 1, image: '/assets/thriving.png', title: 'Thriving Moms Space', description: 'This is a description of project one.' },
  { id: 2, image: '/assets/abthan.png', title: 'Abthan Technologies', description: 'This is a description of project two.' },
  { id: 3, image: '/assets/abthan.png', title: 'Project Three', description: 'This is a description of project three.' },
  { id: 4, image: '/assets/abthan.png', title: 'Project Four', description: 'This is a description of project four.' },
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
