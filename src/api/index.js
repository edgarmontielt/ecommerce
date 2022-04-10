import axios from "axios";
import { URL } from "../config";

const instance = axios.create({
  baseURL: URL,
});

const get = async (url) => {
  return await instance.get(url, {
    withCredentials: true,
  });
};

const post = async (url, data) => {
  return await instance.post(url, data, {
    withCredentials: false,
  });
};

const postProducts = async (url, data) => {
  return await instance.post(url, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}
  })
}

export default instance;
export { get, post, postProducts };
