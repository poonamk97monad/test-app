import axios from "axios";
import { config } from "@static/js/env.config";

export class ProductService {
  public getPopularProducts = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      axios({
        method: "get",
        url: config.serverUri + "/products",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 201) {
            resolve();
          }
          reject("Invalid Response");
        })
        .catch((error) => {
          if (error) {
            reject(error);
          }
        });
    });
  };

  public getProductDetails = (id: number): Promise<void> => {
    return new Promise((resolve, reject) => {
      axios({
        method: "get",
        url: config.serverUri + "/products/" + id,
        data: {
          id,
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 201) {
            resolve();
          }
          reject("Invalid Response");
        })
        .catch((error) => {
          if (error) {
            reject(error);
          }
        });
    });
  };
}
