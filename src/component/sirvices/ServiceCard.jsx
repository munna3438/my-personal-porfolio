import { motion } from "framer-motion";
import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ title, desc, img, id }) => {
  const transition = { duration: 2, type: "spring" };
  let start;
  let end;
  let tops;
  let tope;
  switch (id) {
    case 1:
      start = "70%";
      end = "55%";

      break;
    case 2:
      start = "-20%";
      end = "0%";
      break;
    case 3:
      end = "50%";
      tops = "0%";
      tope = "-25%";
      break;
  }
  return (
    <motion.div
      initial={{ top: `${tops}`, left: `${start}` }}
      whileInView={{ top: `${tope}`, left: `${end}` }}
      transition={transition}
      className={`serviceCard ServiceCard${id}`}>
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{desc}</p>
      <a href="#">LEARN MORE</a>
    </motion.div>
  );
};

export default ServiceCard;
