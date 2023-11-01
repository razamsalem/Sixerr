export function ServicesCounter({ gigs }) {

    return (
        <div className="number-of-results">
            {`${gigs.length} services available`}
        </div>
    )
}