export function DashboardModal({ closeDashboard }) {


    return (
        <div class="dashboard-modal dashboard-layout">
            <button onClick={closeDashboard} className="close-btn">Close</button>
            <div class="dashboard-content">
                <h1 className="logo">sixerr<span className='dot'>.</span></h1>
                <div className="buttons flex column">
                    <button> <span className="fa-solid fa-house"></span> Home</button>
                    <button> <span className="fa-solid fa-square-poll-vertical"></span> Dashboard</button>
                    <button> <span className="fa-solid fa-chart-pie"></span> Insights</button>
                </div>  
            </div>
            <div class="dashboard-content2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quae voluptas, sunt saepe dolorum facilis tempora ad est, in, nulla expedita modi aspernatur. Velit exercitationem, voluptatibus incidunt, quod minus inventore magnam illum quidem ipsa repellat ad. Omnis possimus fuga dolorem officiis? Provident porro beatae voluptates perferendis voluptatibus! Repudiandae, cum unde odit necessitatibus voluptatum itaque. Repellat ab voluptatibus laborum eos eum voluptate assumenda tempore magni eveniet! Cum cumque beatae dolore est, quia culpa deserunt iure autem iusto assumenda quis obcaecati quidem sint, magni rerum et perspiciatis exercitationem eos adipisci deleniti voluptatum perferendis. Perferendis explicabo dolorem temporibus ratione nostrum non deserunt quae quaerat magni. Quod maiores cumque sint, officia aut autem ipsum neque at, aliquam quibusdam esse, incidunt repellendus! Ab delectus voluptates soluta voluptatum laborum, ipsa veniam.
            </div>
            <div class="dashboard-content3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quae voluptas, sunt saepe dolorum facilis tempora ad est, in, nulla expedita modi aspernatur. Velit exercitationem, voluptatibus incidunt, quod minus inventore magnam illum quidem ipsa repellat ad. Omnis possimus fuga dolorem officiis? Provident porro beatae voluptates perferendis voluptatibus! Repudiandae, cum unde odit necessitatibus voluptatum itaque. Repellat ab voluptatibus laborum eos eum voluptate assumenda tempore magni eveniet! Cum cumque beatae dolore est, quia culpa deserunt iure autem iusto assumenda quis obcaecati quidem sint, magni rerum et perspiciatis exercitationem eos adipisci deleniti voluptatum perferendis. Perferendis explicabo dolorem temporibus ratione nostrum non deserunt quae quaerat magni. Quod maiores cumque sint, officia aut autem ipsum neque at, aliquam quibusdam esse, incidunt repellendus! Ab delectus voluptates soluta voluptatum laborum, ipsa veniam.
            </div>
        </div>
    )
}