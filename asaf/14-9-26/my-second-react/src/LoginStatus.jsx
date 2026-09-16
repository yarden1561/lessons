export default function LoginStatus(props) {

    const Name = props.name
    const isLoggedIn = props.isLoggedIn

  return (
    <>
    <div>
        {isLoggedIn ? <p>Welcome, {Name}</p> : <p>Please log in</p>}
    </div>
    </>
  )
}