import { PencilLine } from '@phosphor-icons/react'
import style from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={style.sidebar}>
            <img
                className={style.cover}
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
                alt=""
            />
            <div className={style.profile}>
                <img src="https://github.com/marceloicampos.png" alt="avatar do usuário" />
                <strong>Marcelo Campos</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar Perfil
                </a>
            </footer>
        </aside>
    )
}
