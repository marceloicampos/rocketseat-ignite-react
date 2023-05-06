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
                <Sidebar
                    author_user_logged={'Marcelo Campos'}
                    job_user_logged={'Web Developer'}
                    avatar_user_logged={'https://github.com/marceloicampos.png'}
                />
                <main>
                    <Post
                        author_user={'Marcelo Campos'}
                        job_user={'Web Developer'}
                        avatar_user={'https://github.com/marceloicampos.png'}
                    />
                    <Post
                        author_user={'Duda Campos'}
                        job_user={'UI / UX Designer'}
                        avatar_user={'https://github.com/jakeliny.png'}
                    />
                    <Post
                        author_user={'Caio Campos'}
                        job_user={'QA Tester'}
                        avatar_user={'https://github.com/maykbrito.png'}
                    />
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
