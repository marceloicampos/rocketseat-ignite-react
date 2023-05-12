import { Avatar } from './Avatar'
import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'

export function Comment({ avatar_comment, author_comment, post_comment, likes_comment, onDeleteComment }) {
    // essa props vem do Post.jsx

    function handleDeleteComment() {
        onDeleteComment(post_comment)
    }

    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src={avatar_comment}
                alt="user avatar"
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{author_comment}</strong>
                            <time
                                title="11 de Maio às 08:13h"
                                dateTime="2022-05-11 08:13:30"
                            >
                                há 1h atrás
                            </time>
                        </div>
                        <button
                            onClick={handleDeleteComment}
                            title="Apagar Comentário"
                        >
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{post_comment}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Curtir<span>{likes_comment}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
