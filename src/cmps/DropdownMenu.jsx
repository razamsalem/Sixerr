import { DropdownItem } from "./DropdownItem"

export function DropdownMenu({ items }) {

    return (
        <article className="drop-down-menu">
            {items.map(item => <DropdownItem key={item.props.children} content={item} />)}
        </article>
    )
}