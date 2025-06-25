import React, { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AppContext } from "../App";
import imdb_clone from "../assets/imdb_pic.png";
import shadow_events from "../assets/shadowevtns_pic.png";

const Projects = () => {
  const { mode, textMode } = useContext(AppContext);

  const cardClass = `card bg-${mode}`;
  const textClass = `text-${textMode}`;
  const btnClass = "btn btn-success mb-3";

  const projects = [
    {
      title: "Shadow Events",
      image: shadow_events,
      description:
        "Seamless event booking with Razorpay integration, powered by Spring Boot. Just create an account to begin.",
      visit: "https://shadowevents.netlify.app/",
      fe: "https://github.com/Abdulwasim-S/event-management-system-client",
      be: "https://github.com/Abdulwasim-S/event-management-system",
    },
    {
      title: "ShopZone App",
      image:
        "https://drive.google.com/thumbnail?export=view&id=1bJFa9i7wgWIOObpZLWwQUHaahp7-wEw9&sz=w10000",
      description:
        "E-commerce platform with Razorpay integration. Users can sign up and start shopping instantly.",
      visit: "https://shopzone-fe.vercel.app/",
      fe: "https://github.com/Abdulwasim-S/shopzone-fe",
      be: "https://github.com/Abdulwasim-S/shopzone",
    },
    {
      title: "IMDB Clone",
      image: imdb_clone,
      description:
        "A clone of the IMDB platform where users can browse movie details and ratings.",
      visit: "https://imdb-clone-frontend-abdulwasim-s.vercel.app/",
      fe: "https://github.com/Abdulwasim-S/imdb-clone-frontend",
      be: "https://github.com/Abdulwasim-S/IMDB-Backend",
    },
    {
      title: "Product Rental App",
      image:
        "https://drive.google.com/thumbnail?export=view&id=14iiABFw0pOegc_uYAHoq2OjywUfHPIIf&sz=w10000",
      description:
        "A user-friendly platform for renting products with seamless UI and feature-rich backend.",
      visit: "https://guvi-hackthon2-frontend-abdulwasim-s.vercel.app/",
      fe: "https://github.com/Abdulwasim-S/guvi-hackthon2-frontend",
      be: "https://github.com/Abdulwasim-S/password-reset-backend",
    },
    {
      title: "Job Searching App",
      image:
        "https://drive.google.com/thumbnail?export=view&id=1LXqQVey9gxB0esy2rQkTNVHXmtlVcq0y&sz=w10000",
      description:
        "Hire or get hired with this platform. Quick login and free access to job opportunities.",
      visit: "https://chance-murex.vercel.app/",
      fe: "https://github.com/Abdulwasim-S/chance",
      be: "https://github.com/Abdulwasim-S/chance-backend",
    },
    // {
    //   title: "URL Shortener App",
    //   image:
    //     "https://drive.google.com/thumbnail?export=view&id=1v9IyfHO0QTrNOpMyQ30T4frdExTTXewo&sz=w10000",
    //   description:
    //     "Shorten long URLs with ease. Create an account to manage your custom links securely.",
    //   visit: "https://url-shortener-eight-sigma.vercel.app/",
    //   fe: "https://github.com/Abdulwasim-S/url-shortener",
    //   be: "https://github.com/Abdulwasim-S/short-url-backend",
    // },
  ];

  return (
    <div className="container-fluid p-5">
      <div
        className="heading pt-5 text-start mb-5"
        style={{ marginLeft: "4%" }}
      >
        Projects
      </div>
      <div className="row justify-content-center" style={{ height: "100%" }}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="col-md-4 mb-4"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className={cardClass}>
              <div className="card-img">
                <LazyLoadImage
                  effect="blur"
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
              </div>
              <div className="card-body">
                <h2 className={`card-title ${textClass}`}>{project.title}</h2>
                <p className={`card-text ${textClass}`}>
                  {project.description}
                </p>
                <div className="btn-row">
                  <a
                    href={project.visit}
                    className={btnClass}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit
                  </a>
                  <a
                    href={project.fe}
                    className={btnClass}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code FE
                  </a>
                  <a
                    href={project.be}
                    className={btnClass}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code BE
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
