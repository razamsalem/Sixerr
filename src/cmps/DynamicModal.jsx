import React, { useEffect } from 'react'

function DynamicModal({ isOpen, onClose, content, position, modalRef }) {

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
    }

    return (
        <div className="dynamic-modal" style={style} ref={modalRef}>
            <div className="content-scroll">
                <div className="more-filter-item">
                    <div className="content-title">
                        Seller level
                    </div>
                </div>
                {content}
            </div>
            <div className='button-row'>
                <button className='clear-btn'>Clear All</button>
                <button className='apply-btn'>Apply</button>
            </div>
        </div>
    )
}

export default DynamicModal