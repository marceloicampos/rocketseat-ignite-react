import { Header } from '../src/components/Header'
import { Sidebar } from '../src/components/Sidebar'
import { Post } from '../src/components/Post'
import appStyles from './App.module.css'
import './global.css'
// acima estamos importando estilos sem o CSS Module

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/marceloicampos.png',
            name: 'Marcelo Campos',
            job: 'Web Developer'
        },
        publishedAt: new Date('2023-05-04 20:00:00'),
        content: [
            { type: 'paragraph', content: 'Fala galera 👋' },
            {
                type: 'paragraph',
                content:
                    'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da RocketSeat. O nome do projeto é DoctorCare🚀'
            },
            { type: 'link', content: '👉 marcelo.design/doctorcare' },
            { type: 'tag', content: '#novoprojeto ' },
            { type: 'tag', content: '#nlw ' },
            { type: 'tag', content: '#rocketseat' }
        ]
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/maykbrito.png',
            name: 'Mayk Brito',
            job: 'Senior Developer'
        },
        publishedAt: new Date('2023-05-05 21:00:00'),
        content: [
            { type: 'paragraph', content: 'Fala Pessoal 👋' },
            {
                type: 'paragraph',
                content: 'Acabei de subir mais um projeto no meu portfólio. O nome do projeto é UnionCare🚀'
            },
            { type: 'link', content: '👉 mayk.design/unioncare' },
            { type: 'tag', content: '#projeto ' },
            { type: 'tag', content: '#nlwReturn ' },
            { type: 'tag', content: '#rocketseat' }
        ]
    }
]

// iteração
// const algo = posts.forEach(post => {
//     return 1
//     // no forEach o retorno sempre é vazio
// })

// const algoMais = posts.map(post => {
//     return 1
//     // no map teremos um retorno de algo mais, ou seja, 1
// })

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
                    {posts.map(post => {
                        return (
                            <Post
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt}
                            />
                        )
                    })}
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
