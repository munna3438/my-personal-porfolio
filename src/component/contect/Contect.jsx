import "./contect.css";

const Contect = () => {
  return (
    <div className="contect section" id="contect">
      <div className="contect-left my-title-style">
        <h1>Get in Touch</h1>
        <h1>
          <span>Contact Me</span>
        </h1>
      </div>
      <div className="contect-right">
        <form className="form">
          <input type="text" placeholder="Name" />
          <input type="email" name="email" id="" placeholder="Email" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Message"></textarea>
          <button type="submit" className="btn">
            Send
          </button>
        </form>
        <div
          className="i-blur"
          style={{
            top: "-2rem",
            left: "7rem",
          }}></div>
      </div>
    </div>
  );
};

export default Contect;
