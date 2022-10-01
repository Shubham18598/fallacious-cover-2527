import React from "react";
import styles from "./TechInovationCards.module.css";
import { Link } from "react-router-dom";

export const TechInovationCards = ({ articles }) => {
  return (
    <>
      {articles.map((item) => {
        return (
          <Link key={item.id} style={{ textDecoration: "none", color: "gray" }} to={`/campaign/${item.id}`}>
            <div>
              <div className={styles.databox}>
                <div className={styles.centerbox2}>
                  <div className={styles.maincontainer2}>
                    <div className={styles.imghoverzoom2}>
                      <img className={styles.imagewidth2} src={item.imageUrl} alt="food traking" />
                      <h3
                        style={{
                          color: "green",
                          marginLeft: "10px",
                          marginTop: "10px",
                          fontFamily: "'Tajawal', sans-serif;",
                        }}
                      >
                        FUNDING
                      </h3>
                      {/* <span style={{display:"flex",fontSize:"20px"}}>&#9825;</span> */}
                      <h4 className={styles.subheading2}>{item.title}</h4>
                      <p className={styles.description2}>{item.descrition}</p>
                      <div className={styles.containershares}>
                        <h5 className={styles.titlehover2}>{item.category}</h5>
                        <div className={styles.shares2}>
                          <p className={styles.raisedamount}>
                            &#8356; {item.raisedAmount} EUR raised...........
                            {item.percentage}%
                          </p>
                          <p className={styles.progresssymbol2}> </p>

                          <p style={{ fontSize: "20px", marginTop: "10px" }} className="fas">
                            {item.days} days left
                          </p>
                        </div>
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
