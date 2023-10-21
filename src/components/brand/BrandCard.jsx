import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BrandCard = ({ brand }) => {
  const { brandName, brandImage } = brand || {};

  return (
    <Link to={`/brand-details/${brandName}`} className="block p-4">
      <div className="bg-white p-4 rounded-lg  dark:bg-gray-500 shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <div className="relative w-36 h-36 mx-auto lg:w-44 lg:h-44">
          <img
            src={brandImage}
            alt={brandName}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <h2 className="text-xl mt-4 font-semibold text-center dark:text-gray-200">
          {brandName}
        </h2>
      </div>
    </Link>
  );
};

export default BrandCard;

BrandCard.propTypes = {
  brand: PropTypes.object,
};
