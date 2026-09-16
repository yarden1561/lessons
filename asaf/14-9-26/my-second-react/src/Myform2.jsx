import {useState} from 'react'
export default function MyForm2(props) {

    const [person, setPerson] = useState({
        name: "",
        password: "",
        lastName: ""
    })

    function handleChange(e) {
      setPerson({
        ...person, [e.target.name]: e.target.value
      })
    }

    function handleSubmit(e) {
      e.preventDefault()
      props.onLogin(person)   // sending the data OUT to App
    }


  return (
    <>
    <form onSubmit={handleSubmit}>
      <h2>My Form</h2>
      <input type="text" name="name" onChange={handleChange} value={person.name ?? ""} placeholder='name' />
      <input type="password" name="password" onChange={handleChange} value={person.password ?? ""} placeholder='password' />
      <input type="text" name="lastName" onChange={handleChange} value={person.lastName ?? ""} placeholder='last name' />
      <p>My name is {person.name} {person.lastName}</p> 
      <p>My password is {person.password.length} characters long</p>
      <button type="submit">Log in</button>
    </form>
    </>
  )
}
