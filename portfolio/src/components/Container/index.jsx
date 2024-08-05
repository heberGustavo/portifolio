import styles from "./Container.module.css";

function Container() {
    return(
        <section className={styles.container}>
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
    );
}

export default Container;
