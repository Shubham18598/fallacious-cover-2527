import React from "react";
import { Link } from "react-router-dom";

import styles from "./SlideShow.module.css";

export const ShowArticles = ({ articles }) => {
  return (
    <>
      {articles.map((item) => {
        return (
          <Link key={item.id} style={{ textDecoration: "none", color: "gray" }} to={`/campaign/${item.id}`}>
            <div>
              <div className={styles.centerbox}>
                <div className={styles.maincontainer}>
                  <div className={styles.imghoverzoom}>
                    <img className={styles.imagewidth} src={item.imageUrl} alt="food traking" />
                    <h3
                      style={{
                        color: "green",
                        marginLeft: "10px",
                        marginTop: "15px",
                        fontFamily: "Tajawal, sans-serif",
                      }}
                    >
                      <p>FUNDING</p>
                    </h3>
                    {/* <span style={{display:"flex",fontSize:"20px"}}>&#9825;</span> */}
                    <p className={styles.subheading}>{item.title}</p>
                    <p className={styles.description}>{item.descrition}</p>
                    <div className={styles.containershares2}>
                      <p className={styles.titlehover}>{item.category}</p>
                      <div className={styles.shares}>
                        <p>
                          &#8356; {item.raisedAmount} EUR raised.........
                          {item.percentage}%
                        </p>
                        <p className={styles.progresssymbol}> </p>
                        <i className="fas fa-clock"></i>
                        <p className="fas">
                          {item.days} days left
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};
