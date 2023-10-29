import { AddGigCard } from "./AddGigCard";
import { GigPreview } from "./GigPreview";
import { GigSlider } from "./GigSlider.jsx";

export function GigList({ gigs, onRemoveGig, onUpdateGig, onlyTwo, onloadUser, minimal }) {
    const firstTwoGigs = gigs.slice(0, 2)

    return (
        <section className="gig-list-wrapper">
            <ul className="gig-list">

                {onlyTwo ? firstTwoGigs.map((gig, idx) =>
                    <GigPreview key={idx} gig={gig} onRemoveGig={onRemoveGig} onUpdateGig={onUpdateGig} minimal={minimal} />
                ) : gigs.map((gig, idx) =>
                    <GigPreview key={idx} gig={gig} onRemoveGig={onRemoveGig} onUpdateGig={onUpdateGig} onloadUser={onloadUser} />
                )}
            </ul>
            {/* <GigSlider gig={gigs[1]}/> */}
        </section>
    )
}