import React, { useState, useEffect } from 'react';

export function Pagination({ currentPage, totalPages, onPageChange }) {
    const [activePage, setActivePage] = useState(1);

    useEffect(() => {
        setActivePage(currentPage);
    }, [currentPage]);

    function handlePageChange(newPage) {
        if (newPage >= 1 && newPage <= totalPages) {
            onPageChange(newPage);
            setActivePage(newPage);
        }
    }

    function renderPageNumbers() {
        const pageNumbers = Array.from({ length: totalPages }, (_, idx) => idx + 1);

        return pageNumbers.map((page) => (
            <li
                key={page}
                onClick={() => handlePageChange(page)}
                className={`page-number ${activePage === page ? 'active' : ''}`}
            >
                <span>{page}</span>
            </li>
        ));
    }

    return (
        <ul className="pagination flex">
            <li
                className={`pagination-arrows first-page ${activePage === 1 ? 'disabled' : ''}`}
                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
            >
                <i className="fa-solid fa-arrow-left"></i>
            </li>
            {renderPageNumbers()}
            <li
                className={`pagination-arrows last-page ${activePage === totalPages ? 'disabled' : ''}`}
                onClick={() => currentPage < totalPages && handlePageChange(activePage + 1)}
            >
                <i className="fa-solid fa-arrow-right"></i>
            </li>
        </ul>
    );
}
