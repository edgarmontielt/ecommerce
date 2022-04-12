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

const getProducts = async (url, data) => {
  return await instance.get(url, {
    headers: {
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ5NTM3Njc5LCJleHAiOjE2NTIxMjk2Nzl9.vTlFRa4BEKzv6YFbuUdt7xCv0MU0CqSeLHFGHx7cuzs",
    },
  });
};

const postProducts = async (url, data) => {
  return await instance.post(url, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export default instance;
export { get, post, postProducts, getProducts };
