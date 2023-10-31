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
        // case 'category':
        //     pillValue = `${filterValue} `
        //     break
        case 'tags':
            if(filterValue && filterValue.length>0){
                pillValue = `Category tag "${filterValue}" `
            }
            break
        case 'daysToMake':
            if (filterValue < 2) pillValue = `24H Express delivery`
            else if (filterValue === 'Infinity') pillValue = null
            else pillValue = `Delivery in ${filterValue} days`
            break
        case 'topRated':
            pillValue = 'Top rated sellers'
            break
        case 'basicLevel':
            pillValue = 'Basic leveled users'
            break
        case 'premiumLevel':
            pillValue = 'Premium leveled users'
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