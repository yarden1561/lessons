export default function UserCard(props) {

    const { name1, age, isConnected } = props;
    return (
        <div>
            <h3>{name1}</h3>
            <p>Age: {age}</p>
            <p>Connected: {isConnected ? "Yes" : "No"}</p>
        </div>
    )
}