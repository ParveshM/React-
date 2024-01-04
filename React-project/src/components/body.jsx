import { useState } from "react";
import RestrauntCard from "./restruantCard";
import Shimmer from "./shimmer.jsx";
import { Link } from "react-router-dom";
import filterData from "../utils/filterData.js";
import useRestruantList from "../utils/useRestruantList.js";
import useOnline from "../utils/useOnline.js";

const Body = () => {
  const [searchTxt, setSearchInput] = useState("");
  // get the list of restruant and filtered restruantList using custom Hook
  const { allRestruants, filteredRestruants, setFilteredRestruants } =
    useRestruantList();

  // Early return -Not render anything
  if (!allRestruants) return null;
  // if (filteredRestruants.length) return <h1>No match found</h1>;

  const isOnline = useOnline();
  if (!isOnline) return <h1>Looks like you are offline</h1>;

  console.log("Render()");
  return allRestruants?.length === 0 ? (
    <Shimmer />
  ) : (
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
            const data = filterData(searchTxt, allRestruants);
            setFilteredRestruants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restruant-list">
        {filteredRestruants.map((restruant) => {
          return (
            <Link
              to={"/restruant/" + restruant.info.id}
              key={restruant.info.id}
            >
              <RestrauntCard {...restruant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
