import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import Link from "next/link";

const Mobile = () => {
  const hover = "hover:scale-95 hover:text-[var(--primary)]";

  return (
    <div className="w-full flex gap-15 justify-center items-center py-7 border-t-2 border-[var(--primary)]">
      <a href={`tel:${+18183481133}`}>
        <FaPhone className={hover} size={50} />
      </a>
      <a href={`mailto:expert@irsa.us`}>
        <MdEmail className={hover} size={65} />
      </a>
      <Link href={`/map`}>
        <FaMapLocationDot className={hover} size={55} />
      </Link>
    </div>
  );
};

export default Mobile;
