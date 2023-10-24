import React from "react"

const DemoData = [
    ['https://res.cloudinary.com/de2rdmsca/image/upload/v1698150059/flag-round-250_igavtb.png', "Australia", 1750, 482, '$4.9K'],
    ['https://res.cloudinary.com/de2rdmsca/image/upload/v1698150499/flag-round-250_rjdori.png', "India", 1657, 312, '$4.2K'],
    ['https://res.cloudinary.com/de2rdmsca/image/upload/v1698150696/1265580_a10cn9.png', "United States", 1621, 284, '$3.4K'],
    ['https://res.cloudinary.com/de2rdmsca/image/upload/v1698150750/flag-round-250_vgbmxm.png', "Russia", 1509, 177, '$2.8K'],
    ['https://res.cloudinary.com/de2rdmsca/image/upload/v1698151046/co-circle-01_br7ll9.png', "Colombia", 1472, 80, '$1.3K'],
    ['https://res.cloudinary.com/de2rdmsca/image/upload/v1698151083/uk-circle-01_m0gigs.png', "United Kingdom", 1429, 114, '$2.2k'],
    ['https://res.cloudinary.com/de2rdmsca/image/upload/v1698151108/1200px-Brazilian_flag_icon_round.svg_nt65il.png', "Brazil", 1382, 89, '$1.6K'],
    ['https://res.cloudinary.com/de2rdmsca/image/upload/v1698151181/6023402_q06mt2.png', "Israel", 1200, 74, '$1.1K'],
    // ["Canada", 1078, 64, '$889'],
    // ["France", 1074, 48, '$567'],
]

const DataTable = () => {
    return (
        <div className="data-table">
            <h4 className="sub-header">Top Countries by Views</h4>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Country</th>
                        <th>Total Views</th>
                        <th>Total Orders</th>
                        <th>Total Revenue</th>
                    </tr>
                </thead>
                <tbody>
                    {DemoData.map((data, index) => (
                        <tr key={index}>
                            <td><img src={data[0]} alt="" style={{ width: "18px" }} /></td>
                            <td>{data[1]}</td>
                            <td>{data[2]}</td>
                            <td>{data[3]}</td>
                            <td className="dollar">{data[4]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable
