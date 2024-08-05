import styles from "./Contact.module.css";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";


function Contact() {
  return (
    <section className={styles.contatos}>
        <h1>Contato</h1>
        <h3>Entre em contato</h3>
        <p>Para que possamos conversar mais sobre.</p>

        <div className={styles.icones}>
          <a href="mailto:heber.gbarbosa@hotmail.com" target="_blank" rel="noopener noreferrer">
              <MdEmail className={styles.icone} />
          </a>
          <a href="https://www.instagram.com/heber_gustavoo/" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram className={styles.icone} />
          </a>
          <a href=" https://github.com/heberGustavo" target="_blank" rel="noopener noreferrer">
              <SiGithub className={styles.icone} />
          </a>
          <a href="https://www.linkedin.com/in/heber-gustavo/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={styles.icone} />
          </a>
        </div>
      </section>
  );
}

export default Contact;
