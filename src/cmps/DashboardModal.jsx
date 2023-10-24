import AreaResChart from "./AreaResponsiveChart"
import { DoughnutChart } from "./DoughnutChart"
import { NeedleChart } from "./NeedleChart"
import { OrderList } from "./OrderList"
import StatsRadarChart from "./RadarChart"

export function DashboardModal({ watchedUser, orders, loggedUser, closeDashboard, handleBackgroundClick }) {

    return (
        <section className="modal-background" onClick={handleBackgroundClick}>
            <div className="dashboard-modal dashboard-layout">
                <button onClick={closeDashboard} className="close-btn">Close</button>

                <div className="nav-content">
                    <h1 className="logo">sixerr<span className='dot'>.</span></h1>
                    <div className="buttons flex column">
                        <button> <span className="fa-solid fa-house icon"></span> Home</button>
                        <button> <span className="fa-solid fa-square-poll-vertical icon"></span> Dashboard</button>
                        <button> <span className="fa-solid fa-chart-pie icon"></span> Insights</button>
                    </div>
                </div>
                <div className="space"></div>
                <div className="dashboard-content">
                    <h3 className="header">Home</h3>
                    <div className="front-charts flex">
                        <div className="radar">
                            <StatsRadarChart />
                        </div>
                        <div className="needle">
                            <h3>Friendship Status <span className="fa-regular fa-circle-question icon" title="if you reach the red zone you will not be able to continue selling!"></span> </h3>
                            <p>Friendship status depends on the review of your clients.</p>
                            <NeedleChart />
                        </div>
                    </div>
                    <main className="graph">
                        <h4 className="sub-header">This week's sales</h4>
                        <AreaResChart />
                    </main>
                    {/* <div className="activities">
                        <h4 className="sub-header">Recent activities</h4>
                    </div> */}
                </div>
                <div className="space2"></div>
                <div className="user-info">
                    <div className="user-name">
                        {watchedUser.fullname}
                    </div>
                    <div className="user-profile-img">
                        {watchedUser.imgUrl && <img src={watchedUser.imgUrl} alt="user img" />}
                    </div>
                    <div className="stats">
                        <h4><span className="fa-solid fa-star icon"></span> Avg. reviews <span className="avg">4.6</span></h4>
                        <h4><span className="fa-solid fa-clock icon"></span> Avg. res time <span className="avg">1 hour</span></h4>
                        <h4><span className="fa-solid fa-paper-plane icon"></span> Last Delivery <span className="avg">4 hours</span></h4>
                    </div>
                    <div className="last-month">
                        <h2>Last 30 days</h2>

                        <div className="chart">
                            <DoughnutChart />
                        </div>

                        <div className="labels">
                            <p className="fulfilled">Fulfilled <span className="fa-solid fa-arrow-trend-up approved"></span> </p>
                            <p className="approved">Approved <span className="fa-solid fa-arrow-trend-up approved"></span></p>
                            <p className="rejected">Rejected <span className="fa-solid fa-arrow-trend-down rejected"></span></p>
                            <p className="pending">Pending <span className="fa-solid fa-arrow-trend-down rejected"></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}