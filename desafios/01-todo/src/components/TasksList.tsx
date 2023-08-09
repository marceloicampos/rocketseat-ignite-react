import styles from './TasksList.module.css'

export function TasksList() {
    return (
        <main className={styles.container}>
            <div className={styles.countTasks}>
                <p>Tarefas Criadas<span>0</span></p>
                <p>Tarefas Concluídas<span>0</span></p>
            </div>
            <div className={styles.zeroTasks}>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
            <div>
            </div>
        </main>
    )
}
