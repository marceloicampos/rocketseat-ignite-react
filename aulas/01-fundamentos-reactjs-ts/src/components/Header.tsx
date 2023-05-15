import styles from './Header.module.css'
import igniteLogo from '../assets/ignite_simbol.svg'

// para usar o CSS Module importamos com um nome qualquer (que será uma representação do objeto css)
// e usamos esse nome como um objeto para importação do estilo desejado

export function Header() {
    return (
        <header className={styles.header}>
            <img
                src={igniteLogo}
                alt="logo ignite"
            />
            <strong>Ignite Feed</strong>
        </header>
    )
}
