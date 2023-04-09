import { motion } from "framer-motion";
import { BsMessenger } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import FloatingDiv from "./FloatingDiv";
import "./intro.css";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <>
      <div className="intro" id="home">
        <div className="i-left">
          <div className="text-content">
            <h1>Hy! I Am</h1>
            <h1>
              <span>M.R.M Munna</span>
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi nulla voluptatem repellat magni voluptatibus at illo
              officia sed accusamus dolore incidunt quis illum asperiores dolor,
              adipisci nesciunt obcaecati rem itaque.
            </p>
            <a href="#" className="btn">
              Hire me
            </a>
          </div>
          <div className="i-l-social">
            <a href="#">
              <FaGithub className="icon" />
              <FaLinkedinIn className="icon" />
              <BsMessenger className="icon" />
            </a>
          </div>
        </div>
        <div className="i-right">
          <div className="i-r-image">
            <img className="my-pic" src="assets/image/my-art.png" alt="" />
            <motion.div
              initial={{ right: "-30%" }}
              whileInView={{ right: "0%" }}
              transition={transition}
              className="i-float1">
              <FloatingDiv
                image={"assets/image/web_de_icon.png"}
                text="Web Designer"
              />
            </motion.div>
            <motion.div
              initial={{ left: "-36%" }}
              whileInView={{ left: "-10%" }}
              transition={transition}
              className="i-float2">
              <FloatingDiv
                image={"assets/image/wordpress_org_SVzkLk3.webp"}
                text="Wordpress Customizer"
              />
            </motion.div>
            <div className="i-blur"></div>
            <div
              className="i-blur"
              style={{
                background: "#C1F5FF",
                top: "15rem",
                left: "-5rem",
              }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
