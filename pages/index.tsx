import type { NextPage } from "next";
import { fetchHotels } from "@/utils/requests/hotel";
import type { Hotel } from "types.d.js";
import HotelCard from "@/components/HotelCard";
import Link from "next/link";

interface Props {
  hotels: Hotel[];
}

const Home: NextPage<Props> = ({ hotels }: Props) => {
  return (
    <>
      <Link href="/hotels/1">
        <a>Go to hotel 1</a>
      </Link>

      <Link href="/hotels/2">
        <a>Go to hotel 2</a>
      </Link>
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
