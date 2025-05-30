import { Service } from "./page";
import Link from "next/link";
import Image from "next/image";
import Tint from "@/app/Components/Tint";

interface Props {
  service: Service;
  clicked: boolean;
  onClick: () => void;
}

const ServicePageLink = ({ service, clicked, onClick }: Props) => {
  return (
    <Link
      href={"/services/" + service.serviceID}
      key={service.name}
      onClick={() => onClick}
      className={clicked ? "pointer-events-none" : ""}
    >
      <div className="group relative w-full h-[500px] lg:w-[550px] lg:h-[300px] border-1 border-white">
        <Image
          src={service.imgPath + "cover.jpg"}
          alt={service.name}
          width={500}
          height={0}
          className="w-full h-full absolute object-cover"
        />
        <Tint alpha={0.5} />
        <h1 className="absolute w-1/2 lg:w-13/20 text-5xl mx-10 my-20 group-hover:scale-98 transition-all duration-300">
          {service.name}
        </h1>
        <div
          className={`absolute h-full bg-[var(--primary)] w-0 opacity-0 group-hover:w-full group-hover:opacity-80 transition-all ease-in-out duration-700 ${
            clicked ? "hidden" : "inline"
          }`}
        />
        <div
          className={`group-hover:inline absolute h-full bg-[var(--primary)] opacity-80 transition-[width] duration-0 ${
            clicked ? "w-full" : "w-0"
          }`}
        />
      </div>
    </Link>
  );
};

export default ServicePageLink;
