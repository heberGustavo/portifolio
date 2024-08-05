import styles from "./NotFound.module.css";

function NotFound(){
    return(
        <section className={styles.notFound}>
            <h2>Something went wrong!</h2>
            <img src="/page-not-found.svg" alt="Page Not Found" />
            <h2><span>Page Not Found!</span></h2>
        </section>
    );
}

export default NotFound;
