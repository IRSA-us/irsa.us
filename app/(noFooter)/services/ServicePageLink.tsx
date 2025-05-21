import { Service } from "./page";
import Link from "next/link";
import Image from "next/image";
import Tint from "@/app/Components/Tint";

interface Props {
  service: Service;
  disabled: boolean;
  onClick: () => void;
}

const ServicePageLink = ({ service, disabled, onClick }: Props) => {
  return (
    <Link
      href={"/services/" + service.serviceID}
      key={service.name}
      className={`${disabled ? "pointer-events-none brightness-50" : ""}`}
      onClick={onClick}
    >
      <div className="group relative w-full h-[500px] md:w-[550px] md:h-[300px] border-1 border-white">
        <Image
          src={service.imgPath + "cover.jpg"}
          fill
          style={{ objectFit: "cover" }}
          alt={service.name}
        />
        <Tint />
        <h1 className="absolute w-1/2 md:w-13/20 text-5xl mx-10 my-20 group-hover:text-[45px] transition-all duration-300">
          {service.name}
        </h1>
        <div
          className={`absolute h-full bg-[var(--gold)] w-0 opacity-0 group-hover:w-full group-hover:opacity-80 transition-all duration-700 ease-in-out ${
            disabled && "w-full"
          }`}
        />
      </div>
    </Link>
  );
};

export default ServicePageLink;
