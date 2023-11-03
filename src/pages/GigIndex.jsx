import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { loadGigs, addGig, updateGig, removeGig, setFilterBy, getClearFilter } from '../store/actions/gig.actions.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { userService } from '../services/user.service.http.js'
import { gigService } from '../services/gig.service.js'
import { GigList } from '../cmps/GigList.jsx'
import { DynamicBtn } from '../cmps/DynamicBtn.jsx'
import { useSearchParams } from "react-router-dom"
import LoadingCircle from '../cmps/LoadingCircle.jsx'
import { Pagination } from '../cmps/Pagination.jsx'
import { ServicesCounter } from '../cmps/ServicesCounter.jsx'
import { DropdownBtn } from '../cmps/DropdownBtn.jsx'
import { BreadCrumbs } from '../cmps/BreadCrumbs.jsx'
import { utilService } from '../services/util.service.js'

export function GigIndex() {
    const gigs = useSelector(storeState => storeState.gigModule.gigs)
    const filterBy = useSelector(storeState => storeState.gigModule.filterBy)
    const [isLoading, setIsLoading] = useState(true)
    const [selectedBtn, setSelectedBtn] = useState(null)
    let [searchParams, setSearchParams] = useSearchParams()

    const currentPage = filterBy.page || 1
    const totalGigsPerPage = 10
    const totalPages = Math.ceil(gigs.length / totalGigsPerPage)
    const startIndex = (currentPage - 1) * totalGigsPerPage
    const endIndex = startIndex + totalGigsPerPage
    const currPageGigs = gigs.slice(startIndex, endIndex)

    async function loadUser(gig) {
        // console.log(gig, "gig");
        try {
            const seller = await userService.getById(gig.owner._id)
            return seller
        } catch (err) {
            // console.log('Had issues in review list ->', err)
            showErrorMsg('Oops cannot load review')
            navigate('/')
        }
    }

    useEffect(() => {
        const paramFilter = {}
        for (const [key, value] of searchParams) {
            if (value === 'true') {
                paramFilter[key] = true
            } else if (value === 'false') {
                paramFilter[key] = false
            } else if (value !== '' && !isNaN(value)) {
                paramFilter[key] = Number(value)
            } else if (value.startsWith('[') && value.endsWith(']')) {
                paramFilter[key] = JSON.parse(value)
            } else {
                paramFilter[key] = value
            }
        }

        setFilterBy(paramFilter)
    }, [])


    useEffect(() => {
        loadGigs()
        setSearchParams(filterBy)

        const loadingTimeout = setTimeout(() => {
            setIsLoading(false)
            console.log('done')
        }, 1000)

        return () => {
            clearTimeout(loadingTimeout)
        }

    }, [filterBy])


    async function onRemoveGig(gigId) {
        try {
            await removeGig(gigId)
            showSuccessMsg('Gig removed')
        } catch (err) {
            showErrorMsg('Cannot remove gig')
        }
    }

    async function onUpdateGig(gig) {
        const price = +prompt('New price?')
        const gigToSave = { ...gig, price }
        try {
            const savedGig = await updateGig(gigToSave)
            showSuccessMsg(`Gig updated, new price: ${savedGig.price}`)
        } catch (err) {
            showErrorMsg('Cannot update gig')
        }
    }

    async function handlePageChange(newPage) {
        try {
            setFilterBy({ ...filterBy, page: newPage })
            window.scrollTo(0, 0)
        } catch (error) {
            showErrorMsg('Could not preform action at this time')
            console.log('Error while changing the page:', error)
        }
    }

    async function handleSortChange(ev) {
        const value = (ev.target.dataset.value)
        try {
            setFilterBy({ ...filterBy, sortBy: value })
            window.scrollTo(0, 0)
        } catch (error) {
            showErrorMsg('Could not preform action at this time')
            console.log('Error while changing the page:', error)
        }
    }

    function getSortTitle() {
        const sortBy = filterBy.sortBy
        switch (sortBy) {
            case 'recommend': return 'Recommended'
                break
            case 'best-selling': return 'Best selling'
                break
            case 'new': return 'Newest Arrivals'
                break
        }
    }

    return (
        <section className='gig-index main-layout full'>
            {isLoading ? (
                <>
                    <div className="loading"><LoadingCircle /></div>
                </>
            ) : currPageGigs.length ? (
                <>
                    <BreadCrumbs category={filterBy.category} />
                    <h1 className='category-header'>{filterBy.category || 'Explore page'}</h1>
                    <p className='category-sub-header'>{utilService.getCategorySubHeader(filterBy.category)}</p>
                    <DynamicBtn />
                    <div className='top-of-gigs'>
                        <ServicesCounter gigs={gigs} />
                        <label className='sort-container'>
                            <span className='sort-title'>Sort by:</span>
                            <DropdownBtn icon={getSortTitle()} selectedBtn={selectedBtn} setSelectedBtn={setSelectedBtn}>
                                <span data-value={'recommend'} onClick={handleSortChange}>Recommended</span>
                                <span data-value={'best-selling'} onClick={handleSortChange}>Best selling</span>
                                <span data-value={'new'} onClick={handleSortChange}>Newest Arrivals</span>
                            </DropdownBtn>
                        </label>
                    </div>
                    <GigList
                        gigs={currPageGigs}
                        onRemoveGig={onRemoveGig}
                        onUpdateGig={onUpdateGig}
                        onloadUser={loadUser}
                    />
                    <Pagination
                        currentPage={filterBy.page}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </>
            ) : (
                <div className="no-gigs-message flex column">
                    <h1 className='not-found-header'>We couldn't find gigs that match your search</h1>
                    <button className='clear' onClick={() => { setFilterBy(getClearFilter()) }}>Clear All Filters</button>
                    <img className='not-found-img' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/no-results-couch.0139585.png" alt="not found" />
                </div>
            )}
        </section>
    )
}