export function OrderModal({ handleBackgroundClick }) {

    return (
        <section className="modal-background" onClick={handleBackgroundClick}>
            <div>
                {(
                    <div className="order-modal">
                        <h1>Sup</h1>
                    </div>
                )}
            </div>
        </section>
    )
}
