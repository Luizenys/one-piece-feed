import styles from './Comment.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/Luizenys.png" alt=""></img>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Monkey D. Luffy</strong>
                            <time title="10 de Fevereiro às 08:13h" dateTime="2024-02-10 08:13:30">Cerca de 1h atrás</time>
                        </div>

                    </header>
                    <p>Parabéns !!</p>
                </div>

                <button title="Deletar comentário">
                    <Trash size={20}></Trash>
                </button>

                <footer>
                    <button>
                        <ThumbsUp></ThumbsUp>
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}