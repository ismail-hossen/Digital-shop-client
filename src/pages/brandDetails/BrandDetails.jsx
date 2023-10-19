import { useParams } from "react-router-dom";

const BrandDetails = () => {
  const { brand } = useParams();
  console.log(brand);
  return <div>brand</div>;
};

export default BrandDetails;
