export function PrevBtn(props) {
    const { onClick } = props;
    // const { where } = props;
    // console.log(where,ppp);
    return (
        <button className= "gallry-btn-prev" onClick={onClick}>
              <i className="fa-solid fa-chevron-left"></i>
        </button>
    )
}