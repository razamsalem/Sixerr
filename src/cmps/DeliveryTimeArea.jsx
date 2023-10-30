export function DeliveryTimeArea({ handleChange, filterByToEdit }) {

    const deliveryTimes = [
        { txt: 'Express 24H', id: 'delivery-time1', value: 1 },
        { txt: 'Up to 3 days', id: 'delivery-time2', value: 3 },
        { txt: 'Up to 7 days', id: 'delivery-time3', value: 7 },
        { txt: 'Anytime', id: 'delivery-time4', value: Infinity }
    ]

    console.log(filterByToEdit)

    return (
        <div className="radio-list flex">

            {deliveryTimes.map((time, idx) =>
                <div key={idx} className="radio-item-wrapper flex">
                    <label htmlFor={time.id} className='radio-item flex'>
                        <input className="form-check-input bigger radio delivery" type="radio" name='daysToMake' id={time.id} value={time.value} checked={filterByToEdit.daysToMake == time.value} onChange={handleChange} />
                        <div className="inner-radio">
                            <p>{time.txt}</p>
                        </div>
                    </label>
                </div>
            )}
        </div>
    )
}