import React from "react";
// import styles from "./SlideShow.module.css";
import {  useNavigate } from "react-router-dom";
import styles from "./CrowdFunding.module.css";

//import { Reviews } from "./Reviews";

export const CrowdFunding = () => {
	const navigate = useNavigate();
	const handleSignup = () => {
		navigate("/login");
	};

	return (
		<>
			<div>
				{/* eslint-disable-next-line */}
				<div className={styles.crowdfunding}>
					{/* eslint-disable-next-line */}
					<img
						src="https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/homepage/crowdfunding-bg-mobile-lg.jpg"
						alt="crowdfunding image"
					/>
					<h1 className={styles.crowdtitle}>Back the Project ,take the ride</h1>
					<br />
					<br />
					<p className={styles.crowddescription}>
						Indiegogo is your destination for clever innovation in
						tech,design,and more,often <br />
						with special perks and pricing for early adopters.Back campaign
						,share your ideas
						<br />
						and feedback with the project team - and join the risks rewards of
						bringing new <br />
						products to life.
					</p>
					<br />
					<br />
					<h3 className={styles.lerancrowd}>
						LEARN ABOUT CROWDFUNDING &#10095;
					</h3>
				</div>
			</div>
			<br />
			<br />
			<br />
			<div className={styles.categories}>
				<h1>Which categories interest you?</h1>
				<br />

				<p>
					Discover projects just for you and get great recommendations when you
					select your interests.
				</p>
			</div>
			<div className={styles.interestbtn}>
				<button onClick={handleSignup}>SIGNUP AND SELECT YOUR INTEREST</button>
			</div>
			<div>
				<p className={styles.topcategories}>Or explore our top categories</p>
			</div>
			<br />
			<br />
			<div className={styles.topsixcateg}>
				<div>
					<img
						src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5462376.jpg"
						alt="Home"
					/>
					<p>HOME</p>
				</div>
				<div>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR65vKrYldm09kL4qG6EwRAaekumOkrJtAAjg&usqp=CAU"
						alt="phone icon"
					/>
					<p>Phone & Accessories</p>
				</div>
				<div>
					<img
						src="https://m.media-amazon.com/images/I/61ImmGPnU7L._AC_UL320_.jpg"
						alt="travel icon"
					/>
					<p>Travel & Outdoors</p>
				</div>
				<div>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo2Jy3xuaVIWqTmz4KgKw3tBFwKGcS-GlVhmikdYp3tXMFN7xx6cagIGA8trYm7uzWl9Q&usqp=CAU"
						alt="health icon"
					/>
					<p>Health & Fitness</p>
				</div>
				<div>
					<img
						src="https://media.gettyimages.com/photos/rendering-pink-headphones-isolated-on-pink-background-picture-id1051749898?b=1&k=6&m=1051749898&s=170667a&w=0&h=G1P-TDYGCjxwF-yuJ-nKRsHHVn0ROGbwle7jsKf71BM="
						alt="audio icon"
					/>
					<p>AUDIO</p>
				</div>
				<div>
					<img
						src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX6157262.jpg"
						alt="camera icon"
					/>
					<p>FILM</p>
				</div>
			</div>
			{/* <div>
				<Reviews />
			</div> */}
		</>
	);
};
