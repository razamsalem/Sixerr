export function Modal({ open, onClose, children }) {
    const handleContentClick = (event) => {
        event.stopPropagation();
    }

    if (!open) return null
    return (
        <div onClick={onClose} className="modal-overlay">
            <article onClick={handleContentClick} className="modal-content">
                {children}
                {/* <button onClick={onClose}>Close</button> */}
            </article>
        </div>
    )
}