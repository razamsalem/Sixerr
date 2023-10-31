export function DashboardNavBtn({activeBtn, setActiveBtn, setLoading }) {
    return (
        <>
            <button
                className={activeBtn === 'home' ? 'active' : ''}
                onClick={() => setActiveBtn('home')}
            >
                <span className="fa-solid fa-house icon"></span> Home
            </button>

            <button
                className={activeBtn === 'dashboard' ? 'active' : ''}
                onClick={() => setActiveBtn('dashboard')}
            >
                <span className="fa-solid fa-square-poll-vertical icon"></span> Data
            </button>

            <button
                className={activeBtn === 'impressions' ? 'active' : ''}
                onClick={() => { setActiveBtn('impressions'); setLoading(true) }}
            >
                <span className="fa-solid fa-earth-asia icon"></span> Global
            </button>
        </>
    )
}