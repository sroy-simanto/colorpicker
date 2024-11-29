/* eslint-disable */
export default function Button ({text, className, handler = f => f}) {
    return (
        <button className={className} onClick={() => handler()}>{text}</button>
    )
}