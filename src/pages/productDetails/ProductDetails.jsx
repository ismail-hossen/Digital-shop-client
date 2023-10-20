import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/product-by-id/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  console.log("details", product);

  return (
    <div className="container mx-auto p-4">
      <div className="md:flex md:items-center">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600 text-sm mb-2">{product.brand}</p>
          <p className="text-gray-600 text-sm mb-2">{product.type}</p>
          <p className="text-2xl text-green-600 mb-2">{product.price}</p>
          <p className="text-gray-800 mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-yellow-400 text-2xl mr-1">
              {product.rating}
            </span>
            <span className="text-gray-600">Rating</span>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
