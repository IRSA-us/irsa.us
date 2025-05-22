import Picture from "@/app/Components/Picture";
import RouteLink from "@/app/Components/RouteLink";
import StyledList from "@/app/Components/StyledList";

const cdr = () => {
  return (
    <div className="tintedPanel flex flex-col items-center gap-20 py-10 lg:py-15 px-[5%] 2xl:px-[15%]">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <Picture
            src="/image/services/cdr/cdr1.jpg"
            alt="Car Accident"
            override
            className="w-full lg:w-5/10 h-auto"
          />
          <div className="flex flex-col items-center">
            <p className="w-full h-auto text-xl font-bold">
              The Institute of Risk & Safety Analyses uses the{" "}
              <StyledList items={["Bosch Crash Data Retrieval"]} /> Software and
              Hardware to download crash data from supported vehicles:
            </p>
            <ul className="list-disc pl-5 py-7 text-xl font-bold">
              <li>
                <RouteLink
                  href={"/documents/CDR_v21.3_Vehicle_Coverage_List_R1_0_0.pdf"}
                  label="BOSCH Supported Vehicles"
                />
              </li>
              <li>Tesla</li>
              <li>Hyundai/Kia</li>
            </ul>
            <p className="w-full h-auto text-xl font-bold">
              Data is read from AirbagControl Modules (ACM), Roll-over Sensors
              (ROS), and Powertrain Control Modules (PCM) installed in supported
              vehicles.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex flex-col w-full lg:w-5/10">
            <p className="h-auto text-lg">
              The Bosch Crash Data Retrieval System is a proven tool that allows
              Collision Reconstructionists the opportunity to{" "}
              <StyledList items={["image"]} /> crucial crash data parameters
              from a vehicle that has been in an accident. This crash data,
              which is stored in the vehicle’s airbag control module, may be
              used to make informed decisions about the accident based on the
              crash data "
              <StyledList items={["imaged"]} />" from the vehicle in question.
              <br />
              <br />
              Crash Data Recording possesses a proven track record of
              admissibility at trial, providing{" "}
              <StyledList items={["valuable crash evidence"]} /> such as:
            </p>
            <ul className="list-disc pl-5 py-7 font-bold text-lg">
              {[
                "Pre-crash vehicle data",
                "Vehicle speed",
                "Delta-v (change in velocity)",
                "Crash severity",
                "Seat belt status",
                "Throttle position",
                "When the break was applied ignition cycles",
                "Crash pulse data",
              ].map((ev) => (
                <li key={ev}>
                  <span className="text-secondary">{ev}</span>
                </li>
              ))}
            </ul>
          </div>

          <Picture
            src="/image/services/cdr/cdr2.jpg"
            alt="Broken High Heels"
            override
            className="w-full lg:w-5/10 h-auto"
          />
        </div>
      </div>

      <h2 className="text-center flex flex-col items-center font-bold">
        <span className="text-3xl mb-5">NOTICE</span>
        The severity of the crash may affect the ability to read data. Damaged
        modules may not be able to provide accurate data.
        <br />
        <br />
        <span className="underline">Data Retreival Hierarchy:</span>
        <ul className="list-decimal text-left mt-5">
          <li>Plug into car's OBD port</li>
          <li>
            If the port is damaged or inaccessible, direct access to the car's
            module is necessary
          </li>
          <li>
            If the module's data port is inaccessible, it will need to be
            removed from the car and imaged at our lab.
          </li>
          <li>
            If the module is physically damaged, repairs will be attempted, but
            are not guranteed to work.
          </li>
        </ul>
      </h2>
    </div>
  );
};

export default cdr;
