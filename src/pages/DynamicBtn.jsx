import { surveyService } from "../services/dynamicBtn.service.js"

import { useState, useEffect } from 'react'
export function DynamicBtn() {
    // const [survey, setSurvey] = useState(null)
    // const [answersMap, setAnswersMap] = useState({})
    const [btns, setBtns] = useState(null)
    const [isArrowUp, setIsArrowUp] = useState([])

    useEffect(() => {
        getBtns()
    }, [])

    async function getBtns() {
        const btns = await surveyService.getById()
        try {
            setBtns(btns)
            setIsArrowUp(btns.map(() => false))
        } catch (err) {
            console.log('cannot set dynamic button')
        }
    }

    function onToggleArrow(idx) {
        setIsArrowUp((prevStates) => {
            const newStates = prevStates.map((state, i) => (i === idx ? !state : false))
            console.log(newStates)
            return newStates
        })
    }

    if (!btns) return '<div></div>'

    return (
        <section className="filter-btns">
            {btns.map((btn, index) => (
                <button key={btn.title} onClick={() => onToggleArrow(index)} className="filter-btn">
                    {btn.title}{' '}
                    <span className={`icon fa-solid ${isArrowUp[index] ? 'angle-up' : 'angle-down'}`}></span>
                </button>
            ))}
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



