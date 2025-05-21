import { FaUserGraduate } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineBadge } from "react-icons/md";
import { FcViewDetails } from "react-icons/fc";

import Picture from "@/app/Components/Picture";
import engineerData from "../../../data/engineers.json";
import Tint from "@/app/Components/Tint";
import PanelDivider from "@/app/Components/PanelDivider";
import { expertComponents } from "@/app/Components/expertComponentMap";
import Link from "next/link";
import StyledList from "@/app/Components/StyledList";

interface Props {
  params: Promise<{ expertID: string }>;
}

const ExpertPage = async ({ params }: Props) => {
  const { expertID } = await params;
  const experts = engineerData.engineers;
  const expert = experts.find((e: any) => e.id === expertID);

  if (!expert)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <h2 className="text-4xl">
          <span className="text-secondary font-bold">Error 404: </span>
          Expert <span className="underline">{expertID}</span> Not Found.
        </h2>
      </div>
    );

  const PageContent = expert.contentID
    ? expertComponents[expert.contentID]
    : null;

  return (
    <>
      <div className="mt-[125px] mx-10">
        <div className="tintedPanel p-10 flex flex-col items-center">
          <h1 className="text-center text-5xl">
            {expert.name}
            <PanelDivider height={2} />
          </h1>
        </div>
      </div>
      <div className="mt-10 mx-10">
        <div className="tintedPanel p-10 flex flex-col gap-10">
          <div className="flex gap-10 justify-center">
            <div className="relative w-[400px] h-[500px]">
              <Picture
                src={`/staff/engineer/${expert.id}/headshot.png`}
                alt={`${expert.name} Headshot`}
                override
                className="absolute z-10"
              />
              <Tint alpha={0.4} />
            </div>

            <div className="flex flex-col gap-7 font-bold text-2xl pt-10">
              <div className="flex gap-5 items-center">
                <MdOutlineBadge className="text-secondary" size={30} />
                <p>
                  {expert.titles && (
                    <StyledList
                      items={expert.titles}
                      conjunction=""
                      conjunction2=" / "
                      inverted
                    />
                  )}
                </p>
              </div>
              <div className="flex gap-5 items-center">
                <FaUserGraduate className="text-secondary ml-[3px] mr-[2px]" />
                <p>
                  {expert.degrees && (
                    <StyledList
                      items={expert.degrees}
                      conjunction=""
                      conjunction2=", "
                      inverted
                    />
                  )}
                </p>
              </div>

              <div className="flex gap-5 items-center">
                <HiOutlineMail className="text-secondary" size={30} />
                <p>{expert.email}</p>
              </div>
              {expert.CV && (
                <div className="flex gap-5 items-center">
                  <FcViewDetails className="text-secondary" size={30} />
                  <Link
                    href={`/staff/engineer/${expert.id}/${expert.CV}`}
                    target="_blank"
                    className="hover:underline"
                  >
                    CV
                  </Link>
                </div>
              )}
            </div>
          </div>

          <PanelDivider />

          {PageContent && <PageContent />}
        </div>
      </div>
    </>
  );
};

export default ExpertPage;
