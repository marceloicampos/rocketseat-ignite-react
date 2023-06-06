import { Header } from './components/Header'
import { TasksLists } from './components/TasksLists'
import styles from './App.module.css'
import './global.css'


export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <TasksLists />
      </div>
    </div>
  )
}
