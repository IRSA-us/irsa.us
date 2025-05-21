import { promises as fs } from "fs";
import Image from "next/image";
import Tint from "../../Components/Tint";
import ServicePageLinks from "./ServicePageLinks";

export interface Service {
  serviceID: string;
  name: string;
  imgPath: string;
}

const ServicesPage = async () => {
  const serviceData = await fs.readFile(
    process.cwd() + "/app/data/services.json",
    "utf-8"
  );
  const services: Service[] = JSON.parse(serviceData).services;

  return (
    <>
      <div className="fixed top-0 left-0 w-screen hidden h-[650px] md:flex items-center justify-center">
        <Image
          src="/image/services/services_page_backdrop.jpg"
          fill
          style={{ objectFit: "cover" }}
          alt={"Services Backdrop"}
        />
        <Tint alpha={0.7} />
        <h1 className="text-7xl z-10">Services</h1>
        <ServicePageLinks services={services} />
      </div>
    </>
  );
};

export default ServicesPage;
