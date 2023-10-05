import { PopularTags } from "./PopularTags";
import { SearchBarFilter } from "./SearchBarFilter";

export function HeroFilter() {

    return (
        <section className="hero-cover">
            <h1 className="hero-heading">
                Find the right <span>freelance</span> service, right away
            </h1>
            <section className="search-bar-container">
                {/* <input className="search" type="text" placeholder="Search for any service..." /> */}
                {/* <button className="search-btn btn fa-solid search-icon size=lg" /> */}
                <SearchBarFilter />
            </section>
            <PopularTags />
        </section>
    )
}