
import { useEffect } from "react"
import "./Yearbook.scss"

export default function Yearbook() {
    useEffect (() => {document.title = "The BOX | Yearbook"}, [])
    return(
        <div className="yearbook">This is Yearbook!</div>
    )
}