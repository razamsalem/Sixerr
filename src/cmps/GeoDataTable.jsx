import React, { useState } from "react"

const DemoData = [
    ['https://res.cloudinary.com/de2rdmsca/image/upload/v1698150059/flag-round-250_igavtb.png', "Australia", 1750, 482, '$4.9K'],
    ['https://res.cloudinary.com/de2rdmsca/image/upload/v1698150499/flag-round-250_rjdori.png', "India", 1657, 312, '$4.2K'],
    ['https://res.cloudinary.com/de2rdmsca/image/upload/v1698150696/1265580_a10cn9.png', "United States", 1621, 284, '$3.4K'],
    ['https://res.cloudinary.com/de2rdmsca/image/upload/v1698150750/flag-round-250_vgbmxm.png', "Russia", 1509, 177, '$2.8K'],
    ['https://res.cloudinary.com/de2rdmsca/image/upload/v1698151046/co-circle-01_br7ll9.png', "Colombia", 1472, 80, '$1.3K'],
    ['https://res.cloudinary.com/de2rdmsca/image/upload/v1698151083/uk-circle-01_m0gigs.png', "United Kingdom", 1429, 114, '$2.2k'],
    ['https://res.cloudinary.com/de2rdmsca/image/upload/v1698151108/1200px-Brazilian_flag_icon_round.svg_nt65il.png', "Brazil", 1382, 89, '$1.6K'],
    ['https://res.cloudinary.com/de2rdmsca/image/upload/v1698151181/6023402_q06mt2.png', "Israel", 1200, 74, '$1.1K'],
]

const DataTable = ({ onChangeSorting }) => {
    const [data, setData] = useState(DemoData)
    const [sortConfig, setSortConfig] = useState({ key: 2, direction: "desc" })
    const [subHeader, setSubHeader] = useState('Views')

    const handleSort = (key) => {
        let direction = "asc"
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc"
        }
        setSortConfig({ key, direction })

        const sortedData = [...data].sort((a, b) => {
            if (direction === "asc") {
                return a[key] > b[key] ? 1 : -1
            } else {
                return a[key] < b[key] ? 1 : -1
            }
        })

        setData(sortedData)
    }

    const getSortIndicator = (columnKey) => {
        if (sortConfig.key === columnKey) {
            return sortConfig.direction === "asc" ? <i class="fa-solid fa-arrow-up"></i> : <i class="fa-solid fa-arrow-down"></i>
        }
        return null
    }

    return (
        <div className="data-table">
            <h4 className="sub-header">Top Countries by <span className="approved">{subHeader}</span></h4>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th onClick={() => {
                            handleSort(1)
                            setSubHeader('Alphabetical')
                        }}>
                            Country {getSortIndicator(1)}
                        </th>
                        <th onClick={() => {
                            handleSort(2)
                            setSubHeader('Views')
                        }}>
                            Total Views {getSortIndicator(2)}
                        </th>
                        <th onClick={() => {
                            handleSort(3)
                            setSubHeader('Orders')
                        }}>
                            Total Orders {getSortIndicator(3)}
                        </th>
                        <th onClick={() => {
                            handleSort(4)
                            setSubHeader('Revenue')
                        }}>
                            Total Revenue {getSortIndicator(4)}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>
                                <img src={row[0]} alt="" style={{ width: "18px" }} />
                            </td>
                            <td>{row[1]}</td>
                            <td>{row[2]}</td>
                            <td>{row[3]}</td>
                            <td className="dollar">{row[4]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable