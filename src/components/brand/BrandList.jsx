const brands = [
  {
    name: "Brand A",
    image: "brandA.jpg",
  },
  {
    name: "Brand B",
    image: "brandB.jpg",
  },
  {
    name: "Brand C",
    image: "brandC.jpg",
  },
  {
    name: "Brand D",
    image: "brandD.jpg",
  },
  {
    name: "Brand E",
    image: "brandE.jpg",
  },
  {
    name: "Brand F",
    image: "brandF.jpg",
  },
];

const BrandList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {brands.map((brand, index) => (
        <div
          key={index}
          className="bg-white rounded-lg overflow-hidden shadow-md"
        >
          <img
            src={`/images/${brand.image}`}
            alt={brand.name}
            className="h-60 w-full object-cover object-center"
          />
          <div className="p-4">
            <p className="text-xl font-semibold mb-2">{brand.name}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all duration-300">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrandList;
