export function PrevBtn(props) {
    const { onClick, prevBtnRef } = props;
    // const { where } = props;
    // console.log(where,ppp);
    return (
        <button ref={prevBtnRef} className="gallry-btn-prev" onClick={onClick}>
            <i className="fa-solid fa-chevron-left"></i>
        </button>
    )
}