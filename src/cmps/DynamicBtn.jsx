import { useState, useEffect } from 'react'

import { dynamicService } from "../services/dynamicBtn.service.js"
import DynamicModal from "./DynamicModal.jsx"

export function DynamicBtn() {
    // const [survey, setSurvey] = useState(null)
    // const [answersMap, setAnswersMap] = useState({})
    const [btns, setBtns] = useState(null)
    const [isArrowUp, setIsArrowUp] = useState([])
    const [selectedBtn, setSelectedBtn] = useState(null)

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
        const buttonRect = ev.target.getBoundingClientRect()
        if (ev.target.className === "icon fa-solid angle-down") return
        if (ev.target.className === "icon fa-solid angle-up") return
        setSelectedBtn({
            ...btns[idx],
            position: {
                top: buttonRect.bottom + window.scrollY,
                left: ev.target.offsetLeft + window.scrollX,
                btnWidth: buttonRect.width,
            },

        })
        console.log(ev);
        console.log(ev.target.offsetLeft)
        // console.dir()
        // setSelectedBtn({ ...btns[idx], position: { top: ev.target.offsetTop, left: ev.target.offsetWidth, btnWidth: ev.target.clientWidth } })
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
            <DynamicModal isOpen={selectedBtn !== null} onClose={closeModal} content={'some content'} position={selectedBtn?.position} />
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



