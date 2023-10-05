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
        const btns = await dynamicService.getById()
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


    // return (
    //     <section className="survey-app">
    //         <h2>Survey - {survey.title}</h2>
    //         {
    //             survey.cmps.map((cmp, idx) => <div key={cmp.id} style={style}>
    //                 <DynamicCmp
    //                     type={cmp.type} info={cmp.info} val={answersMap[cmp.id] || ''}
    //                     onChangeVal={(val) => {
    //                         onChangeVal(cmp.id, val)
    //                     }}
    //                 />
    //             </div>)
    //         }
    //         <hr />
    //         <pre>
    //             {JSON.stringify(answersMap, null, 2)}
    //         </pre>
    //     </section >
    // )
}

function TextBox({ info, val = '', onChangeVal }) {
    const { label } = info
    return (
        <label>
            {label}
            <input type="text" value={val} onChange={(ev) => {
                onChangeVal(ev.target.value)
            }} />
        </label>
    )

}

function SelectBox({ info, val = '', onChangeVal }) {
    const { label, opts } = info
    return (
        <label>
            {label}
            <select value={val} onChange={(ev) => {
                onChangeVal(ev.target.value)
            }}>
                <option value="">Select an option</option>
                {
                    opts.map(opt => <option key={opt}>{opt}</option>)
                }
            </select>
        </label>
    )
}

function DynamicCmp(props) {
    switch (props.type) {
        case 'TextBox':
            return <TextBox {...props} />
        case 'SelectBox':
            return <SelectBox {...props} />
    }
}



