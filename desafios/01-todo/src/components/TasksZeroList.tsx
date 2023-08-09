import styles from './TasksZeroList.module.css'
import clipboardLogo from '../assets/clipboard_icon.svg'

export function TasksZeroList() {
  return (
    <div className={styles.tasksContainer}>
      <main className={styles.tasks}>
        <div className={styles.countTasks}>
          <p>Tarefas Criadas<span>0</span></p>
          <p>Tarefas Concluídas<span>0</span></p>
        </div>
        <div className={styles.zeroTasks}>
          <img src={clipboardLogo} alt="logo ClipBoard" />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
        <div>
      </div>
      </main>
    </div>
  )
}
