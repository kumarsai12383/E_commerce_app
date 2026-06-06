import FetchProducts from "./api";

const GetProducts = async () => {
  const products = await FetchProducts();
  return products;
};

export default GetProducts;