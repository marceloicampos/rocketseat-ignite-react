import { Header } from './components/Header'
import { Post } from './components/Post'
import './styles.css'
// acima estamos importando estilos sem o CSS Module

export default function App() {
    return (
        <div>
            <Header />
            <Post author={'Marcelo Campos'} content={'Post Today'} />
            <Post author={'Duda Campos'} content={'Post Tomorrow'} />
            <Post author={'Caio Campos'} content={'Post Yesterday'} />
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
