import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Counter from './Counter'
import UserCard from './UserCard'
import './App.css'
import MyForm from './Myform'

function App() {

  //phase 1 declare vars & constants
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

  //phase 3 return jsx
  return (
    <>
    <h1>Hello World</h1>
    <MyForm/>
    <MyForm/>
    </>
  )
}
export default App
