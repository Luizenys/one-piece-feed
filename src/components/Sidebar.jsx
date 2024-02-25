import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://symbols.vn/wp-content/uploads/2021/12/Hinh-bau-troi-dem-dep-Anime-vang-ve.jpg" alt="Cover Image" width="500px"></img>

            <div className={styles.profile}>
                <img src="https://github.com/Luizenys.png" />
                <strong>Monkey D. Luffy</strong>
                <span>Pirate King</span>
            </div>

            <footer>
                <a href="#"><PencilLine size={18} />Editar seu Perfil</a>
            </footer>
        </aside>
    )
}