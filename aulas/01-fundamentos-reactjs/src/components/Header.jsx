import styles from './Header.module.css'
// para usar o CSS Module importamos com um nome qualquer (que será uma representação do objeto css)
// e usamos esse nome como um objeto para importação do estilo desejado

export function Header() {
    return (
        <header className={styles.header}>
            <strong>Ignite Feed</strong>
        </header>
    )
}
