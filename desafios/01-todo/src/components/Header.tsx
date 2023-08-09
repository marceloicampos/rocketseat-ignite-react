import styles from './Header.module.css'
import todoLogo from '../assets/rocket_icon.svg'
import buttonPlus from '../assets/button_plus.svg'

export function Header() {
    return (
        <div>
            <header>
                <div className={styles.logoBox}>
                    <img src={todoLogo} alt="logo todo" />
                    <h1>
                        <span className={styles.span1}>to</span>
                        <span className={styles.span2}>do</span>
                    </h1>
                </div>
            </header>
            <form action="#">
                <input type="text"
                    placeholder='Adicione uma nova tarefa'
                />
                <button>
                    Criar
                    <img src={buttonPlus} alt="botão de criar" />
                </button>
            </form>
        </div>
    )
}
