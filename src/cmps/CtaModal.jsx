import React from "react"
import { createPortal } from "react-dom"

const CtaModal = ({ isOpen, onClose, children }) => {
    const modalClassName = `cta-modal-container${isOpen ? " open" : ""}`
    const backdropClassName = `modal-backdrop${isOpen ? " open" : ""}`

    return createPortal(
        <div>
            {isOpen && <div className={backdropClassName} onClick={onClose}></div>}
            <div className={modalClassName}>
                {children}
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default CtaModal
