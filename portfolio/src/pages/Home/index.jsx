import styles from "./Home.module.css";
import Header from "../../components/Header"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import { Link } from "react-router-dom";

function Home() {
    return(
        <>
            <Header />
            <Container>
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
            </Container>
            <Footer />
        </>
    );
}

export default Home;
