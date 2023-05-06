import { Avatar } from './Avatar'
import { PencilLine } from '@phosphor-icons/react'
import style from './Sidebar.module.css'

export function Sidebar(props) {
    // essa props vem do app.jsx
    return (
        <aside className={style.sidebar}>
            <img
                className={style.cover}
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
                alt=""
            />
            <div className={style.profile}>
                <Avatar
                    hasBorder
                    src={props.avatar_user_logged}
                    alt="user avatar"
                />
                <strong>{props.author_user_logged}</strong>
                <span>{props.job_user_logged}</span>
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
