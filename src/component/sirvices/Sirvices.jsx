import CV from "../../text/myCv.pdf";
import ServiceCard from "./ServiceCard";
import "./sirvices.css";

const services = [
  {
    id: 1,
    img: "assets/image/heartemoji.png",
    title: "Design ",
    desc: "Figma, Sketch, Photoshop, Adobe, Adobe xd",
  },
  {
    id: 2,
    img: "assets/image/glasses.png",
    title: "Developer",
    desc: "Html, Css, JavaScript, React",
  },
  {
    id: 3,
    img: "assets/image/humble.png",
    title: "Wordpress",
    desc: "Portfolio ,E-Commerce, Blog, Business, Eduactional, News Website",
  },
];
const Sirvices = () => {
  return (
    <div className="sirvices section" id="sirvices">
      <div className="s-left">
        <h1>My Awesome</h1>
        <h1>
          <span>Services</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, fugit?
          Fugiat modi ab quo perspiciatis repellendus excepturi.
        </p>
        <a href={CV} download className="btn">
          Download My Cv
        </a>
        <div
          className="i-blur"
          style={{
            background: "#C1F5FF",
            top: "20rem",
            left: "-5rem",
          }}></div>
      </div>
      <div className="s-right">
        {services.map((service) => {
          const { id, title, desc, img } = service;
          return (
            <ServiceCard key={id} title={title} desc={desc} img={img} id={id} />
          );
        })}
        <div className="i-blur"></div>
        <div
          className="i-blur"
          style={{
            top: "2rem",
            left: "30rem",
          }}></div>
      </div>
    </div>
  );
};

export default Sirvices;
