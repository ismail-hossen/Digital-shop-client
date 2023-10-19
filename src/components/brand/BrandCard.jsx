import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BrandCard = ({ brand }) => {
  const { brand_name, brand_image } = brand || {};

  return (
    <Link to={`/brand-details/${brand_name}`}>
      <div className="bg-white p-4 rounded-lg shadow-md transition transform hover:scale-105 duration-300 ease-in-out">
        <img
          src={brand_image}
          alt={brand_name}
          className="mx-auto h-24 w-24 lg:h-36 lg:w-36 object-contain"
        />
        <h2 className="text-xl mt-4 font-semibold text-center">{brand_name}</h2>
      </div>
    </Link>
  );
};

export default BrandCard;

BrandCard.propTypes = {
  brand: PropTypes.object,
};
