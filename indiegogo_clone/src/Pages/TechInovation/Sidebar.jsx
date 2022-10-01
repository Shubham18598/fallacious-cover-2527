import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./Sidebar.module.css"


export const Sidebar = ({ handleCategory }) => {
  const [drop, setDrop] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [sub, setSub] = useState(true);
  const [sub1, setSub1] = useState(true);


  const handledrop = () => {
    setDrop(!drop);
    setSub(!sub);
  };

  const handledrop2 = () => {
    setDrop2(!drop2);
    setSub1(!sub1);
  };

  const handleSelect = (value) => {
    let value1 = value.toUpperCase();
    handleCategory(value1);
  };

  return (
    <div>
      <div className={styles.wrapper}>
      <p style={{ padding: "10px 10px", width: "200px",fontSize:'18px',fontWeight:'600' }}>Filter Result</p>
        <p style={{ padding: "10px 1px", width: "150px" }}>Category</p>
        <div style={{ padding: "10px 10px", width: "230px" }}>
          <p onClick={handledrop}>
            Tech & Innovation
            {drop ? (
              <FontAwesomeIcon icon={faChevronUp}  style={{marginLeft:"6px"}} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} style={{marginLeft:"6px"}} />
            )}
          </p>
          <div onClick={() => handledrop()}>
            {sub ? (
              <div style={{ display: "block", padding: "10px 10px" }}>
                <p className={styles.pa} onClick={(e) => handleSelect(e.target.innerHTML)}>Audio</p>
                <p className={styles.pa} onClick={(e) => handleSelect(e.target.innerHTML)}>Camera Gear</p>
                <p className={styles.pa} onClick={(e) => handleSelect(e.target.innerHTML)}>Education</p>
              </div>
            ) : (
              <div style={{ display: "none" }}>
                <p></p>
              </div>
            )}
          </div>
        </div>
        <div style={{ padding: "10px 10px", width: "210px" }}>
          <p onClick={handledrop2}>
            Creative Work
            {drop2 ? (
              <FontAwesomeIcon icon={faChevronUp} style={{ marginLeft: "10px" }} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </p>
          <div onClick={() => handledrop2()}>
            {sub1 ? (
              <div style={{ display: "block", width: "200px" }}>
                <p className={styles.P1} onClick={(e) => handleSelect(e.target.innerHTML)}>Art</p>
                <p className={styles.P1} onClick={(e) => handleSelect(e.target.innerHTML)}>Comics</p>
                <p className={styles.P1} onClick={(e) => handleSelect(e.target.innerHTML)}>Film</p>
              </div>
            ) : (
              <div style={{ display: "none" }}>
                <p></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
