// import React from "react";
// import my_pic from "../assets/my_pic.jpg";

// const About = () => {
//   return (
//     <div className="about px-2">
//       <div className="container">
//         <div className="row pt-5">
//           <div className="heading px-2 text-start">About Me</div>

//           <div className="col-md-5" style={{ overflow: "hidden" }}>
//             <img
//               data-aos="fade-left"
//               data-aos-duration="1000"
//               style={{ height: "90%", width: "90%" }}
//               src="https://www.webstackacademy.com/wp-content/uploads/2023/01/Full-Stock-Hero.png"
//               alt="images"
//             />
//           </div>
//           <div
//             className="col-md-7 text-start objective "
//             style={{ overflow: "hidden" }}
//           >
//             <div data-aos-duration="1000" data-aos="fade-right">
//               <br />
//               <p>
//                 My name is Abdulwasim. I'm an experienced Full Stack Developer
//                 from TamilNadu.
//               </p>
//               <br />
//               <p>
//                 I'm a passionate developer who continuously challenges myself to
//                 learn new skills in software development. I work with Front-End,
//                 Back-End, and Database technologies, and I have knowledge in
//                 Docker and Git CI/CD workflows. I develop applications using the
//                 MERN stack and am skilled at creating layouts provided to me.
//               </p>
//               <br />
//               <p>
//                 I'm an hardworking smart worker and always seek to achieve my
//                 best version.
//               </p>
//               <a
//                 className="text-decoration-none"
//                 href="https://drive.google.com/file/d/1KfLH1607ENEsr7yf2GuPikv2KcLnLwEX/view?usp=sharing"
//                 rel="noreferrer"
//                 target="_blank"
//               >
//                 Click here for my resume
//               </a>
//               <br />
//               <a
//                 className="text-decoration-none"
//                 href="https://drive.google.com/file/d/1_T_wWvgYrPRNISI0afNA74G9f9ebCRc5/view?usp=sharing"
//                 rel="noreferrer"
//                 target="_blank"
//               >
//                 Click here for FSD Cerificate
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
import React from "react";

const About = () => {
  return (
    <div className="about-container about px-5">
      <div className="heading mb-2 text-start">About Me 👨‍💻</div>

      <p>
        I’m a passionate and self-driven <strong>Full Stack Developer</strong>{" "}
        with over a year of hands-on experience in building modern web
        applications. I specialize in both <strong>JavaScript-based</strong> and{" "}
        <strong>Java-based</strong> tech stacks, with a strong command of the{" "}
        <strong>MERN stack (MongoDB, Express.js, React.js, Node.js)</strong> and{" "}
        <strong>Spring Boot with Java</strong>.
      </p>

      <p>
        I enjoy working across the full development cycle — from creating
        pixel-perfect, responsive UIs to developing robust backend APIs and
        managing databases efficiently. I’m comfortable translating complex
        ideas into clean, functional code and bringing designs to life with
        precision.
      </p>

      <h3>🔧 My Skill Set</h3>
      <ul>
        <li>
          <strong>Front-End:</strong> React.js, HTML5, CSS3, JavaScript (ES6+),
          Responsive Design
        </li>
        <li>
          <strong>Back-End:</strong> Node.js, Express.js, Java, Spring Boot
        </li>
        <li>
          <strong>Database:</strong> MongoDB, MySQL
        </li>
        <li>
          <strong>DevOps & Tools:</strong> Docker, Git, GitHub, GitLab CI/CD,
          Nginx, Webhooks, Postman, Swagger, VS Code, STS (Spring Tool Suite)
        </li>
        <li>
          <strong>Others:</strong> RESTful API development, Authentication,
          Microservice architecture, Agile workflow
        </li>
      </ul>

      <p>
        I’m always eager to learn and implement new technologies, and I thrive
        in dynamic environments where I can solve real-world problems through
        code.
      </p>

      <p>Let’s build something great together!</p>

      <a
        className="text-decoration-none"
        href="https://drive.google.com/file/d/1_T_wWvgYrPRNISI0afNA74G9f9ebCRc5/view?usp=sharing"
        rel="noreferrer"
        target="_blank"
      >
        Click here for FSD Cerificate
      </a>
    </div>
  );
};

export default About;
