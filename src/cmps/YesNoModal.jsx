export function YesNoModal({ txt, onYesClick, onNoClick, handleBackgroundClick }) {

    const handleYesClick = () => {
        onYesClick()
    }

    const handleNoClick = () => {
        onNoClick()
    }

    return (
        <section className="modal-background" onClick={handleBackgroundClick}>
            <div>
                {(
                    <div className="yes-no-modal">
                        <p>{txt}</p>
                        <button className="yes" onClick={handleYesClick}>Yes</button>
                        <button className="no" onClick={handleNoClick}>No</button>
                    </div>
                )}
            </div>
        </section>
    )
}
