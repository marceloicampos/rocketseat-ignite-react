import styles from './TasksLists.module.css'
import clipboardLogo from '../assets/clipboard_icon.svg'
import buttonPlus from '../assets/button_plus.svg'

export function TasksLists() {
  return (
    <main className={styles.main}>
      <form action="#">
        <input type="text"
          placeholder='Adicione uma nova tarefa'
        />
        <button>
          Criar
          <img src={buttonPlus} alt="botão de criar" />
        </button>
      </form>
      <div>
        <p>Tarefas Criadas<span> 0</span></p>
        <p>Tarefas Concluídas<span> 0</span></p>
      </div>
      <img src={clipboardLogo} alt="logo ClipBoard" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </main>
  )
}
