import { AiFillStar } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { IMG_CDN_URL } from "../config";

const ItemCard = ({ cloudinaryImageId, name, price, description }) => {
  console.log(cloudinaryImageId, name, price, description);
  return (
    <div className="space-y-2 w-80 rounded-md p-2 m-5 cursor-pointer border-2 shadow-lg">
      <img
        className="w-full"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="restaurandImg"
      />
      <h2 className="text-lg font-bold">{name}</h2>
      <span className="flex items-center bg-green-300 w-fit p-1 text-sm font-semibold rounded-lg ">
        <BiRupee /> {price/100}
      </span>
      <p>{description}</p>
    </div>
  );
};

export default ItemCard;
