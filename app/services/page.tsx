import { promises as fs } from "fs";
import Image from "next/image";
import Tint from "../Components/Tint";

interface Service {
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
                <div
                    className="relative w-full h-[500px] border-1 border-white"
                    key={service.name}
                >
                    <Image
                        src={service.imgPath}
                        fill
                        style={{ objectFit: "cover" }}
                        alt={service.name}
                    />
                    <Tint />
                    <h1 className="absolute text-5xl mx-10 my-15">
                        {service.name}
                    </h1>
                </div>
            ))}
        </div>
    );
};

export default ServicesPage;
