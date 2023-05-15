import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// acima estamos negando o TypeScript e negando o EsLint

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// )

// acima temos o render padrão

// const el = document.getElementById('root')
// if (el === null) throw new Error('Root container missing in index.html')
// const root = ReactDOM.createRoot(el)
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// )

// acima temos o render inferindo o TypeScript e utilizando o EsLint
