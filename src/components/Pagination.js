import React from "react";
import "./Pagination.css";

function Pagination({ page, lastPage, loadStarSystems, planetsNumber }) {
	return (
		<div className="pagination">
			<button disabled={page === 0} onClick={() => loadStarSystems(0, planetsNumber)}>
				First
			</button>
			<button disabled={page === 0} onClick={() => loadStarSystems(page - 1, planetsNumber)}>
				Previous
			</button>
			{page !== 0 ? (
				<span className="page-info">
					Page {page} from {lastPage}
				</span>
			) : (
				<span className="page-info">Pages: {lastPage}</span>
			)}
			<button disabled={page === lastPage} onClick={() => loadStarSystems(page + 1, planetsNumber)}>
				Next
			</button>
			<button disabled={page === lastPage} onClick={() => loadStarSystems(lastPage, planetsNumber)}>
				Last
			</button>
		</div>
	);
}

export default Pagination;
