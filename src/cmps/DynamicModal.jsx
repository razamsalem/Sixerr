import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { createSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { gigService } from '../services/gig.service';
import { DeliveryTimeArea } from './DeliveryTimeArea';
import { ServiceOptions } from './ServiceOptions';

function DynamicModal({ btn, isOpen, onClose, content, position, modalRef, globalFilterBy, setFilterBy, setClicked }) {
    const [filterByToEdit, setFilterByToEdit] = useState(globalFilterBy)
    const sellerOptions = [{ txt: 'Top Rated Seller', name: 'topRated', value: true }, { txt: 'Level 1', name: 'basicLevel', value: 1 }, { txt: 'Level 2', name: 'premiumLevel', value: 2 }]

    // const [style]

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
        position: 'fixed',
        top: position.bottom + 10 + 'px',
        left: position.left + 'px',
        width: isOpen ? 'auto' : 0,
        height: isOpen ? 'auto' : 0,
    }


    function handleChange(ev) {
        const field = ev.target.name
        let value = ev.target.value

        console.log(field, value)

        switch (field) {
            case 'daysToMake':
            case 'maxPrice':
            case 'minPrice':
                value = +value
        }

        switch (ev.target.type) {
            case 'number':
            case 'range':
                value = +value || ''
                break;

            case 'checkbox':
                value = ev.target.checked
                break
        }
        if (field === 'tags') {
            setFilterByToEdit((prevFilter) => {
                console.log(prevFilter, "ppp");
                const updatedTags = ev.target.checked
                    ? [...prevFilter[field], ev.target.value]
                    : prevFilter[field].filter((tag) => tag !== ev.target.value);
                return { ...prevFilter, [field]: updatedTags };
            })
        }
        else {
            setFilterByToEdit((prevFilter) => {
                return { ...prevFilter, [field]: value }
            })
        }


    }

    function onSubmit() {
        setFilterBy({ ...globalFilterBy, ...filterByToEdit })

    }

    return (
        <div className="dynamic-modal" style={style} ref={modalRef}>
            <div className="content-scroll">
                <div className="more-filter-item">
                    <div className="content-title">
                        {btn.content}
                        {btn.title === 'Seller details' &&
                            <section className='seller-filter-container'>
                                {sellerOptions.map(option => {
                                    return <label key={option.txt} className='flex radio-item-wrapper'>
                                        <input className='form-check-input' type="checkbox" name={option.name} value={option.value} checked={filterByToEdit[option.name]} onChange={handleChange} />
                                        {option.txt}
                                    </label>
                                })}
                            </section>
                        }
                    </div>
                </div>

                {btn.title === 'Budget' &&
                    <form className='flex-container'>
                        <div className="left">
                            <label>MIN.</label>
                            <div className="input-price-filter">
                                <input type="number" name='minPrice' id='gig-price-range-min' className='min' placeholder='Any' min='0' max='999' onChange={handleChange} value={filterByToEdit.minPrice} />
                                <img src="https://res.cloudinary.com/de2rdmsca/image/upload/v1696460033/dollar-symbol_hxbp91.png" alt="Dollar symbol" />
                            </div>
                        </div>
                        <div className="right">
                            <label>MAX.</label>
                            <div className="input-price-filter">
                                <input type="number" name='maxPrice' id='gig-price-range-max' className='max' placeholder='Any' min='0' max='999' onChange={handleChange} value={filterByToEdit.maxPrice} />
                                <img src="https://res.cloudinary.com/de2rdmsca/image/upload/v1696460033/dollar-symbol_hxbp91.png" alt="Dollar symbol" />
                            </div>
                        </div>
                    </form>
                }

                {btn.title === 'Delivery time' &&
                    <DeliveryTimeArea handleChange={handleChange} filterByToEdit={filterByToEdit} />
                }

                {btn.title === 'Service options' && <ServiceOptions handleChange={handleChange} filterByToEdit={filterByToEdit} />}

            </div>
            <div className='button-row'>
                <button className='clear-btn' onClick={() => {
                    setFilterByToEdit({ minPrice: '', maxPrice: '', daysToMake: '' })
                    setClicked()
                }}>Clear All</button>
                <button className='apply-btn' onClick={() => {
                    onSubmit()
                    setClicked()
                    onClose()
                }}>Apply</button>
            </div>
        </div>
    )
}

export default DynamicModal