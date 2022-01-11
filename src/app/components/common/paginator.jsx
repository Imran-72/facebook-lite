import React, { useState } from "react";

const Paginator = ({
  usersCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(usersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rigthPortionPageNumber = portionNumber * portionSize;
  return (
    <nav role="button">
      <ul className="pagination">
        {portionNumber > 1 && (
          <li className="page-item">
            <a
              className="page-link"
              onClick={() => {
                setPortionNumber(portionNumber - 1);
              }}
            >
              Previous
            </a>
          </li>
        )}
        {pages
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rigthPortionPageNumber
          )
          .map((p) => {
            return (
              <li
                className={"page-item " + (p === currentPage ? "active" : "")}
              >
                <a
                  className="page-link"
                  onClick={() => {
                    onPageChanged(p);
                  }}
                >
                  {p}
                </a>
              </li>
            );
          })}
        {portionCount > portionNumber && (
          <li className="page-item">
            <a
              className="page-link"
              onClick={() => {
                setPortionNumber(portionNumber + 1);
              }}
            >
              Next
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Paginator;
