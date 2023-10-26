export function PrevBtn(props) {
    const { onClick, prevBtnRef } = props;
    return (
        <button ref={prevBtnRef} className="gallery-btn prev" onClick={onClick}>
            <i className="fa-solid fa-chevron-left"></i>
        </button>
    )
}