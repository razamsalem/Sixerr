import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { createSearchParams } from 'react-router-dom';
import { setFilterBy } from '../store/actions/gig.actions';
import { useSelector } from 'react-redux';
import { gigService } from '../services/gig.service.local';

function DynamicModal({ btn, isOpen, onClose, content, position, modalRef, filterBy }) {
    const globalFilterBy = useSelector(storeState => storeState.gigModule.filterBy)
    const [filterByToEdit, setFilterByToEdit] = useState(globalFilterBy)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose()
            }
        }

        if (isOpen) { document.addEventListener('mousedown', handleClickOutside) }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen, onClose, modalRef])


    useEffect(() => {
        setFilterByToEdit({ ...globalFilterBy })
    }, [globalFilterBy])

    if (!isOpen) return null

    const style = {
        position: 'absolute',
        top: position.top + 'px',
        left: position.left + 'px',
        width: isOpen ? 'auto' : 0,
        height: isOpen ? 'auto' : 0,
    }


    function handleChange(ev) {
        const field = ev.target.name;
        let value = ev.target.value;

        switch (ev.target.type) {
            case 'number':
            case 'range':
                value = +value || ''
                break;

            case 'checkbox':
                value = ev.target.checked;
                break;
        }
        setFilterByToEdit((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }

    function onSubmit() {
        console.log(filterByToEdit)
        setFilterBy({ ...globalFilterBy, ...filterByToEdit })
    }

    return (
        <div className="dynamic-modal" style={style} ref={modalRef}>
            <div className="content-scroll">
                <div className="more-filter-item">
                    <div className="content-title">
                        {btn.content}
                        {btn.title === 'Seller details' &&
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Nam impedit tempore, molestias doloremque sint?</p>}
                    </div>
                </div>

                {btn.title === 'Budget' &&
                    <section className='flex-container'>
                        <div className="left">
                            <label>MIN.</label>
                            <div className="input-price-filter">
                                <input type="number" name='minPrice' id='gig-price-range-min' className='min' placeholder='Any' min='0' max='50000' onChange={handleChange} value={filterByToEdit.minPrice} />
                                <img src="https://res.cloudinary.com/de2rdmsca/image/upload/v1696460033/dollar-symbol_hxbp91.png" alt="Dollar symbol" />
                            </div>
                        </div>
                        <div className="right">
                            <label>MAX.</label>
                            <div className="input-price-filter">
                                <input type="number" name='maxPrice' id='gig-price-range-max' className='max' placeholder='Any' min='0' max='50000' onChange={handleChange} value={filterByToEdit.maxPrice} />
                                <img src="https://res.cloudinary.com/de2rdmsca/image/upload/v1696460033/dollar-symbol_hxbp91.png" alt="Dollar symbol" />
                            </div>
                        </div>
                    </section>
                }

                {btn.title === 'Delivery time' &&
                    <div className="radio-list flex">
                        <div className="radio-item-wrapper flex">
                            <label htmlFor="deliver-time1" className='radio-item flex'>
                                <input className="form-check-input bigger radio delivery" type="radio" name='deliver-time' id='deliver-time1' />
                                <div className="inner-radio">
                                    <p>Express 24H</p>
                                </div>
                            </label>
                        </div>
                        <div className="radio-item-wrapper flex">
                            <label htmlFor="deliver-time2" className='radio-item flex'>
                                <input className="form-check-input bigger radio delivery" type="radio" name='deliver-time' id='deliver-time2' />
                                <div className="inner-radio">
                                    <p>Up to 3 days</p>
                                </div>
                            </label>
                        </div>
                        <div className="radio-item-wrapper flex">
                            <label htmlFor="deliver-time3" className='radio-item flex'>
                                <input className="form-check-input bigger radio delivery" type="radio" name='deliver-time' id='deliver-time3' />
                                <div className="inner-radio">
                                    <p>Up to 7 days</p>
                                </div>
                            </label>
                        </div>
                        <div className="radio-item-wrapper flex">
                            <label htmlFor="deliver-time4" className='radio-item flex'>
                                <input className="form-check-input bigger radio delivery" type="radio" name="deliver-time" id="deliver-time4" />
                                <p>Anytime</p>
                            </label>
                        </div>
                    </div>
                }

            </div>
            <div className='button-row'>
                <button className='clear-btn' onClick={() => setFilterByToEdit({ minPrice: '', maxPrice: '' })}>Clear All</button>
                <button className='apply-btn' onClick={onSubmit}>Apply</button>
            </div>
        </div>
    )
}

export default DynamicModal