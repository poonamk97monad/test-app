import React from "react";
import { Layout } from "@shared/components";
import { PackageEdit } from "./update/PackageEdit";

interface ProductEditProps {}

export const ProductEdit: React.FC<ProductEditProps> = () => {
  return <Layout title={"Product Edit | Assets Store"}><PackageEdit/></Layout>;
};
