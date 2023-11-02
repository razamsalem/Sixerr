import React, { useState, useEffect, useRef } from "react";
import { DropdownMenu } from "./DropdownMenu";


export function DropdownBtn({ icon = '', children = '', selectedBtn, setSelectedBtn }) {
    const buttonRef = useRef('')

    function closeDropdown(event) {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
            setSelectedBtn(null)
        }
    }

    function toggleSelectBtn() {
        if (selectedBtn === buttonRef.current) setSelectedBtn(null)
        else setSelectedBtn(buttonRef.current)
    }

    useEffect(() => {
        document.addEventListener("click", closeDropdown)

        return () => {
            document.removeEventListener("click", closeDropdown)
        }
    }, [])

    return (
        <span className="drop-down-btn" onClick={toggleSelectBtn} ref={buttonRef}>
            {!icon ?
                <i className={`${selectedBtn === buttonRef.current && 'open'} fa-solid fa-circle-chevron-down`}></i> : icon
            }
            {selectedBtn === buttonRef.current && <DropdownMenu items={children} isOpen={selectedBtn === buttonRef.current} />}
        </span>
    )
} 