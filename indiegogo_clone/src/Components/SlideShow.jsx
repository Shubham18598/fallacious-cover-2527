import React, { useState, useEffect } from "react";

import { getArticles } from "./SlideApi";
import styles from "./SlideShow.module.css";
import { ShowArticles } from "./ShowArticles";

function SlideShow() {
	const [articles, setArticles] = useState([]);
	const [page, setPage] = useState(1);

	const handlePagination = (e) => {
		const { name } = e.target;
		setPage((page) => {
			return name === "prev" ? page - 1 : page + 1;
		});
	};

	useEffect(() => {
		getArticles(page).then((res) => {
			// console.log(res);
			setArticles(res.data);
		});
	}, [page]);
	return (
		<div>
			<h1 style={{ color: "grey", marginLeft: "5%", marginTop: "40px" }}>
			   Recently Viewed
			</h1>
			<div
				style={{
					float: "right",
					marginRight: "30px",
					marginTop: "-60px",
					display: "flex",
				}}
			>
				<button
					className={styles.changecontent}
					disabled={page <= 1}
					name="prev"
					onClick={handlePagination}
				>
					&#10094;
				</button>

				<button
					className={styles.changecontent}
					disabled={page >= 4}
					name="next"
					onClick={handlePagination}
				>
					&#10095;
				</button>
			</div>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "45% 45% 45% 45% ",

					gridGap: "20px",
					width: "50%",
					marginLeft: "3%",
				}}
			>
				<ShowArticles articles={articles} />
			</div>
		</div>
	);
}

export { SlideShow };
