import { ProductService } from "./productService";

const createProductService = () => {
  return new ProductService();
};

let product;
const useProductService = () => {
  if (product) {
    return product;
  }
  return createProductService();
};

export { useProductService };
