import React, { Component } from "react";
import _ from "lodash";

const Pagination = props => {
    const { pageSize, itemsCount, currentPage } = props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    const pages = _.range(1, pagesCount + 1);
    if (pagesCount === 1) return null;

    return (
        <nav>
            <ul className="pagination">
                {pages.map(page => {
                    return (
                        <li
                            key={page}
                            className={
                                page === currentPage
                                    ? "page-item active"
                                    : "page-item"
                            }
                        >
                            <a
                                className="page-link"
                                onClick={() => props.onPageChange(page)}
                            >
                                {page}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Pagination;
