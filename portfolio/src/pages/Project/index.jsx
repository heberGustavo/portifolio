import styles from "./Project.module.css";
import Card from "../../components/Card";
import { useEffect, useState } from "react";

function Project() {

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        const searchRepositories = async () => {
            const response = await fetch("https://api.github.com/users/heberGustavo/repos");
            const data = await response.json();
            setRepositories(data);
        }

        searchRepositories();

    }, []);

    return (
        <section className={styles.projetos}>
            <h2>Projeto</h2>
            {
                repositories.length > 0 ? (
                    <section className={styles.lista}>
                        {
                            repositories.map((repo) => (
                                <Card
                                    key={repo.id}
                                    name={repo.name}
                                    description={repo.description}
                                    html_url={repo.html_url}
                                />
                            ))
                        }
                    </section>
                ) : (
                    <p>Carregando repositórios</p>
                )
            }
        </section>
    );
}

export default Project;
