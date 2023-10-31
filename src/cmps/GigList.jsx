import { AddGigCard } from "./AddGigCard";
import { GigPreview } from "./GigPreview";
import { GigSlider } from "./GigSlider.jsx";

export function GigList({ gigs, onRemoveGig, onUpdateGig, bestSellerGigs, onloadUser, minimal, onUserProfile }) {
    const bestGigs = gigs.slice(0, 3)

    return (
        <section className="gig-list-wrapper">
            <ul className={`gig-list ${onUserProfile ? `user-layout` : `gigs-layout`}`}>

                {bestSellerGigs ? bestGigs.map((gig, idx) =>
                    <GigPreview key={idx} gig={gig} onRemoveGig={onRemoveGig} onUpdateGig={onUpdateGig} minimal={minimal} />
                ) : gigs.map((gig, idx) =>
                    <GigPreview key={idx} gig={gig} onRemoveGig={onRemoveGig} onUpdateGig={onUpdateGig} onloadUser={onloadUser} />
                )}
            </ul>
            {/* <GigSlider gig={gigs[1]}/> */}
        </section>
    )
}