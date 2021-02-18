import axios from "axios";
export const makeRequest = async (targetUrl, method, data) => {
  if (targetUrl.startsWith("/")) {
    targetUrl = process.env.VUE_APP_HOST + targetUrl;
  }
  if (!data) {
    data = "";
  }
  const result = await axios.request({
    url: targetUrl,
    method,
    responseType: "json",
    data: JSON.stringify({ ...data }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + localStorage.getItem("user")
    }
  });
  return result;
};
