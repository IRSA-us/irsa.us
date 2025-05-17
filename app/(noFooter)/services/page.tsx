import { promises as fs } from "fs";
import Image from "next/image";
import Tint from "../../Components/Tint";
import Link from "next/link";

interface Service {
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
      </div>
      <div className="w-full flex flex-col md:flex-row pt-[100px] md:fixed md:bottom-0 overflow-auto">
        {services.map((service) => (
          <Link href={"/services/" + service.serviceID} key={service.name}>
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
              <div className="absolute h-full bg-[var(--gold)] w-0 opacity-0 group-hover:w-full group-hover:opacity-80 transition-all duration-700 ease-in-out" />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ServicesPage;
