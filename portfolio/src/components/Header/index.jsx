import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
    return(
        <header className={styles.header}>
            <span>
                <Link to="/">HG Dev</Link>
            </span>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">Sobre</Link>
                <Link to="/project">Projetos</Link>
                <Link to="/contact">Contato</Link>
            </nav>
        </header>
    );
}

export default Header;
