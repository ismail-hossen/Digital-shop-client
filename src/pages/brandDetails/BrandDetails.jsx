import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandDetailsCard from "../../components/brand/BrandDetailsCard";

const BrandDetails = () => {
  const { brand } = useParams();
  const [adImages, setAdImages] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.find(
          (d) => d.brandName.toLowerCase() === brand.toLowerCase()
        );
        setAdImages(filteredData?.advertisements);
      });

    fetch(
      `https://digital-shop-server-6afgemw8y-ismail-hosens-projects.vercel.app/products-by-brand/${brand}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [brand]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === adImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex, adImages]);

  return (
    <div className="container mx-auto py-8">
      {/* advertisements slider start*/}
      <div className="relative w-full max-w-screen-2xl mx-auto h-64 md:h-80 lg:h-96">
        <img
          src={adImages[currentImageIndex]}
          alt="Advertisement"
          className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center">
          <button
            className="text-2xl text-white bg-gray-800 bg-opacity-50 p-2 rounded-full transition-transform duration-300 transform hover:scale-110"
            onClick={() => {
              setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? adImages.length - 1 : prevIndex - 1
              );
            }}
          >
            &lt;
          </button>
          <button
            className="text-2xl text-white bg-gray-800 bg-opacity-50 p-2 rounded-full transition-transform duration-300 transform hover:scale-110"
            onClick={() => {
              setCurrentImageIndex((prevIndex) =>
                prevIndex === adImages.length - 1 ? prevIndex : prevIndex + 1
              );
            }}
          >
            &gt;
          </button>
        </div>
      </div>
      {/* advertisements slider end*/}
      <div className="my-16">
        <h1 className="text-3xl font-bold text-gray-800">Products by Brand</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-20 gap-4">
        {products.length == 0 ? (
          <p>Do not available any products for this brand!</p>
        ) : (
          products?.map((product) => (
            <BrandDetailsCard key={product._id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default BrandDetails;
