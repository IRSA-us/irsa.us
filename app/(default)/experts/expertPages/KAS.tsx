import Picture from "@/app/Components/Picture";
import RouteLink from "@/app/Components/RouteLink";

const KAS = () => {
  return (
    <div className="flex flex-col gap-10 px-0 md:px-[10%] lg:px-[15%] 2xl:px-[25%] items-center">
      <p className="text-center text-2xl font-bold text-secondary italic">
        Kenneth is our CEO and Chief Scientist
      </p>

      <p className="text-center text-xl">
        Dr. Solomon has testified for more than 50 years, more than 2,500 times
        in about 30 states and Territories with specialties in{" "}
        <RouteLink href="/services/biomechanics" label="Bio-Mechanics" />
        ,
        <RouteLink
          href="/services/accident_recon"
          label="Accident Reconstruction"
        />
        , and
        <RouteLink href="/services/human_factors" label="Human Factors" />.
      </p>

      <p className="text-center text-xl">
        He has <RouteLink href="/media_and_publications" label="published" />{" "}
        about 200 peer reviewded papers and authored/co-authored 15 books,
        served as an adjunct professor at UCLA, USC, and other universities. He
        was a senior scientist at RAND for 22 and a half years.
      </p>

      <Picture
        src="/experts/kenneth-a-solomon/p1.jpeg"
        alt="Crash Simulation"
        override
        className="w-6/10 h-full rounded-[8px]"
        unoptimized
      />
    </div>
  );
};

export default KAS;
