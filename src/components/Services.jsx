import { FaLaptopCode, FaPaintBrush } from "react-icons/fa";
import { SiBlender } from "react-icons/si";

const Services = () => {
  const hobbies = [
    { icon: <FaLaptopCode size={40} color="#647C64" />, title: "Web Development" },
    { icon: <SiBlender size={40} color="#647C64" />, title: "3D Modeler" },
    { icon: <FaPaintBrush size={40} color="#647C64" />, title: "Image Designer" }
    ];

  return (
    <section className="services" id="services">
      <h2 className="heading">
        My <span>Hobbies</span>
      </h2>

      <div className="services-container">
        {hobbies.map((hobby, index) => (
          <div key={index} className="services-box">
            <div className="services-box-icon">{hobby.icon}</div>
            <h3>{hobby.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services