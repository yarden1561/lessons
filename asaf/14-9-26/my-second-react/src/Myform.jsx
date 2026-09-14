import {useState} from 'react'
export default function MyForm(props) {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    function handleChange(e) {
        setName(e.target.value)
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

  return (
    <>
    <div>
      <h2>My Form</h2>
      <input type="text" onChange={handleChange} value={name} placeholder='name' />
      <input type="password" onChange={handlePasswordChange} value={password} placeholder='password' />
      <p>My name is {name}</p>
      <p>My password is {password.length} characters long</p>
    </div>
    </>
  )
}