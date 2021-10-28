import { extend } from "umi-request";
import { getToken } from "@/utils/auth";

const umiRequest = extend({
  credentials: "same-origin",
  prefix: process.env.API_URL,
});

/* eslint-disable  @typescript-eslint/no-explicit-any */
const request = async (url: string, options: any = {}) => {
  const newOptions = { ...options };
  const token = getToken();
  if (token) {
    newOptions.headers = {
      Authorization: `Bearer ${token}`,
      ...newOptions.headers,
    };
  }

  return umiRequest(url, newOptions);
};

export default request;
