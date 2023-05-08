import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'

export function Post({ author, content, publishedAt }) {
    // (props) essa props vem do app.jsx
    // vamos desestruturar o retorno de props e incluir apenas o que queremos buscar

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm 'hs'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
    // id: uuid
    // author: {avatarUrl:"", name: "", job: ""}
    // publishedAt: Date
    // content: String
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        hasBorder
                        src={author.avatarUrl}
                        alt="user avatar"
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.job}</span>
                    </div>
                </div>
                <time
                    title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {/* <p>Fala galera 👋</p>
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
                </p> */}
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>
                    }
                    if (line.type === 'link') {
                        return (
                            <p>
                                <a href="#">{line.content}</a>
                            </p>
                        )
                    } else if (line.type === 'tag') {
                        return (
                            <span>
                                <a href="#">{line.content}</a>
                            </span>
                        )
                    }
                })}
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
