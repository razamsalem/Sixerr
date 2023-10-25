import { useSelector } from "react-redux";
import { PopularTags } from "./PopularTags";
import { SearchBarFilter } from "./SearchBarFilter";
import { setFilterBy } from "../store/actions/gig.actions"

export function HeroFilter() {
    const globalFilterBy = useSelector(storeState => storeState.gigModule.filterBy)

    return (
        <section className="hero-cover">
            <h1 className="hero-heading">
                Find the right <span>freelance</span> service, right away
            </h1>
            <section className="search-bar-container">
                <SearchBarFilter />
            </section>
            <PopularTags globalFilterBy={globalFilterBy} setFilterBy={setFilterBy} />
        </section>
    )
}