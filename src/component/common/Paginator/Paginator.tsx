import React, { useState } from "react";
import s from "./Paginator.module.css";

type PaginatorProps = {
	pages: number[],
	currentPage: number;
	onPageChange: (pageNumber: number) => void;
};

export const Paginator: React.FC<PaginatorProps> = ({
	                                                    currentPage,
	                                                    onPageChange,
	                                                    pages
                                                    }) => {
	const pageLimit = 10;
	const [activePage, setActivePage] = useState(currentPage);
	const totalCount = pages.length;
	const startIndex = Math.max(1, activePage - Math.floor(pageLimit / 2));
	const endIndex = Math.min(totalCount, startIndex + pageLimit - 1);
	
	const onClickHandler = (pageNumber: number) => {
		onPageChange(pageNumber);
		setActivePage(pageNumber);
	};
	
	return (
		<ul>
			{pages.slice(startIndex - 1, endIndex).map((pageNumber) => (
				<li
					key={pageNumber}
					onClick={() => onClickHandler(pageNumber)}
					className={activePage === pageNumber ? `${s.active}` : ""}
				>
					{pageNumber}
				</li>
			))}
		</ul>
	);
};
