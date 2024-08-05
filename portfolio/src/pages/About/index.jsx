import styles from "./About.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";

function About() {
    return(
        <section className={styles.container}>
            <Header />
            <Container>
                <h1>About</h1>
            </Container>
            <Footer />
        </section>
    );
}

export default About;
