import React from 'react'

function DynamicModal({ isOpen, onClose, content, position }) {
    if (!isOpen) return null

    const style = {
        position: 'absolute',
        top: position.top + 'px',
        left: position.left + 'px',
        transform: 'translate(-50%, 0)',
    }

    return (
        <div className="dynamic-modal" style={style}>
            <div className="content-scroll">
                <div className="more-filter-item">
                    <div className="content-title">
                        Seller level
                    </div>
                </div>
                <span className="close" onClick={onClose}>&times;</span>
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