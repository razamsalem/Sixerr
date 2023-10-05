import React, { useEffect, useState } from 'react'

function DynamicModal({ btn, isOpen, onClose, content, position, modalRef,filterBy,onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState({...filterBy})
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen, onClose, modalRef])


    if (!isOpen) return null

    const style = {
        position: 'absolute',
        top: position.top + 'px',
        left: position.left + 'px',
        width: isOpen ? 'auto' : 0,
        height: isOpen ? 'auto' : 0,
    }

    function handleChange(ev){
        const field = ev.target.name;
        let value = ev.target.value;
        console.log(field, "field");
       
        switch (ev.target.type) {
          case 'number':
          case 'range':
            value = +value || '';
            break;
    
          case 'checkbox':
            value = ev.target.checked;
            break;
        }
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    function onSubmit() {
        // console.log(filterByToEdit);
        onSetFilter(filterByToEdit)
    }
    // if(filterBy) const {minPrice,maxPrice} = filterBy;
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
                                <input type="number" name='minPrice' id='gig-price-range-min' className='min' placeholder='Any' min='0' max='50000' onChange={handleChange} value={filterByToEdit.minPrice}/>
                                <img src="https://res.cloudinary.com/de2rdmsca/image/upload/v1696460033/dollar-symbol_hxbp91.png" alt="Dollar symbol" />
                            </div>
                        </div>
                        <div className="right">
                            <label>MAX.</label>
                            <div className="input-price-filter">
                                <input type="number" name='maxPrice' id='gig-price-range-max' className='max' placeholder='Any' min='0' max='50000' onChange={handleChange} value={filterByToEdit.maxPrice}/>
                                <img src="https://res.cloudinary.com/de2rdmsca/image/upload/v1696460033/dollar-symbol_hxbp91.png" alt="Dollar symbol" />
                            </div>
                        </div>
                    </section>
                }


            </div>
            <div className='button-row'>
                <button className='clear-btn' onClick={()=>setFilterByToEdit({minPrice:'',maxPrice:''})}>Clear All</button>
                <button className='apply-btn' onClick={onSubmit}>Apply</button>
            </div>
        </div>
    )
}

export default DynamicModal