import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import appStyles from './App.module.css'
import './global.css'
// acima estamos importando estilos sem o CSS Module

export default function App() {
    return (
        <div>
            <Header />
            <div className={appStyles.wrapper}>
                <Sidebar />
                <main>
                    <Post author={'Marcelo Campos'} content={'Post Today'} />
                    <Post author={'Duda Campos'} content={'Post Tomorrow'} />
                    <Post author={'Caio Campos'} content={'Post Yesterday'} />
                </main>
            </div>
        </div>
    )
}

// function App() {
//     return (
//         <>
//             <h1>Hello World !</h1>
//         </>
//     )
// }
// export default App
// // acima temos a exportação padrão de um componente
