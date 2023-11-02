import { useSelector } from "react-redux"
import { gigService } from "../services/gig.service.local"
import { useEffect, useState } from "react"
const categories = gigService.getCategories()

export function ServiceOptions({ handleChange, filterByToEdit }) {
    const filterBy = useSelector(storeState => storeState.gigModule.filterBy)

    function getTags() {
        let category = categories.filter(cat => cat.category === filterBy.category)
        return category[0].tags
    }

    return (
        <div className="radio-list flex">
            {/* <form>
                {(filterBy.category==="" || filterBy.tags.length===0) && getCategories().map((cat,idx)=>{
                    return <div key={idx}>
                                <input type="radio" name="category" value={cat} onChange={handleChange}/>
                                <span>{cat}</span>
                            </div>})}
                </form> */}

            {filterBy.category !== "" && getTags().map((service, idx) => {
                return <div key={idx} className='seller-filter-container'>
                    <label htmlFor={idx} className='flex radio-item-wrapper'>
                        <input type="checkbox" name="tags" value={service} onChange={handleChange} checked={filterByToEdit.tags.includes(service)} id={idx} className="form-check-input" />
                        {service}
                    </label>
                </div>
            })}


        </div>
    )


}