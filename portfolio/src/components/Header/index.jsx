import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
    return(
        <header className={styles.header}>
            <span>HG Dev</span>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">Sobre</Link>
                <a href="#">Projetos</a>
                <a href="#">Contatos</a>
            </nav>
        </header>
    );
}

export default Header;
