import config from "./config";

export const fetchHotels = async () => {
  let response = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/hotels`, {
    method: "GET",
    headers: config,
  });
  let res = await response.json();

  return res;
};
