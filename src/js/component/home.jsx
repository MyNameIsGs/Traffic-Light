import React, { useState } from "react";

export function Home() {
  const [selectedColor, setSelectedColor] = useState("green");

  return (
	<div>
	<div className="trafficLightStick position-absolute top-0 start-50 translate-middle">

	</div>

    <div className="trafficLight position-absolute top-50 start-50 translate-middle">
      <div
        onClick={() => setSelectedColor("green")}
        className={
          "my-3 light green" + (selectedColor === "green" ? " glowGreen" : "")
        }
      ></div>
      <div
        onClick={() => setSelectedColor("yellow")}
        className={
          "my-3 light yellow" +
          (selectedColor === "yellow" ? " glowYellow" : "")
        }
      ></div>
      <div
	  	
        onClick={() => setSelectedColor("red")}
        className={
          "my-3 light red" + (selectedColor === "red" ? " glowRed" : "")
        }
      ></div>
    </div>
	</div>
  );
}

export default Home;
