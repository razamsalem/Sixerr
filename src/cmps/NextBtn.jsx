export function NextBtn(props) {
    const { onClick } = props;
    return (
        <button className="gallery-btn next" onClick={onClick}>
            <i className="fa-solid fa-chevron-right"></i>
        </button>
    )
}