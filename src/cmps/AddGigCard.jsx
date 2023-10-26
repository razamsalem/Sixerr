export function AddGigCard({ txt }) {

    return (
        <div className="add-gig-card">
            <div className="btn-container flex column">
                <i className="fa-solid fa-circle-plus icon"></i>
                <h3 className="txt">{txt}</h3>
            </div>
        </div>
    )
}