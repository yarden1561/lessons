import { useState } from 'react'
import './App.css'

export default function User() {
  const [users, setUsers] = useState([])

  async function getUsers() {
    let users = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await users.json()
    setUsers(data)
  }

  return (
    <>
    <button onClick={getUsers}>Get Users</button>

  <h1>Users List</h1>
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
    </>
  )
}