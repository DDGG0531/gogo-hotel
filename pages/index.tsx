import type { NextPage } from "next";
import { fetchHotels } from "@/utils/requests/hotel";
import type { Hotel } from "types.d.js";
import HotelCard from "@/components/HotelCard";

interface Props {
  hotels: Hotel[];
}

const Home: NextPage<Props> = ({ hotels }: Props) => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-300">
        Hello world!
      </h1>

      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </>
  );
};

export async function getServerSideProps() {
  let { data: hotels } = await fetchHotels();
  return {
    props: {
      hotels: hotels,
    },
  };
}

export default Home;
