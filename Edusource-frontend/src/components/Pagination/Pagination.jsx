import React from 'react';
import './Pagination.css'; // Add styles if necessary

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-nav">
      <ul className="pagination-ul">
        {pageNumbers.map((number) => (
          <li key={number} className="pagination-li">
            <button
              onClick={() => paginate(number)}
              className={`pagination-button ${currentPage === number ? 'current-page' : ''}`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;