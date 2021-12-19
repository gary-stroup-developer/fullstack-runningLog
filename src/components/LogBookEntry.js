export const LogBookEntry = () => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{distance}</p>
            <p>{time}</p>
            <textarea>{notes}</textarea>
        </div>
    )
}