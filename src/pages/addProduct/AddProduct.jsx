import { useState, useEffect } from "react";
import Rating from "react-rating-stars-component";
import { useParams } from "react-router-dom";

function AddProduct() {
  const [rating, setRating] = useState(0);
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/product-by-id/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  const handleRatingChange = (rating) => setRating(rating);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const img = new FormData();
    img.append("image", form[5]?.files[0]);

    // handling image upload
    fetch(import.meta.env.VITE_imgBB_apiKey, {
      method: "POST",
      body: img,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          const pData = {
            image: data.data.url,
            rating,
            name: form.name.value,
            brandName: form.brand.value,
            type: form.type.value,
            price: form.price.value,
            description: form.description.value,
          };

          // upload the product data to the server
          fetch("http://localhost:3000/add-product", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(pData),
          })
            .then((data) => {
              console.log("product added", data);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-6">Add Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              defaultValue={product && product.name}
              placeholder="Name"
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="brand"
              defaultValue={product && product.brandName}
              placeholder="Brand Name"
              className="w-full px-4 py-2 border rounded "
            />
          </div>
          <div className="mb-4">
            <select
              defaultValue={product && product.type}
              name="type"
              className="w-full px-4 py-2 border rounded "
            >
              <option value="">Select Type</option>
              <option value="phone">Phone</option>
              <option value="tab">Tab</option>
              <option value="computer">Computer</option>
              <option value="laptop">Laptop</option>
              <option value="headphone">Headphone</option>
            </select>
          </div>
          <div className="mb-4">
            <input
              type="number"
              name="price"
              defaultValue={product && product.price}
              placeholder="Price"
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="description"
              defaultValue={product && product.description}
              placeholder="Short description"
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Upload Image:</label>
            <input
              type="file"
              defaultValue={product && product.image}
              accept="image/*"
              name="image"
              className="w-full py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <p className="mb-2 text-gray-600">Rating:</p>
            <Rating
              count={5}
              size={30}
              value={product ? product.rating : rating}
              onChange={handleRatingChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all duration-300"
          >
            {product ? "Update" : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
