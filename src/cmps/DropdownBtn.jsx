import React, { useState, useEffect, useRef } from "react";
import { DropdownMenu } from "./DropdownMenu";

export function DropdownBtn({ icon, children = '' }) {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef(null)

    function closeDropdown(event) {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener("click", closeDropdown)

        return () => {
            document.removeEventListener("click", closeDropdown)
        }
    }, [])

    return (
        <a className="drop-down-btn" onClick={() => { setIsOpen(!isOpen) }} ref={buttonRef}>
            {<i className="fa-solid fa-circle-chevron-down"></i>}
            {isOpen && <DropdownMenu items={children} />}
        </a>
    )
}
