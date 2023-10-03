import { GigPreview } from "./GigPreview";



export function GigList({ gigs, onRemoveGig, onUpdateGig }) {


    return (
        <section className="gig-list">
            <h1>Gig list</h1>
            <ul className="gig-list">
                {gigs.map((gig, idx) =>
                    <GigPreview key={idx} gig={gig} onRemoveGig={onRemoveGig} onUpdateGig={onUpdateGig} />
                )}
            </ul>
        </section>
    )
}