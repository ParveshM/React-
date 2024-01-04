import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "./constant";
import axios from "axios";

const useRestruant = (id) => {
  const [restruant, setRestraunt] = useState(null);
  const [menu, setMenu] = useState({});

  useEffect(() => {
    getRestruantInfo();
  }, []);
  async function getRestruantInfo() {
    await axios
      .get(FETCH_MENU_URL + id)
      .then((response) => {
        const data = response?.data?.data?.cards[0]?.card?.card?.info;
        const menuData =
          response?.data?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
            ?.cards[1]?.card?.card?.itemCards;
        setMenu(menuData);
        setRestraunt(data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  return { restruant, menu };
};

export default useRestruant;
