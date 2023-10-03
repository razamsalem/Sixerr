import { surveyService } from "../services/survey.service.js"

import { useState, useEffect } from 'react'
export function SurveyIndex() {
    const [survey, setSurvey] = useState(null)
    const [answersMap, setAnswersMap] = useState({})

    useEffect(() => {
        surveyService.getById()
            .then(survey => {
                setSurvey(survey)
            })
    }, [])



    function onChangeVal(id, val) {

        const answersToSave = { ...answersMap }
        answersToSave[id] = val
        setAnswersMap(answersToSave)
    }


    if (!survey) return '<div></div>'

    const style = {
        backgroundColor: 'lightcoral',
        padding: '5px', margin: '5px'
    }
    return (
        <section className="survey-app">
            <h2>Survey - {survey.title}</h2>
            {
                survey.cmps.map((cmp, idx) => <div key={cmp.id} style={style}>
                    <DynamicCmp
                        type={cmp.type} info={cmp.info} val={answersMap[cmp.id] || ''}
                        onChangeVal={(val) => {
                            onChangeVal(cmp.id, val)
                        }}
                    />
                </div>)
            }
            <hr />
            <pre>
                {JSON.stringify(answersMap, null, 2)}
            </pre>
        </section >
    )
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



