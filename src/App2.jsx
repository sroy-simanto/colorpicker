import { useEffect } from "react";
import { useState } from "react"

export default function App () {
    const [val, set] = useState("")
    const [phrase, setPhrase] = useState("example phrase")

    const createPhrase = () => {
        setPhrase(val)
        set("")
    }

    useEffect(() => {
        console.log(`typing ${val}`)
    }, [val])

    useEffect(() => {
        console.log(`saved phrase: ${phrase}`)
    }, [phrase])

    useEffect(() => {
        console.log("Only once after initial render")
    }, [])

    return (
        <>
            <label htmlFor="phrase"> Favorite Phrase: </label>
            <input 
                value={val}
                placeholder={phrase}
                onChange={e => set(e.target.value)}
            />
            <button onClick={createPhrase}>send</button>
        </>
    )
}