import type { NextPage } from "next";
import { fetchHotel } from "@/utils/requests/hotel";
import HotelCard from "@/components/HotelCard";
import type { Hotel } from "types.d.js";
import { GetServerSideProps } from "next";

interface Props {
  hotel: Hotel;
}

const HotelWithID: NextPage<Props> = ({ hotel }) => {
  return <HotelCard key={hotel.id} hotel={hotel} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id: queryId } = context.query;
  let id = Number(queryId);

  let { data: hotel } = await fetchHotel(id);
  return {
    props: {
      hotel: hotel,
    },
  };
};

export default HotelWithID;
