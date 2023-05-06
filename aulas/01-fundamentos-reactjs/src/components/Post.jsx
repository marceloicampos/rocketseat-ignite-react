import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(props) {
    // essa props vem do app.jsx
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        hasBorder
                        src={props.avatar_user}
                        alt="user avatar"
                    />
                    <div className={styles.authorInfo}>
                        <strong>{props.author_user}</strong>
                        <span>{props.job_user}</span>
                    </div>
                </div>
                <time
                    title="11 de Maio às 08:13h"
                    dateTime="2022-05-11 08:13:30"
                >
                    Publicado há 1 h
                </time>
            </header>
            <div className={styles.content}>
                <p>Fala galera 👋</p>
                <p>
                    Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da RocketSeat. O nome do projeto é DoctorCare🚀
                </p>
                <p>
                    👉&nbsp;<a href="#">jane.design/doctorcare</a>
                </p>
                <p>
                    <a href="#">#novoprojeto</a> {''}
                    <a href="#">#nlw</a> {''}
                    <a href="#">#rocketseat</a>
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixei seu Feedback</strong>
                <textarea placeholder="Deixe um comentário" />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment
                    author_comment={'Rodrigo Gonçalves'}
                    post_comment={'Muito bom, parabéns 👋'}
                    likes_comment={'34'}
                    avatar_comment={'https://github.com/rodrigorgtic.png'}
                />
            </div>
        </article>
    )
}
