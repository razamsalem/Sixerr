import { createPortal } from "react-dom";

export function Modal({ open, onClose, isAside, children }) {
    function handleContentClick(event) {
        event.stopPropagation()
    }

    if (!open) return null
    return createPortal(
        <div onClick={onClose} className="modal-overlay">
            <article onClick={handleContentClick} className={`modal-content ${isAside ? 'side' : ''}`}>
                {children}
            </article>
        </div>,
        document.getElementById('portal')
    )
}