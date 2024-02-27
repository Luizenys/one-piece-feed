import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Luizenys.png',
      name: 'Kozuki Oden',
      role: 'Samurai'
    },
    content: [
      { type: 'paragraph', content: 'Por 5 anos de sua vida, Oden partiu para o mar e se tornou um pirata, servindo como comandante da 2ª divisão dos Piratas do Barba Branca e mais tarde se tornando um membro dos Piratas do Roger. Depois de encontrar o tesouro de Joy Boy em Laugh Tale, Oden viajou para casa e estabeleceu seu objetivo de abrir as fronteiras de Wano ao mundo, finalmente assumindo o lugar de seu pai como Shogun. No entanto, ele encontrou oposição de seu usurpador Kurozumi Orochi e do pirata Kaido, que o executaram 20 anos antes do presente.'},
      { type: 'link', content: 'https://onepiece.fandom.com/pt/wiki/Kozuki_Oden'}
    ],
    publishedAt: new Date('2024-02-26 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Luizenys.png',
      name: 'Kozuki Momonosuke',
      role: 'Samurai'
    },
    content: [
      { type: 'paragraph', content: 'Servindo como comandante da 2ª divisão dos Piratas do Barba Branca e mais tarde se tornando um membro dos Piratas do Roger. Depois de encontrar o tesouro de Joy Boy em Laugh Tale, Oden viajou para casa e estabeleceu seu objetivo de abrir as fronteiras de Wano ao mundo, finalmente assumindo o lugar de seu pai como Shogun. No entanto, ele encontrou oposição de seu usurpador Kurozumi Orochi e do pirata Kaido, que o executaram 20 anos antes do presente.'},
      { type: 'link', content: 'https://onepiece.fandom.com/pt/wiki/Kozuki_Oden'}
    ],
    publishedAt: new Date('2024-02-20 16:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post author={post.author} content={post.content} publishedAt={post.publishedAt} />
            )
          })}
        </main>
      </div>
    </div>
  )
}
