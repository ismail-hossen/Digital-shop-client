import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandDetailsCard from "../../components/brand/BrandDetailsCard";

const BrandDetails = () => {
  const { brand } = useParams();
  const [adImages, setAdImages] = useState([]);
  const [products, setProducts] = useState([]);

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

  return (
    <div className="container mx-auto py-8">
      {/* advertisements slider start*/}
      <div className="carousel w-full h-[65vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={adImages[0]} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={adImages[1]} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={adImages[2]} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
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
