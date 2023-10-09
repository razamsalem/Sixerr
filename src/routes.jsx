import { HomePage } from './pages/HomePage.jsx'
import { GigIndex } from './pages/GigIndex.jsx'
import { GigDetails } from './pages/GigDetails.jsx'
import { Checkout } from './pages/Checkout.jsx'
import { OrderIndex } from './pages/OrderIndex.jsx'

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
        path: 'order',
        component: <OrderIndex />,
        label: 'Orders',
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
        path: '*',
        component: <HomePage />,
        label: 'Home',
        shouldRender: false
    },
]

export default routes