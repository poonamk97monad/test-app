import { useState } from "react";
import { useProductService } from "@shared/core/product";

export function usePopularAssetsController() {
  const productProvider = useProductService();
  const productList = [
    {
      id: 1,
      title: "DreamOS - Complete OS UI",
      image: "asset_item.jpg",
      profile: {
        id: 1,
        name: "MICHSKY",
      },
    },
    {
      id: 1,
      title: "DreamOS - Complete OS UI",
      image: "asset_item.jpg",
      profile: {
        id: 1,
        name: "MICHSKY",
      },
    },
    {
      id: 1,
      title: "DreamOS - Complete OS UI",
      image: "asset_item.jpg",
      profile: {
        id: 1,
        name: "MICHSKY",
      },
    },
    {
      id: 1,
      title: "DreamOS - Complete OS UI",
      image: "asset_item.jpg",
      profile: {
        id: 1,
        name: "MICHSKY",
      },
    },
    {
      id: 1,
      title: "DreamOS - Complete OS UI",
      image: "asset_item.jpg",
      profile: {
        id: 1,
        name: "MICHSKY",
      },
    },
    {
      id: 1,
      title: "DreamOS - Complete OS UI",
      image: "asset_item.jpg",
      profile: {
        id: 1,
        name: "MICHSKY",
      },
    },
  ];

  const [popularProducts, setPopularProducts] = useState(productList);

  const setProducts = () => {
    try {
      productProvider
        .getPopularProducts()
        .then((response) => setPopularProducts(response));
    } catch (error) {}
  };

  setProducts();

  return {
    popularProducts,
  };
}
