import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadGigs, addGig, updateGig, removeGig, setFilterBy } from '../store/actions/gig.actions.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { userService } from '../services/user.service.js'
import { gigService } from '../services/gig.service.local.js'
import { GigList } from '../cmps/GigList.jsx'
import { DynamicBtn } from '../cmps/DynamicBtn.jsx'
import { useSearchParams } from "react-router-dom"
import LoadingCircle from '../cmps/LoadingCircle.jsx'
import { Pagination } from '../cmps/Pagination.jsx'


export function GigIndex() {
    const gigs = useSelector(storeState => storeState.gigModule.gigs)
    const filterBy = useSelector(storeState => storeState.gigModule.filterBy)
    let [searchParams, setSearchParams] = useSearchParams()

    const currentPage = filterBy.page || 1
    const totalGigsPerPage = 16
    const totalPages = Math.ceil(gigs.length / totalGigsPerPage)
    const startIndex = (currentPage - 1) * totalGigsPerPage
    const endIndex = startIndex + totalGigsPerPage
    const currPageGigs = gigs.slice(startIndex, endIndex)

    async function loadUser(gig) {
        try {
            const seller = await userService.getById(gig.owner._id)
            return seller
        } catch (err) {
            console.log('Had issues in review list ->', err)
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
            console.log('Error while changing the page:', error)
        }
    }


    if (!currPageGigs.length) return <div className="loading"><LoadingCircle /></div>
    return (
        <>
            <DynamicBtn />
            {currPageGigs.length === 0 ? (
                <div className="no-gigs-message">No gigs to show</div>
            ) : (
                <GigList
                    gigs={currPageGigs}
                    onRemoveGig={onRemoveGig}
                    onUpdateGig={onUpdateGig}
                    onloadUser={loadUser}
                />
            )}
            <Pagination
                currentPage={filterBy.page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </>
    )
}