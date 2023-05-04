import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'

export function Comment(props) {
    return (
        <div className={styles.comment}>
            <img className={styles.avatar} src={props.imagem} alt="user avatar" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{props.autor}</strong>{' '}
                            <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                                há 1h atrás
                            </time>
                        </div>
                        <button title="Apagar Comentário">
                            <Trash />
                        </button>
                    </header>
                    <p>{props.comment}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Curtir <span> {props.likes}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
