import { Header } from '../src/components/Header'
import { Sidebar } from '../src/components/Sidebar'
import { Post } from '../src/components/Post'
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
                    <Post author={'Marcelo Campos'} job={'Web Developer'} avatar={'https://github.com/marceloicampos.png'} />
                    <Post author={'Duda Campos'} job={'UI / UX Designer'} avatar={'https://github.com/jakeliny.png'} />
                    <Post author={'Caio Campos'} job={'QA Tester'} avatar={'https://github.com/maykbrito.png'} />
                </main>
            </div>
        </div>
    )
}

// function App() {
//     return (
//         <>
//             <h1>Hello World !</h1>
//             <Posts author={'Marcelo Campos'} job={'Web Developer'} avatar={'https://github.com/marceloicampos.png'} />
//         </>
//     )
// }
// export default App
// // acima temos a exportação padrão de um componente
