import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BrandDetailsCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="mx-auto h-24 w-24 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain"
      />
      <h2 className="text-xl mt-4 font-semibold text-center">{product.name}</h2>
      <p className="text-gray-600 text-sm mt-2">
        {product.brandName} - {product.type}
      </p>
      <p className="text-gray-700 font-semibold mt-2">
        Price: ${product.price}
      </p>
      <p className="text-yellow-500 mt-2">Rating: {product.rating}</p>
      <div className="mt-4">
        <Link
          to={`/product-details/${product._id}`}
          className="bg-blue-500 text-white p-2 rounded-md mr-2"
        >
          Details
        </Link>
        <button className="bg-green-500 text-white p-2 rounded-md">
          Update
        </button>
      </div>
    </div>
  );
};

export default BrandDetailsCard;

BrandDetailsCard.propTypes = {
  product: PropTypes.object,
};
