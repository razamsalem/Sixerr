import { useSelector } from "react-redux";
import { userService } from "../services/user.service";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ReviewPreview } from "./ReviewPreview";
import { ReviewChart } from "./ReviewChart";
import { UserMiniDetail } from "./UserMiniDetail";

export function ReviewList({gigOwnerId}) {
    const navigate = useNavigate()
    const [seller,setSeller] = useState(null)

    useEffect(() => {
        loadUser()
    }, [gigOwnerId])

    async function loadUser() {
        const seller = await userService.getById(gigOwnerId)
        try {
            setSeller(seller)
        } catch (err) {
            console.log('Had issues in review list ->', err)
            showErrorMsg('Oops cannot load review')
            navigate('/')
        }
    }
    
    if(!seller) return <div>loading...</div>
    return(
        
        <section className="reviews">
              {seller.reviews && seller.reviews.length ?
              <div>
              <h1>Reviews</h1>
            <ReviewChart reviews={seller.reviews}/>
            <ul className="review-list">
            {seller.reviews.map((rev, idx) =>
                    <ReviewPreview key={idx} review={rev}/>
                )}
            </ul>
            </div> : ''}
           
              
           
        </section>
        
    )
}