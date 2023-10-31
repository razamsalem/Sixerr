import { useSelector } from "react-redux"

export function MainBackdrop() {
    const isBackDropShown = useSelector(storeState => storeState.systemModule.backdropShown)

    return <section className={`main-backdrop ${isBackDropShown ? 'active' : ''}`}></section>
}