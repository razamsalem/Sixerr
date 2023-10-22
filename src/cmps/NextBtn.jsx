export function NextBtn(props) {
    const { onClick } = props;
    return (
        <button className="gallry-btn-next" onClick={onClick}>
            <i className="fa-solid fa-chevron-right"></i>
        </button>
    )
}