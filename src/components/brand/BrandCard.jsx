import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BrandCard = ({ brand }) => {
  const { brandName, brandImage } = brand || {};

  return (
    <Link to={`/brand-details/${brandName}`}>
      <div className="bg-white p-4 rounded-lg shadow-md transition transform hover:scale-105 duration-300 ease-in-out">
        <img
          src={brandImage}
          alt={brandName}
          className="mx-auto h-24 w-24 lg:h-36 lg:w-36 object-contain"
        />
        <h2 className="text-xl mt-4 font-semibold text-center">{brandName}</h2>
      </div>
    </Link>
  );
};

export default BrandCard;

BrandCard.propTypes = {
  brand: PropTypes.object,
};
