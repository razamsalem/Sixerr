import { DropdownMenu } from "./DropdownMenu"
import { useState } from "react"

export function DropdownBtn({ icon, children = '' }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <a className="drop-down-btn" onClick={() => { setIsOpen(!isOpen) }}>
            {<i className="fa-solid fa-circle-chevron-down"></i>}
            {isOpen && <DropdownMenu items={children} />}
        </a>
    )
}