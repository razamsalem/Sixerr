import { HomePage } from './pages/HomePage.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { CarIndex } from './pages/CarIndex.jsx'
import { ReviewIndex } from './pages/ReviewIndex.jsx'
import { ChatApp } from './pages/Chat.jsx'
import { AdminApp } from './pages/AdminIndex.jsx'
import { DynamicBtn } from './cmps/DynamicBtn.jsx'
import { GigIndex } from './pages/GigIndex.jsx'
import { GigDetails } from './pages/GigDetails.jsx'
import { Checkout } from './pages/Checkout.jsx'
import { UserPayment } from './pages/UserPaymant.jsx'
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