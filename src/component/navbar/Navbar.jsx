/*eslint-disable*/

import { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import { Link } from "react-scroll";
import "./Navbar.css";
const Navbar = (props) => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");
  const toggleHandel = () => {
    setToggle(!toggle);
  };
  const classHandel = (clsname) => {
    if (toggle === true) {
      return `${clsname}-active`;
    } else {
      return `${clsname}`;
    }
  };
  useEffect(() => {
    if (toggle === true) {
      props.onActive("active");
    } else {
      props.onActive("");
    }
  });

  return (
    <>
      <div id="navbar" className={`navbar ${classHandel("navbar")}`}>
        <div className="wrapper">
          <div className="left">
            <div className="logo">
              <a href="/" className={active}>
                Munna
              </a>
            </div>
            <div className="toggle">
              <div
                onClick={toggleHandel}
                className={classHandel("toggle-circle")}></div>
              <div className="toggle-icon">
                <i>
                  <MdOutlineDarkMode />
                </i>
                <i>
                  <WiDaySunny />
                </i>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="menu">
              <ul className={classHandel("ul")}>
                <li>
                  <Link
                    spy={true}
                    to="home"
                    smooth={true}
                    activeClass="activeClass">
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    spy={true}
                    to="sirvices"
                    smooth={true}
                    activeClass="activeClass">
                    <span>Servces</span>
                  </Link>
                </li>
                <li>
                  <Link
                    spy={true}
                    to="experience"
                    smooth={true}
                    activeClass="activeClass">
                    <span>Experience</span>
                  </Link>
                </li>
                <li>
                  <Link
                    spy={true}
                    to="portfolio"
                    smooth={true}
                    activeClass="activeClass">
                    <span>Portfolio</span>
                  </Link>
                </li>
                <li>
                  <Link
                    spy={true}
                    to="testimonial"
                    smooth={true}
                    activeClass="activeClass">
                    <span>Testimonial</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nbutton">
              <Link spy={true} to="contect" smooth={true}>
                <span className="btn">contect</span>
              </Link>
              {/* <a href="#contect" >
                contect
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
