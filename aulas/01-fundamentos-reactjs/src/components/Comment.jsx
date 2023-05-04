import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img className={styles.avatar} src="https://github.com/rodrigorgtic.png" alt="user avatar" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rodrigo</strong>
                            <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                                Cerca de 1h atrás
                            </time>
                        </div>
                        <button title="Apagar Comentário">
                            <Trash />
                        </button>
                    </header>
                    <p>Muito bom Fulano, parabéns &#x1F44F;</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Curtir <span> 33</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
