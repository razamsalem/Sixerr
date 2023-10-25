import { AddGigCard } from "./AddGigCard";
import { GigPreview } from "./GigPreview";
import { GigSlider } from "./GigSlider.jsx";



export function GigList({ gigs, onRemoveGig, onUpdateGig }) {
    return (
        <section className="gig-list-wrapper">
            <ul className="gig-list">
                {gigs.map((gig, idx) =>
                    <GigPreview key={idx} gig={gig} onRemoveGig={onRemoveGig} onUpdateGig={onUpdateGig} />
                )}
            </ul>
            {/* <GigSlider gig={gigs[1]}/> */}
        </section>
    )
}