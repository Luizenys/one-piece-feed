import { Post } from "./Post"
import { Header } from "./components/Header"
import './global.css'

export function App() {
  return (
    <div>
      <Header></Header>
      <Post 
        author="Monkey D. Luffy" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate magni neque quisquam dignissimos enim expedita illo consectetur eius? Nesciunt ipsam impedit perspiciatis iusto asperiores odio debitis eaque porro fugit cupiditate" 
      />
    </div>
  )
}
