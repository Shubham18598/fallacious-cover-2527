import React from "react";
import {  useNavigate } from "react-router-dom";
import styles from "./CrowdFunding.module.css";



export const CrowdFunding = () => {
	const navigate = useNavigate();
	const handleSignup = () => {
		navigate("/login");
	};

	return (
		<>
			<div>
				<div className={styles.crowdfunding}>
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
					<h5 className={styles.lerancrowd}>
						LEARN ABOUT CROWDFUNDING &#10095;
					</h5>
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
			<br />
			<br />
			<div className={styles.interestbtn}>
				<button onClick={handleSignup}>SIGNUP AND SELECT YOUR INTEREST</button>
			</div>
			<div>
				<p className={styles.topcategories}>Or explore our top categories</p>
			</div>
			<br />
			<br />
		</>
	);
};
