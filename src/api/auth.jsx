import axios from "axios";
import { baseUrl } from "../config/baseUrl";

export function loginRequest({ email, password }) {
  const url = `${baseUrl}/api/auth/login`;
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

export function socialLoginRequest({ name, email, provider, key }) {
  const url = `${baseUrl}/api/auth/social/login`;
  return new Promise((resolve, reject) => {
    axios
      .post(url, {
        name,
        email,
        provider,
        key,
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function registerRequest({
  name,
  email,
  password,
  password_confirmation,
  phone,
  address
}) {
  const url = `${baseUrl}/api/auth/register`;
  return new Promise((resolve, reject) => {
    axios
      .post(url, {
        name,
        email,
        password,
        password_confirmation,
        phone,
        address
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}
