import axios from "axios";
export default async function request(url, page = 1) {
  const options = {
    method: "GET",
    url,
    params: { page },
  };

  return await axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => console.error(error));
}
