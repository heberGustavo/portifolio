import styles from "./NotFound.module.css";
import Header from "../../components/Header"
import Container from "../../components/Container"
import Footer from "../../components/Footer"

function NotFound(){
    return(
        <section>
            <Header />
            <Container>
                <section className={styles.notFound}>
                    <h2>Something went wrong!</h2>
                    <img src="/page-not-found.svg" alt="Page Not Found" />
                    <h2><span>Page Not Found!</span></h2>
                </section>
            </Container>
            <Footer />
        </section>
    );
}

export default NotFound;
