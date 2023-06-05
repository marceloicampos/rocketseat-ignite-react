import styles from './Header.module.css'
import todoLogo from '../assets/rocket_icon.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={todoLogo} alt="logo todo" />
            <h1><span className={styles.s1}>to</span><span className={styles.s2}>do</span></h1>
        </header>
    )
}
