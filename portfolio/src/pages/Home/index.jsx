import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
    return(
        <section className={styles.home}>
            <div className={styles.left}>
                <p>
                    Hi, I am <br/>
                    <span>Heber Gustavo</span> <br />
                    Full Stack Developer
                </p>
                <Link to="/about" className={styles.btnDefault}>Learn more about me</Link>
            </div>
            <div className={styles.rigth}>
                <img src="/person-full-stack.svg" alt="Boas vindas"></img>
            </div>
        </section>
    );
}

export default Home;
