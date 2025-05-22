import { FaUserGraduate } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineBadge } from "react-icons/md";
import { FcViewDetails } from "react-icons/fc";
import { FaGear } from "react-icons/fa6";

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
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 items-center lg:items-start justify-center">
            <div className="relative w-full md:w-[70%] lg:w-5/10 xl:w-4/10 2xl:w-[25%] aspect-[4/5] h-auto">
              <Picture
                src={`/staff/engineer/${expert.id}/headshot.png`}
                alt={`${expert.name} Headshot`}
                override
                className="absolute z-10 w-full h-full"
              />
              <Tint alpha={0.4} />
            </div>

            <div className="flex flex-col w-full md:w-[70%] lg:w-5/10 xl:w-4/10 2xl:w-[30%] gap-7 text-2xl lg:pt-10">
              <div className="flex gap-5 items-center">
                <div className="w-[10%] lg:w-[5%]">
                  <MdOutlineBadge
                    className="text-secondary"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>

                <div className="font-bold text-[28px] w-[90%] lg:w-[95%]">
                  {expert.titles && (
                    <StyledList
                      items={expert.titles}
                      conjunction=""
                      conjunction2=" / "
                      inverted
                    />
                  )}
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div className="w-[10%] lg:w-[5%]">
                  <FaUserGraduate
                    className="text-secondary"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="font-bold w-[90%] lg:w-[95%]">
                  {expert.degrees && (
                    <StyledList
                      items={expert.degrees}
                      conjunction=""
                      conjunction2=", "
                      inverted
                    />
                  )}
                </div>
              </div>

              <div className="flex gap-5 items-center">
                <div className="w-[10%] lg:w-[5%]">
                  <HiOutlineMail
                    className="text-secondary"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <p className="w-[90%] lg:w-[95%]">{expert.email}</p>
              </div>
              {expert.CV && (
                <div className="flex gap-5 items-center">
                  <div className="w-[10%] lg:w-[5%]">
                    <FcViewDetails
                      className="text-secondary items-center"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="w-[90%] lg:w-[95%]">
                    <Link
                      href={`/staff/engineer/${expert.id}/${expert.CV}`}
                      target="_blank"
                      className="hover:underline"
                    >
                      CV
                    </Link>
                  </div>
                </div>
              )}
              {expert.specialties && (
                <div className="flex gap-5">
                  <div className="w-[10%] lg:w-[5%]">
                    <FaGear
                      className="text-secondary mt-[5px]"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>

                  <div className="w-[90%] lg:w-[95%]">
                    <StyledList
                      items={expert.specialties}
                      conjunction=""
                      conjunction2=", "
                      inverted
                    />
                  </div>
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
