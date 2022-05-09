import { StarIcon } from "@heroicons/react/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/solid";

interface Props {
  rate: number;
}

function Rate({ rate }: Props) {
  return (
    <div className="flex gap-3 items-center">
      {[...Array(5)].map((_, index) => {
        index += 1;
        let isOn = index <= rate;
        return isOn ? (
          <StarIconSolid key={index} className="h-5 w-5 text-yellow-500" />
        ) : (
          <StarIcon key={index} className="h-5 w-5 text-yellow-500" />
        );
      })}
    </div>
  );
}

export default Rate;
