import React from "react"

const CtaModal = ({ isOpen, onClose, children }) => {
    const modalClassName = `cta-modal-container${isOpen ? " open" : ""}`
    const backdropClassName = `modal-backdrop${isOpen ? " open" : ""}`

    return (
        <div>
            {isOpen && <div className={backdropClassName} onClick={onClose}></div>}
            <div className={modalClassName}>
                {children}
            </div>
        </div>
    )
}

export default CtaModal
