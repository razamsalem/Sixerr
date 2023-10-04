export function PopularTags() {
    const tags = ['Website Design', 'Wordpress', 'Logo Design', 'AI Services']

    return (
        <div className="popular">
            Popular:
            <ul>
                {tags.map(tag => <li key={tag}><a className="btn">{tag}</a></li>)}
            </ul>
        </div>
    )
}