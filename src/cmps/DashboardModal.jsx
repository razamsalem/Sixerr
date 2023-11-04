import { useEffect, useState } from "react"
import AreaResChart from "./AreaResponsiveChart"
import { DoughnutChart } from "./DoughnutChart"
import { NeedleChart } from "./NeedleChart"
import { OrderList } from "./OrderList"
import StatsRadarChart from "./RadarChart"
import { GeoChart } from "./GeoChart"
import { CompareOrdersChart } from "./CompareOrdersChart"
import { ViewsBarChart } from "./ViewsBarChart"
import { AgeRadialBar } from "./AgeRadialBar"
import { DataComposedChart } from "./DataComposedChart"
import { StackedArea } from "./StackedArea"
import DataTable from "./GeoDataTable"
import LoadingCircle from "./LoadingCircle"
import DashboardCard from "./DashboardCard"
import { DashboardNavBtn } from "./DashboardNavBtn"

export function DashboardModal({ watchedUser, closeDashboard, handleBackgroundClick }) {
    const [activeBtn, setActiveBtn] = useState('home')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 500)

        return () => clearTimeout(timer)
    }, [activeBtn])


    return (
        <section className="modal-background" onClick={handleBackgroundClick}>
            <div className="dashboard-modal dashboard-layout">
                <button onClick={closeDashboard} className=" fa-solid fa-x close-btn"></button>

                <div className="nav-content flex">
                    <h1 className="logo">sixerr<span className='dot'>.</span></h1>
                    <div className="buttons flex column">
                        <DashboardNavBtn activeBtn={activeBtn} setActiveBtn={setActiveBtn} setLoading={setLoading} />
                    </div>
                </div>

                <div className="dashboard-content">
                    {activeBtn === 'home' && (
                        <>
                            <h3 className="header">Home</h3>
                            <div className="front-charts flex">
                                <div className="radar">
                                    <StatsRadarChart />
                                </div>
                                <div className="needle">
                                    <h3>Friendship Status <span className="fa-regular fa-circle-question icon" title="If you reach the red zone you will not be able to continue selling!"></span> </h3>
                                    <p>Friendship status depends on the review of your clients.</p>
                                    <NeedleChart />
                                </div>
                            </div>
                            <main className="graph">
                                <h4 className="sub-header">This week's sales</h4>
                                <AreaResChart />
                            </main>
                        </>
                    )}

                    {activeBtn === 'dashboard' && (
                        <>
                            <h3 className="header mb">Dashboard</h3>

                            <div className="cards flex">
                                <DashboardCard title="Daily Orders" amount="142" icon="https://res.cloudinary.com/de2rdmsca/image/upload/v1698182770/308830_o5zknq.png" />
                                <DashboardCard title="Daily Visits" amount="7,080" icon="https://res.cloudinary.com/de2rdmsca/image/upload/v1698182540/depositphotos_69848707-stock-illustration-pictograph-of-eye-icon_1_kgxet3.png" />
                                <DashboardCard title="Total Earnings" amount="$16,575" icon="https://res.cloudinary.com/de2rdmsca/image/upload/v1698181815/png-transparent-dollar-sign-illustration-united-states-dollar-icon-design-icon-dollar-sign-text-logo-number-thumbnail-removebg-preview_1_kfkinb.png" />
                            </div>

                            <div className="orders-data flex">
                                <div className="compare-orders">
                                    <h4 className="title">Orders compared to last week</h4>
                                    <CompareOrdersChart />
                                </div>
                                <div className="compare-orders">
                                    <h4 className="title">Orders compared to Views</h4>
                                    <ViewsBarChart />
                                </div>
                            </div>

                            <div className="stacked-container">
                                <h4 className="title">Weekly Overall</h4>
                                <StackedArea />
                            </div>

                            {/* <div className="general-info flex">
                                <div className="age-info">
                                    <h4 className="title">Clients by age</h4>
                                    <AgeRadialBar />
                                </div>
                                <div className="daily-highs">
                                    <h4 className="title">Daily highs</h4>
                                    <DataComposedChart />
                                </div>
                            </div> */}

                        </>
                    )}

                    {activeBtn === 'impressions' && loading && (
                        <div className="loading">
                            <LoadingCircle />
                        </div>
                    )}

                    {activeBtn === 'impressions' && !loading && (
                        <>
                            <h3 className="header mb">Impressions</h3>
                            <div className="country-bar">
                                {/* <CountryBar /> */}
                            </div>

                            <div className="map">
                                <h4 className="sub-header">Views by region</h4>
                                <GeoChart />
                            </div>

                            <div className="data-table">
                                <DataTable />
                            </div>
                        </>
                    )}

                </div>

                <div className="user-info">
                    <div className="user-name flex">
                        {watchedUser.fullname}
                        <span className="user-profile-img"> {watchedUser.imgUrl && <img src={watchedUser.imgUrl} alt="user img" />} </span>
                    </div>

                    <div className="stats flex">
                        <h4><span className="fa-solid fa-star icon"></span> Avg. reviews <span className="avg">4.6</span></h4>
                        <h4><span className="fa-solid fa-clock icon"></span> Avg. res time <span className="avg">1 hour</span></h4>
                        <h4><span className="fa-solid fa-paper-plane icon"></span> Last Delivery <span className="avg">4 hours</span></h4>
                    </div>

                    <div className="last-month">
                        <h2>Last 30 days</h2>

                        <div className="chart">
                            <DoughnutChart />
                        </div>

                        <div className="labels flex">
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