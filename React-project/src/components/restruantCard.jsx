import { IMG_CDN_URL } from "../constant.js";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  sla,
  avgRating,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="Burger King" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{sla?.lastMileTravel} minutes</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};
export default RestrauntCard;
