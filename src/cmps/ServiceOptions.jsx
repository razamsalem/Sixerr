import { useSelector } from "react-redux"
import { gigService } from "../services/gig.service.local"
import { useEffect, useState } from "react"


export function ServiceOptions({ handleChange, filterByToEdit }) {
    const filterBy = useSelector(storeState => storeState.gigModule.filterBy)

    function getTags() {
        // console.log(filterBy);
        let category =  gigService.categories.filter(cat=>cat.category===filterBy.category)
        // console.log(category,"pp");
        // console.log(category[0].tags);
        return category[0].tags
    }

    function getCategories() {
       return  gigService.categories.map(cat=>cat.category)
    }

    
        return (
            <div className="radio-list flex">
                {/* <label className='radio-item flex'>
                        <input className="form-check-input bigger radio delivery" type="radio" name='serviceOption' onChange={handleChange} />
                        <div className="inner-radio">
                            <p>{time.txt}</p>
                        </div>
                </label> */}
                {filterBy.tags && filterBy.tags.length>0 && getTags().map((service,idx)=>{
                    return <div key={idx}>
                                <input type="radio" />
                                <p>{service}</p>
                            </div>
                })}
                {filterBy.tags.length===0 && getCategories().map((cat,idx)=>{
                    return <div key={idx}>
                                <input type="radio" />
                                <p>{cat}</p>
                            </div>})}
        </div>
        )
    
   
}