import { promises as fs } from "fs";
import Tint from "@/app/Components/Tint";
import Image from "next/image";
import { serviceComponents } from "@/app/Components/componentsMap";

interface Props {
    params: Promise<{ serviceID: string }>;
}

interface Service {
    serviceID: string;
    name: string;
}

const ServicePage = async ({ params }: Props) => {
    const { serviceID } = await params;

    const serviceData = await fs.readFile(
        process.cwd() + "/app/data/services.json",
        "utf-8"
    );
    const services: Service[] = JSON.parse(serviceData).services;

    const serviceTitle = services.find((s) => s.serviceID === serviceID)?.name;
    const mainImageFP = "/image/services/" + serviceID + "/main.jpg";
    const PageContent = serviceComponents[serviceID];

    return (
        <>
            <div className="relative w-full h-[500px] flex items-center justify-center">
                <Image
                    src={mainImageFP}
                    fill
                    alt={serviceID + " Page Main Image"}
                    style={{ objectFit: "cover" }}
                />
                <Tint alpha={0.5} />
                <h1 className="text-5xl z-1 pt-[100px] text-center">
                    {serviceTitle}
                </h1>
            </div>
            <div className="w-full p-10">
                {PageContent ? (
                    <div className="border-1">
                        <PageContent />
                    </div>
                ) : (
                    <div>
                        404 <span>{serviceID}</span> Service Not Found.
                    </div>
                )}
            </div>
        </>
    );
};

export default ServicePage;
