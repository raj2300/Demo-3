import React from "react";
import style from "./style.module.css";
import Logo from "../../Assets/logo.png";
export const NavBar = () => {
  const navItem = [
    { name: "HOME" },
    { name: "SERVICES" },
    { name: "PRODUCTS" },
    { name: "AI INTERNSHIP" },
    { name: "CAREER" },
    { name: "BLOG" },
    { name: "ABOUT" },
    { name: "CONTACT US" },
  ];
  return (
    <div className={style.container}>
      <div className={style.leftContainer}>
        <img src={Logo} className={style.icon} />
        <div>
          <p className={style.title}>Rubike</p>
          <hr className={style.underLine}></hr>
          <p className={style.titleDesc}>Distruptive Technologies at Work</p>
        </div>
      </div>
      <div className={style.rightContainer}>
        {navItem.map((item, index) => {
          return (
            <a
              className={style.navTab}
              key={index}
              onClick={() => console.log(item.name)}
            >
              {item.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};
