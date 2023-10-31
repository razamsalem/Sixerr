import { useState, useEffect, useRef } from 'react'
import { setFilterBy } from '../store/actions/gig.actions'
import { dynamicService } from "../services/dynamicBtn.service.js"
import DynamicModal from "./DynamicModal.jsx"
import { useSelector } from 'react-redux'
import { FilterPill } from './FilterPill'

export function DynamicBtn() {
    const globalFilterBy = useSelector(storeState => storeState.gigModule.filterBy)
    const isStickyActive = useSelector(storeState => storeState.systemModule.stickyFilter)
    let filterKeys = []
    const [btns, setBtns] = useState(null)
    const [isArrowUp, setIsArrowUp] = useState([])
    const [selectedBtn, setSelectedBtn] = useState(null)
    const modalRef = useRef(null)

    for (const key in globalFilterBy) {
        if (!filterKeys.includes(key)) filterKeys.push(key)
    }

    useEffect(() => {
        getBtns()

    }, [])

    useEffect(() => {
        if (selectedBtn) {
            const newPosition = selectedBtn.target.getBoundingClientRect()
            setSelectedBtn(selectedBtn => ({ ...selectedBtn, position: newPosition }))
        }

    }, [isStickyActive])

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
                top: buttonRect.top,
                bottom: buttonRect.bottom,
                left: buttonRect.left,
                btnWidth: buttonRect.width,
            },
            target: ev.currentTarget
        })
    }

    function closeModal() {
        setSelectedBtn(null)
    }

    function onRemoveFilterPill(ev) {
        const filterKey = ev.target.name
        setFilterBy({ [filterKey]: '' })
    }

    if (!btns) return '<div></div>'

    return (
        <section className={`filter-btns-container full main-layout ${isStickyActive ? 'sticky-active' : ''}`}>
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
                    setFilterBy={setFilterBy}
                    globalFilterBy={globalFilterBy}
                    isOpen={selectedBtn !== null}
                    onClose={closeModal}
                    btn={selectedBtn}
                    content={'some content'}
                    position={selectedBtn?.position}
                    modalRef={modalRef}
                />

                <section className='pills-container'>
                    {filterKeys.map(key => <FilterPill key={key} filterKey={key} filterValue={globalFilterBy[key]} onRemoveFilterPill={onRemoveFilterPill} />)}
                </section>
            </section>
        </section>
    )
}

