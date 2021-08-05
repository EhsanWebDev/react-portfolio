import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";
const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ["Developer", "Designer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man.png" alt="man" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Ehsan Ahmad</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="down" />
        </a>
      </div>
    </div>
  );
};
export default Intro;
