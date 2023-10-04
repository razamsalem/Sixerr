import { GigPreview } from "./GigPreview";



export function GigList({ gigs, onRemoveGig, onUpdateGig }) {

    return (
        <section className="gig-list-wrapper">
           <h1>Logo Design</h1>
            <ul className="gig-list">
                {gigs.map((gig, idx) =>
                    <GigPreview key={idx} gig={gig} onRemoveGig={onRemoveGig} onUpdateGig={onUpdateGig} />
                )}
            </ul>
        </section>
    )
}