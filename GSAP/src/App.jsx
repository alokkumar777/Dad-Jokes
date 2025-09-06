import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const App = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, { x: 600, duration: 5});
  }, []);

  return (
    <div className="container">
      <h1 className="text-center mt-5 display-1 text-uppercase">
        time to do something crazy
      </h1>
      <div
        ref={boxRef}
        style={{
          width: "100px",
          height: "100px",
          background: "red",
          position: "relative",
        }}
      ></div>
    </div>
  );
};

export default App;
