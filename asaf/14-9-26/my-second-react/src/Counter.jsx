import {useState} from 'react'
export default function Counter(props) {
    // let count = 0
    const [count, setCount] = useState(props.start || 0)

    function increment() {
        setCount(count + 1)
    }

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
    </>
  )
}