import { GigPreview } from "./GigPreview";



export function GigList({ gigs, onRemoveGig, onUpdateGig }) {
    console.log(gigs)
    return (
        <section className="gig-list-wrapper">
            <ul className="gig-list">
                {gigs.map((gig, idx) =>
                    <GigPreview key={idx} gig={gig} onRemoveGig={onRemoveGig} onUpdateGig={onUpdateGig} />
                )}
            </ul>
        </section>
    )
}