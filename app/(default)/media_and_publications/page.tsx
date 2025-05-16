import PanelDivider from "@/app/Components/PanelDivider";
import RouteLink from "@/app/Components/RouteLink";
import StyledList from "@/app/Components/StyledList";
import Tint from "@/app/Components/Tint";
import Image from "next/image";
import { Articles, Books, Other, RAND, Televised } from "./media";
import Picture from "@/app/Components/Picture";

const media = [
  {
    id: "televised",
    name: "Televised Documentaries & News Conferences",
    img: ["/televised/img1.jpg"],
  },
  {
    id: "books",
    name: "BOOKS & EDITORSHIPS",
    img: ["/books/img1.jpg", "/books/img2.jpg"],
  },
  { id: "RAND", name: "RAND", img: ["/RAND/img1.jpg", "/RAND/img2.jpg"] },
  { id: "articles", name: "PUBLISHED ARTICLES", img: [] },
  { id: "other", name: "OTHER REPORTS", img: [] },
];

const page = async () => {
  return (
    <>
      <div className="slideShowContainer relative w-full h-[750px] flex items-center justify-center">
        <Image
          src="/image/media/backdrop.jpg"
          fill
          style={{ objectFit: "cover" }}
          alt={"Media and Publications Backdrop"}
        />
        <Tint alpha={0.6} />
        <h1 className="text-5xl md:text-7xl text-center z-10 pt-[100px] w-9/10">
          Media & Publications
        </h1>
      </div>
      <div className="w-full p-5 md:p-10 lg:px-30">
        <div className="tintedPanel flex flex-col items-center gap-10 py-10 lg:py-15 px-5 2xl:px-70">
          <h1 className="font-bold text-2xl text-center">
            IRSA has collectively published hundreds of{" "}
            <StyledList items={["peer reviewed articles", "books"]} /> on{" "}
            <RouteLink
              href="/services/biomechanics"
              label="Biomechanics"
              endspc={false}
            />
            , warning and labels, and swimming accidents (just to name a few).
            Moreover, Dr. Solomon has written numerous of reports for{" "}
            <RouteLink
              href="https://www.rand.org"
              label="RAND"
              endspc={false}
            />{" "}
            and other articles. IRSA has also been featured on televised
            documentaries and news conferences.
          </h1>

          <PanelDivider />

          <div className="flex flex-col gap-30 overflow-hidden">
            {media.map((m) => (
              <div key={m.id} className="flex flex-col gap-15">
                <h2 className="text-4xl font-bold text-[var(--gold)] text-center">
                  {m.name}
                </h2>
                <div className="flex gap-15 justify-center">
                  {m.img.length > 0 ? (
                    <div className="hidden md:flex w-5/10 flex-col gap-50">
                      {m.img.map((image) => (
                        <Picture
                          src={"/image/media" + image}
                          alt={image}
                          key={image}
                          override
                          className="w-full h-auto"
                        />
                      ))}
                    </div>
                  ) : null}

                  <ul
                    className={`${
                      m.img.length === 0 ? "w-8/10" : "w-full md:w-5/10"
                    } list-disc space-y-3 ml-5 md:ml-0`}
                  >
                    {m.id === "televised" && <Televised />}
                    {m.id === "books" && <Books />}
                    {m.id === "RAND" && <RAND />}
                    {m.id === "articles" && <Articles />}
                    {m.id === "other" && <Other />}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default page;
