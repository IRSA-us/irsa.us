import { promises as fs } from "fs";
import Tint from "@/app/Components/Tint";
import Image from "next/image";
import { serviceComponents } from "@/app/Components/serviceComponentMap";
import Footer from "@/app/Components/Footer";

interface Props {
  params: Promise<{ serviceID: string }>;
}

interface Service {
  serviceID: string;
  name: string;
  subtitle: string;
}

const ServicePage = async ({ params }: Props) => {
  const { serviceID } = await params;

  const serviceData = await fs.readFile(
    process.cwd() + "/app/data/services.json",
    "utf-8"
  );
  const services: Service[] = JSON.parse(serviceData).services;
  const service = services.find((s) => s.serviceID === serviceID);

  if (!service)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <h2 className="text-4xl">
          <span className="text-secondary font-bold">Error 404 </span>
          Service Not Found: <span className="underline">{serviceID}</span>
        </h2>
      </div>
    );

  const serviceTitle = service?.name;
  const serviceSubTitle = service?.subtitle;
  const mainImageFP = "/image/services/" + serviceID + "/main.jpg";
  const PageContent = serviceComponents[service.serviceID];

  return (
    <>
      <div className="slideShowContainer relative w-full h-[750px] flex items-center justify-center">
        <Image
          src={mainImageFP}
          fill
          alt={serviceID + " Page Main Image"}
          style={{ objectFit: "cover" }}
        />
        <Tint alpha={0.75} />
        <div className="z-1 pt-[100px] flex flex-col items-center gap-10">
          <h1 className="text-5xl md:text-7xl text-center">{serviceTitle}</h1>
          <h2 className="text-md md:text-2xl text-center text-[var(--gold)] font-bold">
            {serviceSubTitle}
          </h2>
        </div>
      </div>
      <div className="w-full p-5 md:p-10 lg:px-30">
        {PageContent ? (
          <PageContent />
        ) : (
          <div>
            ERROR 404 <span className="text-[var(--gold)]">{serviceID}</span>{" "}
            Service Not Found.
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ServicePage;
