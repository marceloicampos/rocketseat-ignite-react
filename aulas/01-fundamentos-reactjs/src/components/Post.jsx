import styles from './Post.module.css'

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src={props.avatar} alt="user avatar" />
                    <div className={styles.authorInfo}>
                        <strong>{props.author}</strong>
                        <span>{props.job}</span>
                    </div>
                </div>
                <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
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
        </article>
    )
}
