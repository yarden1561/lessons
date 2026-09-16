export default function WarningBanner(props) {

    const showWarning = props.showWarning

  return (
    <>
    <div>
        {showWarning && <p style={{ color: 'yellow' }}>Warning: This is a warning message.</p>}
    </div>
    </>
  )
}