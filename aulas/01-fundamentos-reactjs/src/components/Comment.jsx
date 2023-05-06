import { Avatar } from './Avatar'
import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'

export function Comment(props) {
    // essa props vem do Post.jsx
    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src={props.avatar_comment}
                alt="user avatar"
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{props.author_comment}</strong>{' '}
                            <time
                                title="11 de Maio às 08:13h"
                                dateTime="2022-05-11 08:13:30"
                            >
                                há 1h atrás
                            </time>
                        </div>
                        <button title="Apagar Comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{props.post_comment}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Curtir<span>{props.likes_comment}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
