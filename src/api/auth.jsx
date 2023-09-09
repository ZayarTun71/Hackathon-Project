import axios from "axios";
import { baseUrl } from "../config/baseUrl";


const url = `${baseUrl}/api/auth/login`;

export function loginRequest({ email, password }) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, {
        email,
        password,
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}