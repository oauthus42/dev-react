import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
          <a href="http://localhost:3000">
        <img src='https://cdn-icons-png.flaticon.com/128/8535/8535703.png'></img>
        </a>
      </header>
    )
}

export default Header;