/* eslint-disable */

export default function Label ({
    className,
    htmlFor,
    text
}) {
    return (
        <label className={className} htmlFor={htmlFor}>{text}</label>
    )
}