import { DropdownItem } from "./DropdownItem"

export function DropdownMenu({ items, isOpen }) {

    return (
        <article className={`${isOpen ? 'open' : 'closed'} drop-down-menu`}>
            {items.map(item => <DropdownItem key={item.props.children} content={item} />)}
        </article>
    )
}