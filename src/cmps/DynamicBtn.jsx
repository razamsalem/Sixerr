import { useState, useEffect, useRef } from 'react';

import { dynamicService } from "../services/dynamicBtn.service.js"
import DynamicModal from "./DynamicModal.jsx"

export function DynamicBtn() {
    const [btns, setBtns] = useState(null)
    const [isArrowUp, setIsArrowUp] = useState([])
    const [selectedBtn, setSelectedBtn] = useState(null)
    const modalRef = useRef(null)

    useEffect(() => {
        getBtns()

    }, [])

    async function getBtns() {
        const btns = await dynamicService.getBtn()
        try {
            setBtns(btns)
            setIsArrowUp(btns.map(() => false))
        } catch (err) {
            console.log('cannot set dynamic button')
        }
    }


    function onToggleArrow(ev, idx) {
        setIsArrowUp((prevStates) => {
            const newStates = prevStates.map((state, i) => (i === idx ? !state : false))
            return newStates
        })

        const buttonRect = ev.currentTarget.getBoundingClientRect()

        setSelectedBtn({
            ...btns[idx],
            position: {
                top: buttonRect.bottom + window.scrollY,
                left: buttonRect.left + window.scrollX,
                btnWidth: buttonRect.width,
            },
        })
    }

    function closeModal() {
        setSelectedBtn(null)
    }

    if (!btns) return '<div></div>'

    return (
        <section className="filter-btns">
            {btns.map((btn, idx) => (
                <button
                    key={btn.title}
                    onClick={(ev) => onToggleArrow(ev, idx)}
                    className={`filter-btn ${isArrowUp[idx] ? 'arrow-up' : ''}`}
                >
                    {btn.title}{' '}
                    <span className={`icon fa-solid ${isArrowUp[idx] ? 'angle-up' : 'angle-down'}`}></span>
                </button>
            ))}
            <DynamicModal
                // onSetFilter={onSetFilter}
                isOpen={selectedBtn !== null}
                onClose={closeModal}
                btn={selectedBtn}
                content={'some content'}
                position={selectedBtn?.position}
                modalRef={modalRef}
            />
        </section>
    )
}

