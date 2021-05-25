//import React, { Component } from 'react';

const Pagination = (props) => {
  const { count, pageSize, onPageChange, currentPage } = props;
  const pageCount = Math.ceil(count / pageSize);
  if (pageCount === 1) return null;
  var pageNums = [];
  for (var i = 1; i <= pageCount; i++) {
    pageNums.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {pageNums.map((n) => (
          <li
            key={n}
            className={n === currentPage ? "page-item active_page" : "page-item"}
          >
            <button className="page-link" onClick={() => onPageChange(n)}>
              {n}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
