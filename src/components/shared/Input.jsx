/* eslint-disable */

export default function Input({
    type,
    value,
    id,
    className,
    handler,
    defaultChecked,
    name,
    disabled,
    max,
    min,
    hidden
}) {

    return (
        <input
            type={type}
            value={value}
            id={id}
            className={className}
            onChange={handler}
            defaultChecked={defaultChecked}
            name={name}
            disabled={disabled}
            max={max | 255}
            min={min | 0}
            hidden={hidden | false}
        />
    )
}