import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import '../App.css';
import Fallback from './Fallback';
import { ErrorBoundary } from 'react-error-boundary';

const PAGE = 10;
export default function Repos() {
	const [currentPage, setCurrentPage] = useState(0);

	const [datas, setDatas] = useState([]);
	useEffect(() => {
		// Fetch users repositories from Github API

		fetchDataFromGithub();
	}, []);

	function fetchDataFromGithub() {
		fetch('https://api.github.com/users/IsaacThaJunior/repos?per_page=100')
			.then((res) => res.json())
			.then((data) => {
				setDatas(data);
			});
	}

	function handlePageClick({ selected: selectedPage }) {
		setCurrentPage(selectedPage);
	}

	//0,10,20,30...
	const offset = currentPage * PAGE;

	const currentPageData = datas
		.slice(offset, offset + PAGE)
		.map((res, index) => {
			return (
				<div className="repoContainer" key={index}>
					<div className="repo">
						<h2 className="repo-title">{res.name}</h2>
						<a
							href={res.svn_url}
							target="_blank"
							rel="noopener noreferrer"
							className="repo-link"
						>
							Click here to see the Repo on Github
						</a>
					</div>
				</div>
			);
		});

	//total pages here = 50
	const pageCount = Math.ceil(datas.length / PAGE);

	return (
		<div className="Repos">
			<ErrorBoundary FallbackComponent={Fallback}>
				{currentPageData}
				<ReactPaginate
					breakLabel="..."
					nextLabel="next >"
					onPageChange={handlePageClick}
					pageRangeDisplayed={3}
					pageCount={pageCount}
					previousLabel="< previous"
					renderOnZeroPageCount={null}
					containerClassName="pagination"
					previousLinkClassName="page-num"
					nextLinkClassName="page-num"
					disabledClassName="disabled"
					activeClassName="active"
				/>
			</ErrorBoundary>
		</div>
	);
}
