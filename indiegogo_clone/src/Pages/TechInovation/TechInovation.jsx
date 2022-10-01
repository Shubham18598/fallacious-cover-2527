import React, { useState, useEffect } from "react";
import axios from "axios";
import { mockapi } from "./mockapi";
import styles from "./TechInovationCards.module.css";
import { TechInovationCards } from "./TechInovationCards";
import { Sidebar } from "./Sidebar";


export const TechInovation = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");

  const options = [
    {
      label: "Trending",
      value: "trending",
      id: 1,
    },
    {
      label: "MostFunding",
      value: "mostfunding",
      id: 2
    },
  ];

  const handleSelectFund = (e) => {
    const value = e.target.value;
    setCategory(value);
    if (value === "mostfunding") {
      axios.get(`https://vd6zqv.sse.codesandbox.io/campaign?_sort=percentage&_order=DESC`).then((res) => {
        return setArticles(res.data);
      });
    }
  };
  const handleQuery = () => {
    axios.get(`https://vd6zqv.sse.codesandbox.io/campaign?category=${query.toUpperCase()}`).then((res) => {
      return setArticles(res.data);
    });
  };

  const handleCategory = (input) => {
    axios.get(`https://vd6zqv.sse.codesandbox.io/campaign?category=${input}`).then((res) => {
      return setArticles(res.data);
    });
  };

  useEffect(() => {
    mockapi().then((res) => {
      // console.log(res);
      setArticles(res.data);
    });
  }, []);

  return (
    <div >
      <div>
        <img src="https://g0.iggcdn.com/assets/explore/desktop/tech-innovation-4120b9cf94492250c4ac5efe9026d85f6aa5e46d4559dab0c9a43ed5968a08db.jpg"
          alt="tech&inovation" width="100%" height="260px" />
      </div>
      <div style={{ position: "absolute", width: "300px", padding: "10px", textAlign: "center" }}>
        <Sidebar handleCategory={handleCategory} />
      </div>
      <div className={styles.inputboxexplore}>
        <input
          type="text"
          placeholder="Search for a Campaigns"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button onClick={() => handleQuery()}>Search</button>
        {/* <div style={{ float: "right", marginRight: "60px", marginTop: "15px" }}> */}
        <label>Sort By </label>
        <select onChange={handleSelectFund}>
          {options.map((option) => (
            <option key={option.id} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "45% 45% 45%",
          gridGap: "20px",
          width: "50%",
        }}
      >
        <TechInovationCards articles={articles} />
      </div>
    </div>
  );
};
