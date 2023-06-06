import styles from './Header.module.css'
import todoLogo from '../assets/rocket_icon.svg'

export function Header() {
    return (
        <header>
            <div className={styles.logoBox}>
                <img src={todoLogo} alt="logo todo" />
                <h1>
                    <span className={styles.span1}>to</span>
                    <span className={styles.span2}>do</span>
                </h1>
            </div>
        </header>
    )
}
