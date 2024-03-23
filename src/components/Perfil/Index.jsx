import { TiHtml5, TiCss3 } from "react-icons/ti";
import styles from './Perfil.module.css';
import { FaReact } from "react-icons/fa";



const Perfil = () => {
    const usuario = {
        nome: "kellson",
        avatar: 'https://github.com/kellsonHolanda.png',

    }

    return (
        <>
            <div className={styles.icons}>
                <TiHtml5 style={{ color: "#E34F26", fontSize: "4rem" }} />
                <TiCss3 style={{ color: "#379ad6", fontSize: "4rem" }} />
                <FaReact style={{ color: "#00BFFF", fontSize: "4rem" }}/>           
            </div>
            <header styles={styles.header}>
                <img className={styles.avatar} src={usuario.avatar} />
                <h1 className='nome'>{usuario.nome}</h1>
            </header>
        </>
    )
}
export default Perfil
