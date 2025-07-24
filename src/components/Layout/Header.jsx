import { Link } from "react-router";

function Header() {
  return (
    <>
      <header>
        <figure>
          <h2>Icono</h2>
          <h2>TextIcon</h2>
        </figure>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="about-us">Sobre nosotros</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
