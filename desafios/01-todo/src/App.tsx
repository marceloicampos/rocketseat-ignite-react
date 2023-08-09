import { Header } from './components/Header'
import { TasksZeroList } from './components/TasksZeroList'
import { TasksList } from './components/TasksList'
import { useState } from 'react';
import styles from './App.module.css'
import './global.css'


export default function App() {
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    // toggle shown state
    setIsShown(current => !current);
    // or simply set it to true
    // setIsShown(true);
  };
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <TasksZeroList />
      </div>
      <div>
        <button onClick={handleClick}>Click</button>
        {/* 👇️ show component on click */}
        {isShown && <Box />}
      </div>
    </div>
  )
}

function Box() {
  return (
    <TasksList />
  );
}
