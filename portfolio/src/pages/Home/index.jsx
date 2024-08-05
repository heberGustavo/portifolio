import styles from "./Home.module.css";
import Header from "../../components/Header"
import Container from "../../components/Container"
import Footer from "../../components/Footer"

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
                        <button className={styles.default}>Learn more about me</button>
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
