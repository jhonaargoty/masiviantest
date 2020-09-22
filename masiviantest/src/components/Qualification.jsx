import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "../assets/qa.scss";
import { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";

function Qualification() {
  const [qa, setQa] = useState(0);
  const [styleStar5, setStyleStar5] = useState({});
  const [styleStar4, setStyleStar4] = useState({});
  const [styleStar3, setStyleStar3] = useState({});
  const [styleStar2, setStyleStar2] = useState({});
  const [styleStar1, setStyleStar1] = useState({});

  useEffect(() => {
      console.log("x")
    switch (qa) {
      case 5:
        setStyleStar5({ color: "yellow" });
        setStyleStar4({ color: "yellow" });
        setStyleStar3({ color: "yellow" });
        setStyleStar2({ color: "yellow" });
        setStyleStar1({ color: "yellow" });
        break;
      case 4:
        setStyleStar5({ color: "" });
        setStyleStar4({ color: "yellow" });
        setStyleStar3({ color: "yellow" });
        setStyleStar2({ color: "yellow" });
        setStyleStar1({ color: "yellow" });
        break;
      case 3:
        setStyleStar5({ color: "" });
        setStyleStar4({ color: "" });
        setStyleStar3({ color: "yellow" });
        setStyleStar2({ color: "yellow" });
        setStyleStar1({ color: "yellow" });
        break;
      case 2:
        setStyleStar5({ color: "" });
        setStyleStar4({ color: "" });
        setStyleStar3({ color: "" });
        setStyleStar2({ color: "yellow" });
        setStyleStar1({ color: "yellow" });
        break;
      case 1:
        setStyleStar5({ color: "" });
        setStyleStar4({ color: "" });
        setStyleStar3({ color: "" });
        setStyleStar2({ color: "" });
        setStyleStar1({ color: "yellow" });
        break;
    }
  },[qa]);

  return (
    <div className="qadiv">
      <span>Your Vote {qa}</span>
      <br></br>

      <IconButton style={styleStar5} className="star" onClick={() => setQa(5)}>
        <StarIcon />
      </IconButton>
      <IconButton style={styleStar4} className="star" onClick={() => setQa(4)}>
        <StarIcon />
      </IconButton>
      <IconButton style={styleStar3} className="star" onClick={() => setQa(3)}>
        <StarIcon />
      </IconButton>
      <IconButton style={styleStar2} className="star" onClick={() => setQa(2)}>
        <StarIcon />
      </IconButton>
      <IconButton style={styleStar1} className="star" onClick={() => setQa(1)}>
        <StarIcon />
      </IconButton>
    </div>
  );
}

export default Qualification;
