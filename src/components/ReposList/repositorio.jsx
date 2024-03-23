import { useEffect, useState } from "react";
import styles from './RepoList.module.css';


const ReposList = () => {
    const [repos, setReposit] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/kellsonHolanda/repos')
            .then(resposta => resposta.json())
            .then(respostaJson => {
                setReposit(respostaJson)
            })
    });

    return (
        <div className="container">
            <ul className={styles.list}>
                {repos.map(repositorio => (
                    <li className={styles.listItem} key={repositorio.id}>
                        <div className={styles.itemName}>
                            <b> Nome: </b>{repositorio.name}
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Linguagem: </b>{repositorio.language}
                        </div>   
                        <a styles={styles.a} target='_blank' href={repositorio.html_url}>Visitar no GittHub</a>
                    </li>
                ))}
                
            </ul>
        </div>
    )

}
export default ReposList