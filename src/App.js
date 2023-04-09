import { useState } from "react";
import "./App.css";
import Contect from "./component/contect/Contect";
import Experience from "./component/experience/Experience";
import Fotter from "./component/fotter/Fotter";
import Intro from "./component/intro/Intro";
import Navbar from "./component/navbar/Navbar";
import Portfolio from "./component/portfolio/Portfolio";
import Sirvices from "./component/sirvices/Sirvices";
import Testimonial from "./component/testimonial/Testimonial";
import Work from "./component/work/Work";
function App() {
  const [clsname,setClsname]=useState("")
  const handelActive=(active)=>{
    setClsname(active)
  }
  console.log(clsname);
  return (
    <div className={`App ${clsname}`}>
      <Navbar onActive={handelActive} />
      <div className="body">
        <Intro />
        <Sirvices />
        <Experience />
        <Work />
        <Portfolio />
        <Testimonial />
        <Contect />
      </div>
      <Fotter />
    </div>
  );
}

export default App;
