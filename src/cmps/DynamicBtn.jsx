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
    const [style, setStyle] = useState({})
    const [clicked, isClicked] = useState(false)
    for (const key in globalFilterBy) {
        if (!filterKeys.includes(key)) filterKeys.push(key)
    }

    useEffect(() => {
        getBtns()

    }, [])

    useEffect(() => {
        if (selectedBtn) {
            console.log('scroll ~~~')
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
        setIsArrowUp(prevState => prevState.map(btn => btn = false))
    }

    function onRemoveFilterPill(ev) {
        const filterKey = ev.target.name
        if (filterKey === 'topRated' || filterKey === 'basicLevel' || filterKey === 'premiumLevel') {
            setFilterBy({ [filterKey]: false })
        } else {
            setFilterBy({ [filterKey]: '' })
        }
    }

    function getStyle() {
        setStyle({ border: '1px solid black' })
    }

    function setClicked() {
        isClicked(prev => !prev)
    }
    if (!btns) return ''

    return (
        <section className={`filter-btns-container full main-layout ${isStickyActive ? 'sticky-active' : ''}`}>
            <section className="filter-btns">
                <div className="btns-container">
                    {btns.map((btn, idx) => {
                        return <>
                            {btn.title === 'Options' && !globalFilterBy.category ? <></> :
                                <button
                                    key={btn.title}
                                    onClick={(ev) => onToggleArrow(ev, idx)}
                                    className={`filter-btn ${isArrowUp[idx] ? 'arrow-up' : ''}  ${clicked ? `border-${idx}` : ''}`}
                                >
                                    {btn.title}{' '}
                                    <span className={`icon fa-solid ${isArrowUp[idx] ? 'angle-up' : 'angle-down'}`}></span>
                                </button>}
                        </>
                    }
                    )}
                </div>

                <DynamicModal
                    setFilterBy={setFilterBy}
                    globalFilterBy={globalFilterBy}
                    isOpen={selectedBtn !== null}
                    onClose={closeModal}
                    btn={selectedBtn}
                    content={'some content'}
                    position={selectedBtn?.position}
                    modalRef={modalRef}
                    setClicked={setClicked}
                />

                <section className='pills-container'>
                    {filterKeys.map(key => <FilterPill key={key} filterKey={key} filterValue={globalFilterBy[key]} onRemoveFilterPill={onRemoveFilterPill} />)}
                </section>
            </section>
        </section>
    )
}

