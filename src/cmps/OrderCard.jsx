import { useEffect, useState } from "react"
import { utilService } from "../services/util.service"
import { useNavigate } from "react-router"
import { setFilterBy, getClearFilter } from "../store/actions/gig.actions"
import { useDispatch, useSelector } from "react-redux"
const defaultGigImg = 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698663092/defaultGigImg_vjtk9e.webp'

export function OrderCard({ order, openModal }) {
    const [progress, setProgress] = useState(0)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let orders = useSelector(storeState => storeState.orderModule.orders)

    // useEffect(()=>{
    //     socketService.on('order-updated',order=>{
    //         dispatch(getActionUpdateOrder(order))
    //     })
    //     console.log(orders,"oo2");
    // },[])

    useEffect(() => {
        const [, , progress] = checkStatus(order.status)
        setProgress(progress)
        socketService.on('order-updated',order=>{
            dispatch(getActionUpdateOrder(order))
        })
        console.log(orders,"oo2");
    }, [order.status])

    function checkStatus(status) {
        if (status === 'pending') return ['Pending', 'Your order is waiting to be approved by the seller', 25,]
        if (status === 'approved') return ['Confirmed', 'The seller is currently working on your order', 50,]
        if (status === 'rejected') return ['Seller refused the order', 'The seller refused the order, please contact the seller.', 0,]
        if (status === 'fulfilled') return ['It\'s delivered!', 'Your order has been delivered', 100,]
    }

    function onSetFilterBy(category) {
        setFilterBy({ ...getClearFilter(), category })
    }

    function navigateToSeller() {
        navigate(`/user/${order.seller._id}`)
    }

    function navigateToGig() {
        navigate(`/gig/${order.gig._id}`)
    }

    function ReviewGig() {
        navigate(`/order/review?orderId=${order._id}`)
    }

    console.log(order)
    return (
        <section className="order-card-container flex">
            <div className="order-info">
                <h5 className="card-header">Order status</h5>
                <h4 className={`status flex ${order.status}`}>{checkStatus(order.status)[0]} <span className="question"><i title={checkStatus(order.status)[1]} className="fa-regular fa-circle-question"></i></span> </h4>
                <p className="date">Due date on {utilService.calculateDaysFromTimestamp(order.createdAt, order.daysToMake)}</p>

                <div className="progress-bar">
                    <div className="progress" style={{ width: `${progress}%` }}></div>
                </div>
                <input readOnly type="range" id="progressInput" min="0" max="100" value="0"></input>
            </div>

            <div className="gig flex">
                <div className="gig-img">
                    <img onClick={navigateToGig} src={order.gig.imgUrls[0] || defaultGigImg} alt="Gig Picture" onError={e => e.currentTarget.src = defaultGigImg} />
                </div>

                <div className="gig-info">
                    <h4 className="gig-title">{order.gig.title}</h4>
                    <h5 onClick={() => onSetFilterBy(order.gig.category)} className="click">{order.gig.category}</h5>
                    <h5 className="seller">From <span className="click" onClick={navigateToSeller}>{order.seller.fullname}</span></h5>
                </div>
            </div>

            <div className="order-data">
                <div className="order">
                    <h3>Order no.</h3>
                    <span className="answer">#{order._id}</span>
                </div>
                <div className="order">
                    <h3>Delivery time</h3>
                    <span className="answer"><i className="fa-solid fa-dolly delivery-icon"></i> {order.gig.daysToMake} {order.gig.daysToMake === 1 ? 'Day' : 'Days'}</span>
                </div>

                {order.status === 'fulfilled' && <button className="add-review btn" onClick={ReviewGig}>Add a review</button>}
                <button onClick={() => openModal(order)} className="show-order btn">View order</button>

            </div>
        </section >

    )
}