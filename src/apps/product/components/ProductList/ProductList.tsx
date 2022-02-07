import React from "react";
import { Layout } from "@shared/components";

interface ProductListProps {}

export const ProductList: React.FC<ProductListProps> = () => {
  return <Layout title={"Product List | Assets Store"}>This ProductList page</Layout>;
};
