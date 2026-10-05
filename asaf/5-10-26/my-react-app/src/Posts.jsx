import { useState } from 'react'
import './App.css'

export default function Posts() {
  const [posts, setPosts] = useState([])

  async function getPosts() {
    
    let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await posts.json()
    setPosts(data)
  }

  return (
    <>
    <button onClick={getPosts}>Get Posts</button>

  <h1>Posts List</h1>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
    </>
  )
}