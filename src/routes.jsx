import { HomePage } from './pages/HomePage.jsx'
import { GigIndex } from './pages/GigIndex.jsx'
import { GigDetails } from './pages/GigDetails.jsx'
import { Checkout } from './pages/Checkout.jsx'
import { OrderIndex } from './pages/OrderIndex.jsx'
import { ReviewIndex } from './pages/ReviewIndex.jsx'
import { AddGig } from './pages/AddGig.jsx'
import { OrderCard } from './cmps/OrderCard.jsx'
import { BuyerOrders } from './pages/BuyerOrders.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <HomePage />,
        label: 'Home',
        shouldRender: false
    },
    {
        path: 'gig',
        component: <GigIndex />,
        label: 'Explore',
        shouldRender: true
    },
    {
        path: 'gig/add',
        component: <AddGig />,
        label: 'Add a gig',
        shouldRender: false
    },
    {
        path: 'gig/add/:gigId',
        component: <AddGig />,
        label: 'Edit a gig',
        shouldRender: false
    },
    {
        path: `gig/:gigId`,
        component: <GigDetails />,
        shouldRender: false
    },
    {
        path: `gig/:gigId/checkout`,
        component: <Checkout />,
        shouldRender: false
    },
    {
        path: `gig/:gigId/checkout/:pack`,
        component: <Checkout />,
        shouldRender: false
    },
    {
        path: 'order',
        component: <BuyerOrders />,
        label: 'Orders',
        shouldRender: false
    },
    {
        path: `order/review`,
        component: <ReviewIndex />,
        shouldRender: false
    },
    {
        path: '*',
        component: <HomePage />,
        label: 'Home',
        shouldRender: false
    },
]

export default routes