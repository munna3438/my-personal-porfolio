import { motion } from "framer-motion";
import "./work.css";

const Work = () => {
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="section work" id="work">
      <div className="s-left">
        <h1>Work For All These</h1>
        <h1>
          <span>Brands & Clients</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, fugit?
          Fugiat modi ab quo perspiciatis repellendus excepturi.
        </p>
        <span className="btn w-btn">Hire Me</span>
        <div
          className="i-blur"
          style={{
            background: "#C1F5FF",
            top: "20rem",
            left: "-5rem",
          }}></div>
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: "45deg" }}
          whileInView={{ rotate: "0deg" }}
          transition={transition}
          className="w-mainCircle">
          <div className="w-secCircle">
            <img src="assets/image/amazon.png" alt="" />
          </div>
          <div className="w-secCircle">
            <img src="assets/image/Facebook.png" alt="" />
          </div>
          <div className="w-secCircle">
            <img src="assets/image/fiverr.png" alt="" />
          </div>
          <div className="w-secCircle">
            <img src="assets/image/Upwork.png" alt="" />
          </div>
          <div className="w-secCircle">
            <img src="assets/image/Shopify.png" alt="" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Work;
