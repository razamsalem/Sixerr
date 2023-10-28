export function FilterPill({ filterKey, filterValue, onRemoveFilterPill }) {


    return filterValue && <span className="filter-pill">
        {filterKey === 'minPrice' && `Over $${filterValue} `}
        {filterKey === 'maxPrice' && `Under $${filterValue} `}
        {filterKey === 'txt' && `Keywords include "${filterValue}" `}
        {filterKey === 'page' && `Page ${filterValue} `}
        {filterKey === 'category' && `${filterValue} `}
        {filterKey === 'tags' && `Category tags "${filterValue}" `}
        <a name={filterKey} onClick={onRemoveFilterPill} className="close fa-solid fa-xmark">
        </a>
    </span>
}