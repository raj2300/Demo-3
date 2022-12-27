import React from "react";
import Card from "../Component/Card";
import style from "../styles/MiddleScreen.module.css";
const cardData = [
  {
    id: 1,
    index: "01",
    type: "up",
    description: "Introducing Al to children in an age appropriate manner.",
    logoUrl: require("../Assets/1.png"),
    color: "rgb(29,45,96)",
  },
  {
    id: 2,
    index: "02",
    type: "down",
    description:
      "Gain awareness on Al and build an interactive story around it",
    logoUrl: require("../Assets/2.png"),
    color: "rgb(157,33,87)",
  },
  {
    id: 3,
    index: "03",
    type: "up",
    description: "Acquire programming skills in a user-friendly format",
    logoUrl: require("../Assets/3.png"),
    color: "rgb(227,94,19)",
  },
  {
    id: 4,
    index: "04",
    type: "down",
    description: "Exposure to mini projects on diverse topics",
    logoUrl: require("../Assets/4.png"),
    color: "rgb(25,91,55)",
  },
  {
    id: 5,
    index: "05",
    type: "up",
    description: "Train the teachers programee",
    logoUrl: require("../Assets/4.png"),
    color: "rgb(183,125,51)",
  },
];
export const MiddleScreen = () => {
  return (
    <div className={style.container}>
      <div className={style.topSubContainer}>
        <div className={style.topSubContainerLeftcontainer}>
          <p className={style.topSubContainerLeftcontainerHeading}>
            WHO WE ARE
          </p>
          <p className={style.topSubContainerLeftcontainerdescription}>
            RubixeTM is a global technology company specializing in disruptive
            technologies Artificial Intelligence (Al), Machine Learning, Robotic
            Process Automation (RPA), BlockChain, and Internet of Things (IoT).
            <br />
            <br />
            Rubixe™ mission is to enable businesses to leverage the full
            potential of disruptive technologies and stay competitive in the
            market, turning complex challenges into solutions, providing a
            strategic competitive advantage that are more efficient, effective
            and predictable.
          </p>
        </div>

        <div className={style.topSubContainerRightcontainer}>
          <hr className={style.topSubContainerRighthr}></hr>
          <img
            className={style.topSubContainerRightImage}
            src={require("../Assets/wall1.jpg")}
            alt="Girl in a jacket"
          />
          <div className={style.topSubContainerRightgreendiv}></div>
        </div>
      </div>
      <div className={style.middleSubContainer}>
        <div className={style.middleSubContainerAlignContainer}>
          <p className={style.topSubContainerLeftcontainerHeading}>
            WHERE WE STARTED
          </p>
          <p>
            We started in 2015, With a passionate team who want to bring
            game-changing solutions through disrupting technologies. We
            expertise in delivering enterprise-level solutions in the field of
            Artificial Intelligence (AI), Cyber Security, Robotic Process
            Automation (RPA), Internet of Things (loT), and BlockChain
            technology.
          </p>
        </div>
      </div>
      <div className={style.bottomSubContainer}>
        {cardData.map((item, index) => {
          return (
            <Card
              key={index}
              index={item?.index}
              description={item?.description}
              type={item?.type}
              logoUrl={item?.logoUrl}
              color={item?.color}
            />
          );
        })}
      </div>
    </div>
  );
};
