import { useState } from "react";
import { restruantList } from "../constant";
import RestrauntCard from "./restruantCard";

function filterData(searchInput, restruants) {
  return restruants.filter((restruant) => {
    if (restruant.info.name.includes(searchInput)) {
      return restruant;
    }
  });
}

const Body = () => {
  const [searchTxt, setSearchInput] = useState();
  const [restruants, SetRestruants] = useState(restruantList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search here"
          value={searchTxt}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchTxt, restruants);
            SetRestruants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restruant-list">
        {restruants.map((restruant) => {
          return <RestrauntCard {...restruant.info} key={restruant.info.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
