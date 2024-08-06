import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
    return(
        <section className={styles.home}>
            <div className={styles.left}>
                <p>
                    Olá, me chamo <br/>
                    <span>Heber Gustavo</span> <br />
                    sou Desenvolvedor Full Stack
                </p>
                <Link to="/about" className={styles.btnDefault}>Conheça-me mais</Link>
            </div>
            <div className={styles.rigth}>
                <img src="/person-full-stack.svg" alt="Boas vindas"></img>
            </div>
        </section>
    );
}

export default Home;
