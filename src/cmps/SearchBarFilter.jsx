import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterBy } from "../store/actions/gig.actions";
import { useNavigate } from "react-router";

export function SearchBarFilter() {
    const globalFilterBy = useSelector(storeState => storeState.gigModule.filterBy)
    const [filterByToEdit, onSetFilterToBuild] = useState({})
    const navigate = useNavigate()

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

        onSetFilterToBuild(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    return (
        <form onSubmit={(ev) => {
            ev.preventDefault()
            setFilterBy({ ...globalFilterBy, ...filterByToEdit })
            navigate('/gig')
        }}>
            <input name="txt" type="text" className="search-bar" placeholder='What service are you looking for today?' onChange={handleChange} />
        </form>
    )
}