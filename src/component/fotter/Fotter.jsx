import { BsMessenger } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./fotter.css";

const Fotter = () => {
  return (
    <div className="fotter" id="fotter">
      <div className="f-image">
        <img src="assets/image/wave.png" alt="" />
      </div>
      <div className="f-content">
        <span>&copy; All right recive by M.R.M (Munna)</span>
        <div className="f-icon">
          <i>
            <BsMessenger />
          </i>
          <i>
            <FaGithub />
          </i>
          <i>
            <FaLinkedinIn />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
