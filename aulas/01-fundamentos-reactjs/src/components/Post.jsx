import styles from './Post.module.css'

export function Post(props) {
    return (
        <div>
            <p className={styles.p1}>{props.author}</p>
            <p className={styles.p2}>{props.content}</p>
            <hr />
        </div>
    )
}
