export default function NotificationBadge(props) {

    const count = props.count

    const badgeStyle = {
        display: 'inline-block',
        width: '24px',
        height: '24px',
        lineHeight: '24px',
        borderRadius: '50%',
        backgroundColor: 'red',
        color: 'white',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: 'bold'
    }

  return (
    <>
    <div >
        {count > 0 && <span style={badgeStyle}>{count}</span>}
    </div>
    </>
  )
}
