import request from "@/utils/request";

export const getConfig = (data = {}) => {
  return request({
    url: "http://172.16.1.135:3000/getWX",
    method: "post",
    params: data,
  });
};
