import axios from "axios";
import { baseUrl } from "../config/baseUrl";

export function paymentRequest(data) {
  const url = `${baseUrl}/api/subscribe-payment`;

  return new Promise((resolve, reject) => {
    axios
      .post(url, {
        data,
        // payment_method,
        // amount,
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}
