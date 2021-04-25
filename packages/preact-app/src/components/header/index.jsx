import { Link } from "react-router-dom";
import style from "preact-app/components/header/style.module.css";

const Header = () => (
  <header class={style.header}>
    <h1>Preact App</h1>
    <nav>
      <Link activeClassName={style.active} to="/">
        Home
      </Link>
      <Link activeClassName={style.active} to="/profile/">
        Me
      </Link>
      <Link activeClassName={style.active} to="/profile/john">
        John
      </Link>
    </nav>
  </header>
);

export default Header;
