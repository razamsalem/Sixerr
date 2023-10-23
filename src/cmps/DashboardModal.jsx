import { DoughnutChart } from "./DoughnutChart"

export function DashboardModal({ watchedUser, closeDashboard, handleBackgroundClick }) {


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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quae voluptas, sunt saepe dolorum facilis tempora ad est, in, nulla expedita modi aspernatur. Velit exercitationem, voluptatibus incidunt, quod minus inventore magnam illum quidem ipsa repellat ad. Omnis possimus fuga dolorem officiis? Provident porro beatae voluptates perferendis voluptatibus! Repudiandae, cum unde odit necessitatibus voluptatum itaque. Repellat ab voluptatibus laborum eos eum voluptate assumenda tempore magni eveniet! Cum cumque beatae dolore est, quia culpa deserunt iure autem iusto assumenda quis obcaecati quidem sint, magni rerum et perspiciatis exercitationem eos adipisci deleniti voluptatum perferendis. Perferendis explicabo dolorem temporibus ratione nostrum non deserunt quae quaerat magni. Quod maiores cumque sint, officia aut autem ipsum neque at, aliquam quibusdam esse, incidunt repellendus! Ab delectus voluptates soluta voluptatum laborum, ipsa veniam.
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