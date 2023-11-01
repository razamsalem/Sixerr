import { useSelector } from "react-redux";
import { userService } from "../services/user.service";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ReviewPreview } from "./ReviewPreview";
import { ReviewChart } from "./ReviewChart";
import { UserMiniDetail } from "./UserMiniDetail";
import LoadingCircle from "./LoadingCircle";

export function ReviewList({ gigOwnerId, isUserProfile }) {
    const navigate = useNavigate()
    const [seller, setSeller] = useState(null)

    useEffect(() => {
        loadUser()
    }, [gigOwnerId])

    async function loadUser() {
        try {
            const seller = await userService.getById(gigOwnerId)
            setSeller(seller)
        } catch (err) {
            console.log('Had issues in review list ->', err)
            showErrorMsg('Oops cannot load review')
            navigate('/')
        }
    }

    if (!seller) return <div>{<LoadingCircle />}</div>

    return (

        <section className="reviews">
            {seller.reviews && seller.reviews.length ?
                <div>
                    <h1>Reviews</h1>
                    <ReviewChart reviews={seller.reviews} isUserProfile={isUserProfile} />
                    <ul className="review-list">
                        {seller.reviews.sort((rev1, rev2) => new Date(rev2.createdAt) - new Date(rev1.createdAt)).map((rev, idx) =>
                            <ReviewPreview key={idx} review={rev} />
                        )}
                    </ul>
                </div> : ''}



        </section>

    )
}