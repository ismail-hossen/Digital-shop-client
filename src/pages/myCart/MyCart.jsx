import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { AuthContext } from "../../authContext/AuthContext";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";

const MyCart = () => {
  const { user, watchAddToCart, setWatchAddToCart } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      `https://digital-shop-server-6afgemw8y-ismail-hosens-projects.vercel.app/add-to-cart/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user, watchAddToCart]);

  const handleDelete = (id, name) => {
    fetch(
      `https://digital-shop-server-6afgemw8y-ismail-hosens-projects.vercel.app/delete-from-cart/${id}`,
      { method: "DELETE" }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setWatchAddToCart(true);
          toast.success(`Remove ${name} from your cart!`, {
            position: "top-right",
          });
        }
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.length == 0 ? (
          <p>Have not any product added!</p>
        ) : (
          products?.map((item) => (
            <div key={item._id} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover mx-auto mb-2"
              />
              <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-2">${item.price}</p>
              <div className="flex items-center mb-2">
                <p className="text-yellow-500 mr-2">Rating: {item.rating}/5</p>
                <FaTrash
                  onClick={() => handleDelete(item._id, item.name)}
                  className="text-red-500 cursor-pointer"
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyCart;
