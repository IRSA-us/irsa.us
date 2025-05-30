import serviceData from "../../data/services.json";
import Link from "next/link";

const Content = () => {
  const title = "text-secondary text-2xl mb-10";

  return (
    <div className="w-full lg:w-auto h-full flex justify-center gap-5 2xl:gap-10">
      <div className="flex flex-col py-5">
        <h1 className={title}>Main Office</h1>
        <p>5324 Canoga Avenue</p>
        <p>Woodland Hills, CA. 91364</p>
        <br />
        <p>expert@irsa.us</p>
        <p>818.348.1133</p>
      </div>
      <div className="w-[1px] self-stretch bg-[var(--primary)] opacity-50" />
      <div className="flex flex-col py-5">
        <h1 className={title}>The Lab</h1>
        <p>5120 Canoga Avenue</p>
        <p>Woodland Hills, CA. 91364</p>
        <br />
        <p>bmalek@irsa.us</p>
      </div>
      <div className="w-[1px] self-stretch bg-[var(--primary)] opacity-50" />
      <div className="flex flex-col py-5">
        <h1 className={title}>Services</h1>
        <ul className="space-y-1">
          {serviceData.services.map((s) => (
            <li key={s.serviceID}>
              <Link
                href={s.href}
                className="font-bold hover:text-[var(--primary)] transition-colors duration-200"
              >
                <p>{s.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Content;
