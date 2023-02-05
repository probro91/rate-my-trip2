import AddPost from "../components/AddPost"
import { useState } from "react"

const Posting = () => {
  const [posts, setPosts] = useState([])

  const addPost = (post) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newPost = { id, ...post }
    setPosts([...posts, newPost])
  }
  return (
    <div>
      <h1>Posting</h1>
      <AddPost onAdd={addPost}/>
    </div>
  )
}

export default Posting