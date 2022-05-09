import type { Hotel } from "types.d.js";
import Rate from "@/components/Rate";

interface Props {
  hotel: Hotel;
}

function HotelCard({ hotel }: Props) {
  return (
    <div className="border rounded px-5 py-3 border-red-200">
      <h1 className="text-lg font-bold">{hotel.attributes.name}</h1>
      <Rate rate={hotel.attributes.rate}></Rate>
      <h1>{hotel.attributes.rate}</h1>
    </div>
  );
}

export default HotelCard;
