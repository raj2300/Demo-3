import React from "react";
import style from "../styles/TopScreen.module.css";
function TopScreen() {
  return (
    <div className={style.container}>
      <div className={style.backDrop}/>
      <div className={style.subContainer_1}>
        <h1 className={style.techText}>TECH</h1>
        <h3 className={style.forText}>FOR</h3>
        <h2 className={style.teensText}>TEENS</h2>
      </div>
      <div className={style.subContainer_2}>
        <h3>CARVING FUTURE</h3>
        <h3>TECHNOLGY PROFESSIONALS</h3>
        <h3>OUT OF YOUNG MINDS</h3>
      </div>
    </div>
  );
}

export default TopScreen;
