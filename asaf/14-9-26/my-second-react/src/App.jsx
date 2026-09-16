import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Counter from './Counter'
import UserCard from './UserCard'
import './App.css'
import MyForm2 from './Myform2'
import MyForm from './Myform'
import LoginStatus from './LoginStatus'
import WarningBanner from './WarningBanner'
import NotificationBadge from './NotificationBadge'

const password = "1234"

function App() {

  //phase 1 declare vars & constants
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [showWarning, setShowWarning] = useState(false)

  let firstName = "Asaf"
  let arr = [1, 2, 3, 4, 5]

  let asaf = {
    name1: "Asaf",
    age: 30,
    isConnected: true
  }

  let yarden = {
    name1: "Yarden",
    age: 19,
    isConnected: false
  }


  let newArr = arr.map((item) => {
    return <p>Item: {item}</p>
  })

  //phase 2  functions
  function sayHello() {
    console.log("Hello")
    alert("Hello")
  }

  // MyForm2 calls this on submit and passes its person object up
  function handleLogin(person) {
    if (person.password === password) {
      setLoggedInUser(person.name)
    } else {
      alert("Wrong password")
    }
  }

  //phase 3 return jsx
  return (
    <>
    <h1>Hello World</h1>
    <MyForm2 onLogin={handleLogin} />
    <LoginStatus name={loggedInUser} isLoggedIn={loggedInUser !== null} />
    <WarningBanner showWarning={showWarning} />
    <button onClick={() => setShowWarning(!showWarning)}> toggle warning</button>
    <NotificationBadge count={loggedInUser !== null ? 1 : 0} />
    </>
  )
}
export default App
