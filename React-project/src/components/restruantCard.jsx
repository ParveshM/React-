import { IMG_CDN_URL } from "../utils/constant";

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
      <h4>{sla?.lastMileTravel}: Miles</h4>
      <h4>AvgRating :{avgRating}</h4>
    </div>
  );
};
export default RestrauntCard;
