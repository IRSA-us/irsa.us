import { promises as fs } from "fs";
import Image from "next/image";
import Tint from "../Components/Tint";
import Link from "next/link";

interface Service {
    serviceID: string;
    name: string;
    description: string;
    imgPath: string;
}

const ServicesPage = async () => {
    const file = await fs.readFile(
        process.cwd() + "/app/data/services.json",
        "utf-8"
    );
    const services: Service[] = JSON.parse(file).services;

    return (
        <div className="w-full flex flex-col pt-[100px]">
            {services.map((service) => (
                <Link
                    href={"/services/" + service.serviceID}
                    key={service.name}
                >
                    <div className="group relative w-full h-[500px] border-1 border-white">
                        <Image
                            src={service.imgPath}
                            fill
                            style={{ objectFit: "cover" }}
                            alt={service.name}
                        />
                        <Tint />
                        <h1 className="absolute w-7/10 text-5xl mx-10 my-20 group-hover:text-[45px] transition-all duration-300">
                            {service.name}
                        </h1>
                        <div className="absolute h-full bg-[var(--gold)] w-0 opacity-0 group-hover:w-full group-hover:opacity-80 transition-all duration-700 ease-in-out" />
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ServicesPage;
