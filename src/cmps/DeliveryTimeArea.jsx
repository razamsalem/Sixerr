export function DeliveryTimeArea() {

    const deliveryTimes = [
        { txt: 'Express 24H', id: 'delivery-time1' },
        { txt: 'Up to 3 days', id: 'delivery-time2' },
        { txt: 'Up to 7 days', id: 'delivery-time3' },
        { txt: 'Anytime', id: 'delivery-time4' }
    ]

    return (
        <div className="radio-list flex">

            {deliveryTimes.map((times, idx) =>
                <div className="radio-item-wrapper flex">
                    <label key={idx} htmlFor={times.id} className='radio-item flex'>
                        <input className="form-check-input bigger radio delivery" type="radio" name='deliver-time' id={times.id} />
                        <div className="inner-radio">
                            <p>{times.txt}</p>
                        </div>
                    </label>
                </div>
            )}
        </div>
    )
}