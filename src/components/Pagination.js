import React from "react";

function Pagination({ page, lastPage, loadStarSystems }) {
	return (
		<div>
			<button disabled={page === 1} onClick={() => loadStarSystems(1)}>
				First
			</button>
			<button disabled={page === 1} onClick={() => loadStarSystems(page - 1)}>
				Previous
			</button>
			<span>
				Page {page} from {lastPage}
			</span>
			<button disabled={page === lastPage} onClick={() => loadStarSystems(page + 1)}>
				Next
			</button>
			<button disabled={page === lastPage} onClick={() => loadStarSystems(lastPage)}>
				Last
			</button>
		</div>
	);
}

export default Pagination;
