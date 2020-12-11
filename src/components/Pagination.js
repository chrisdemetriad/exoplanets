import React from "react";

function Pagination({ page, lastPage, loadStarSystems, planetsNumber }) {
	return (
		<div>
			<button disabled={page === 0} onClick={() => loadStarSystems(0, planetsNumber)}>
				First
			</button>
			<button disabled={page === 0} onClick={() => loadStarSystems(page - 1, planetsNumber)}>
				Previous
			</button>
			<span>
				Page {page} from {lastPage}
			</span>
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
