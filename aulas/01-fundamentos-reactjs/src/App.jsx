import { Post } from './components/Post'

export default function App() {
    return (
        <>
            <h1>Hello World !</h1>
            <Post author={'Marcelo Campos'} content={'Post Today'}/>
            <Post author={'Duda Campos'} content={'Post Tomorrow'}/>
            <Post author={'Caio Campos'} content={'Post Yesterday'}/>
        </>
    )
}

// export default App
