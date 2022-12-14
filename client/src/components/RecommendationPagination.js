import React from "react";
import PropTypes from "prop-types";

// Jerry Asala
const RecommendationPagination = ({ rPages, cPage, setCPage }) => {
  const pageNumbers = [...Array(rPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (cPage !== rPages) setCPage(cPage + 1);
  };
  const prevPage = () => {
    if (cPage !== 1) setCPage(cPage - 1);
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" onClick={prevPage} href="/#">
            Previous
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${cPage === pgNumber ? "active" : ""} `}
          >
            <a
              onClick={() => setCPage(pgNumber)}
              className="page-link"
              href="/#"
            >
              {pgNumber}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" onClick={nextPage} href="/#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default RecommendationPagination;

RecommendationPagination.prototype = {
  nPage: PropTypes.number.isRequired,
  cPage: PropTypes.number.isRequired,
  setCPage: PropTypes.func.isRequired,
};
