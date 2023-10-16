import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setFilterBy } from "../store/actions/gig.actions"
import { useNavigate } from "react-router"

export function SearchBarFilter() {
    const globalFilterBy = useSelector(storeState => storeState.gigModule.filterBy)
    const [filterByToEdit, setFilterByToEdit] = useState(globalFilterBy)
    const navigate = useNavigate()

    useEffect(() => {
        setFilterByToEdit({ ...globalFilterBy })
    }, [globalFilterBy])

    function handleChange({ target }) {
        let field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value || ''
                break;

            case 'checkbox':
                value = target.checked
                break

            default:
                break;
        }

        setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    return (
        <form className="search-bar-filter-form" onSubmit={(ev) => {
            ev.preventDefault()
            setFilterBy({ ...globalFilterBy, ...filterByToEdit })
            navigate(`/gig`)
        }}>
            <input name="txt" type="text" className="search-bar" placeholder='What service are you looking for today?' value={filterByToEdit.txt} onChange={handleChange} />
            <button className='btn fa-solid search-icon size=lg'></button>
        </form>
    )
}