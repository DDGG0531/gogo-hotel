import config from "./config";

export const fetchHotels = async () => {
  let response = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/hotels`, {
    method: "GET",
    headers: config,
  });

  console.log("fetchHotels");
  let res = await response.json();

  return res;
};

export const fetchHotel = async (id: number) => {
  let response = await fetch(
    `${process.env.NEXT_PUBLIC_API_PATH}/hotels/${id}`,
    {
      method: "GET",
      headers: config,
    }
  );

  console.log("fetchHotel with id = ", id);

  let res = await response.json();

  return res;
};
