import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constant";
import Shimmer from "./shimmer";
import useRestruant from "../utils/useRestruant";

function RestruanMenu() {
  const { id } = useParams();
  // Get the restruant detail and menu from cutom hook
  const { restruant, menu } = useRestruant(id);

  return !restruant ? (
    <Shimmer />
  ) : (
    <div className="restruant-menu">
      <div>
        <h1>RestruantMenu id: {id}</h1>
        <img
          src={IMG_CDN_URL + restruant.cloudinaryImageId}
          alt={restruant?.name}
          style={{
            width: "200px",
          }}
        />
        <h2>{restruant?.name}</h2>
        <h3>{restruant?.locality}</h3>
        <h3>{restruant?.city}</h3>
        <h3>{restruant?.costForTwo}</h3>
        <h3>{restruant?.avgRating}</h3>
      </div>
      <div>
        <h1>Menu Items</h1>
        <ul>
          {Object.values(menu).map((items) => {
            console.log(items.card?.info?.name);
            return (
              <li key={items.card?.info?.id}> {items.card?.info?.name}</li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default RestruanMenu;
