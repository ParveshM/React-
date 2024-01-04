import { useState, useEffect } from "react";

const useRestruantList = () => {
  const [allRestruants, setAllRestruant] = useState([]);
  const [filteredRestruants, setFilteredRestruants] = useState([]);

  useEffect(() => {
    console.log("calling API useEffect");
    getRestruants();
  }, []);

  async function getRestruants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.943811700000001&lng=76.3275467&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setAllRestruant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestruants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      throw new Error(error, "Error in fetching api");
    }
  }
  return { allRestruants, filteredRestruants, setFilteredRestruants };
};

export default useRestruantList;
