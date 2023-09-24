import axios from "axios";
import { baseUrl } from "../config/baseUrl";
import moment from "moment";


export function paymentRequest({id,data,payment_method,amount,}) {
  const url = `${baseUrl}/api/subscribe-payment/${id}`;

  return new Promise((resolve, reject) => {
    axios
      .post(url, {
        data,
        payment_method,
        amount,
        buy_date:moment().format('YYYY-MM-DD')
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}
