import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilterBy } from "../store/actions/gig.actions";
import { useNavigate } from "react-router";


export function SearchBarFilter() {
    const [filterByToBuild, onSetFilterToBuild] = useState({})
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
            setFilterBy(filterByToBuild)
            navigate('/gig')
        }}>
            <input name="txt" type="text" className="search-bar" placeholder='What service are you looking for today?' onChange={handleChange} />
        </form>
    )
}