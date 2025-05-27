import PanelDivider from "@/app/Components/PanelDivider";
import Picture from "@/app/Components/Picture";
import StyledList from "@/app/Components/StyledList";
import Tint from "@/app/Components/Tint";
import Link from "next/link";
import { FaUserGraduate } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { FcViewDetails } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { Expert } from "../ExpertCard";
import { MdOutlineBadge } from "react-icons/md";
import { expertComponents } from "@/app/Components/expertComponentMap";

interface Props {
  expert: Expert;
}

const Content = ({ expert }: Props) => {
  const PageContent = expert.contentID
    ? expertComponents[expert.contentID]
    : null;

  return (
    <>
      <div className="mt-[125px] mx-2 lg:mx-10">
        <div className="tintedPanel p-10 flex flex-col items-center">
          <h1 className="text-center text-5xl">
            {expert.name}
            <PanelDivider height={2} />
          </h1>
        </div>
      </div>
      <div className="mt-10 mx-2 lg:mx-10">
        <div className="tintedPanel p-10 flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 items-center lg:items-start justify-center">
            <div className="relative w-full md:w-[70%] lg:w-5/10 xl:w-4/10 2xl:w-[25%] aspect-[4/5] h-auto">
              <Picture
                src={`/experts/${expert.id}/headshot.png`}
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
                      separator=" / "
                      conjunction={expert.titles.length <= 2 ? " / " : ""}
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
                      conjunction={expert.degrees.length <= 2 ? ", " : ""}
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
                      href={`/experts/${expert.id}/${expert.CV}`}
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
                      conjunction={expert.specialties.length <= 2 ? ", " : ""}
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

export default Content;
