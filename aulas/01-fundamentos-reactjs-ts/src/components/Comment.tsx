import { Avatar } from './Avatar'
import { ThumbsUp, Trash } from '@phosphor-icons/react'
import { useState } from 'react'
import styles from './Comment.module.css'

interface CommentProps {
    avatar_comment: string,
    author_comment: string,
    post_comment: string,
    onDeleteComment: (comment: string) => void
}

export function Comment({ avatar_comment, author_comment, post_comment, onDeleteComment }: CommentProps) {
    // essa props vem do Post.jsx

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(post_comment)
    }

    function handleLikeComment() {
        setLikeCount(state => {
            return state + 1
        })
        // acima temos o uso de closures onde o estado anterior é " guardado "
        // para uso no próximo estado
        // setLikeCount(likeCount + 1)
        // console.log(likeCount);
    }

    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src={avatar_comment}
                alt="Commenter User Avatar"
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
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Curtidas<span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
