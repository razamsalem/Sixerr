export function FilterPill({ filterKey, filterValue, onRemoveFilterPill }) {
    let pillValue

    switch (filterKey) {
        case 'minPrice':
            pillValue = `Over $${filterValue} `
            break
        case 'maxPrice':
            pillValue = `Under $${filterValue} `
            break
        case 'txt':
            pillValue = `Keywords include "${filterValue}" `
            break
        case 'category':
            pillValue = `${filterValue} `
        case 'tags':
            pillValue = `Category tags "${filterValue}" `
            break
        case 'daysToMake':
            pillValue = `Delivery in ${filterValue} day(s)`
        default:
            null
            break;
    }

    return pillValue && filterValue && <span className="filter-pill">
        {pillValue}
        <a name={filterKey} onClick={onRemoveFilterPill} className="close fa-solid fa-xmark">
        </a>
    </span>
}