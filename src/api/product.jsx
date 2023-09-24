import axios from "axios";
import { baseUrl } from "../config/baseUrl";

export const GetItemRequest = async () => {
    const url = `${baseUrl}/api/items`;
    const res = await axios
      .get(url, {
        headers: {
        //   Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response.data;
      });
    return res;
  };

  export const GetItemByIdRequest = async ({id}) => {
    const url = `${baseUrl}/api/items/${id}`;
    const res = await axios
      .get(url, {
        headers: {
        //   Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response.data;
      });
    return res;
  };

  export const GetSnackRequest = async () => {
    const url = `${baseUrl}/api/item/category/snack`;
    const res = await axios
      .get(url, {
        headers: {
        //   Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response.data;
      });
    return res;
  };