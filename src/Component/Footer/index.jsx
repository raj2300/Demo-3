import React from "react";
import style from "./style.module.css";

export const Footer = () => {
  return (
    <footer className={style.container}>
      <div className={style.wrapper}>
        <div className={style.about}>
          <h3>ABOUT US</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            excepturi ut tempora enim ducimus. Molestias quaerat est cum non
            corporis quae, perspiciatis aut, alias itaque saepe nobis doloremque
            provident at error laudantium necessitatibus officiis eos soluta.
            Nobis, molestias consectetur eveniet sint ducimus enim? Explicabo
            voluptatum autem pariatur deleniti, ratione ullam libero, adipisci
            eos facilis, architecto aspernatur temporibus quia labore.
          </p>
        </div>
        <div className={style.footerInfo}>
          <h3>MENUS</h3>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Products</li>
            <li>Career</li>
          </ul>
        </div>
        <div className={style.footerInfo}>
          <h3>LEARN MORE</h3>
          <ul>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={style.footerInfo}>
          <h3>ADDRESS</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita,
            cumque? Laboriosam nobis magni porro suscipit quis rem repellendus!
            Laboriosam, velit?
          </p>
          <p>Phone: 0804-717-8999</p>
          <p>Email: hi@rubixe.com</p>

          <h3>SOCIAL MEDIA</h3>
        </div>
      </div>
      <div className={style.copyright}>
        <p>&copy; Copyright 2017 - 2022 | Rubixe is a brand of THINK AHEAD INNOVATIONS PVT. LTD. | All Rights Reserved</p>
      </div>
    </footer>
  );
};
