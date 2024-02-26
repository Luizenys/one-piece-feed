import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post(props) {

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                <Avatar src="https://github.com/Luizenys.png"></Avatar>
                    <div className={styles.authorInfo}>
                        <strong>Monkey D. Luffy</strong>
                        <span>Pirate King</span>
                    </div>
                </div>

                <time title="10 de Fevereiro às 08:13h" dateTime="2024-02-10 08:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Kaizoku ni ore wa naru</p>
                <p>If You Don't Want the Negative Reputation, You Shouldn't Be a Pirate.</p>
                <p>
                    <a href="">#yonkou</a>{' '}
                    <a href="">#mugiwara</a>{' '}
                    <a href="">#joyboy</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe seu comentário"></textarea>

                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment></Comment>
                <Comment></Comment>
                <Comment></Comment>
            </div>
        </article>
    )
}

