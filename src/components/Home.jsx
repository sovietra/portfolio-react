import {
  FaLaptopCode,
  FaPalette,
  FaPaintBrush,
  FaDraftingCompass,
  FaTiktok,
  FaSoundcloud,
  FaInstagram,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

const Home = ({ translations }) => {
  const professions = [
    { icon: <FaLaptopCode />, title: translations.webDeveloper, index: 0 },
    { icon: <FaDraftingCompass />, title: translations.modeler3D, index: 1 },
    { icon: <FaPalette />, title: translations.webDesigner, index: 2 },
    { icon: <FaPaintBrush />, title: translations.imageDesigner, index: 3 }
  ];

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>{translations.portfolioTitle}</h3>
        <h1>{translations.myName}</h1>
        <p>{translations.homeDescription}</p>

        {/* Social Media Icons */}
        <div className="social-media">
          <a href="https://www.tiktok.com/@sovietra" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </a>
          <a href="https://soundcloud.com/7kru" target="_blank" rel="noopener noreferrer">
            <FaSoundcloud />
          </a>
          <a href="https://www.instagram.com/octrogan/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/shanya-k-19026b32a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/sovietra" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Profession Icons */}
      <div className="profession-container">
        <div className="profession-box">
          {professions.map((prof) => (
            <div
              key={prof.index}
              className={`profession profession-${prof.index}`}
            >
              <div className="profession-icon">{prof.icon}</div>
              <h3>{prof.title}</h3>
            </div>
          ))}
          <div className="circle"></div>
        </div>
        <div className="overlay"></div>
      </div>

      <div className="home-img">
        <img src="/images/home.png" alt="Profile" />
      </div>
    </section>
  );
};

export default Home;
