import RouteLink from "@/app/Components/RouteLink";
import StyledList from "@/app/Components/StyledList";

const KAS = () => {
  return (
    <div className="flex flex-col gap-10 px-0 md:px-[10%] lg:px-[15%] 2xl:px-[25%] items-center">
      <p className="text-center text-xl">
        Dr. Solomon has endeavored in independent Forensic Science research
        since 1971 addressing{" "}
        <RouteLink
          href="/services/accident_recon"
          label="Accident Reconstruction"
          endspc={false}
        />
        ,{" "}
        <RouteLink
          href="/services/biomechanics"
          label="Biomechanics"
          endspc={false}
        />
        , and <RouteLink href="/services/human_factors" label="Human Factors" />{" "}
        as demonstrated by his more than 200 internationally distributed
        publications, reports, and presentations; and his 15 book
        co-authorships. In December of 1998 (after 22 years and 9 months of
        service), he retired as Senior Scientist with the{" "}
        <RouteLink href="https://www.rand.org/" label="RAND Corporation" /> in
        the{" "}
        <span className="italic">
          Department of Engineering and Applied Sciences
        </span>
        . Additionally, he was on the faculty at the RAND Graduate School for 18
        years and taught as an Adjunct Faculty at
        <StyledList
          items={[
            "UCLA",
            "USC",
            "Naval Post-Graduate School",
            "George Mason University",
            "The Orange County Sheriff's Academy",
          ]}
        />
        . Dr. Solomon was a PSR (Professional Services Reserve) from 2000 to
        2006 and a PSCR through July 2007 with the Orange County Sheriff-Coroner
        Department; and served as a{" "}
        <StyledList items={["Commissioner of Policing and Safety"]} /> for the
        City of Calabasas from 2000 through 2005. Additionally, he was a
        court-appointed <StyledList items={["Hearing Officer"]} /> from 1995
        through 2013.
      </p>

      <p className="text-center text-xl">
        He has taught courses in
        <StyledList
          items={[
            "Risk Analyses (Forensic Sciences)",
            "Nuclear Physics",
            "Applied Mathematics",
            "Uncertainty Analyses",
            "Thermodynamics",
          ]}
        />
        , served on numerous Ph.D. Dissertation and Master Thesis committees,
        was a Graduate School Accreditation Officer, and a Graduate School
        Admissions Committee Member.
      </p>

      <p className="text-center text-xl">
        Dr. Solomon has published peer reviewed papers and books in{" "}
        <StyledList items={["Transportation Accidents"]} /> (automotive, trucks,
        motorcycles, bicycles);{" "}
        <StyledList items={["Industrial & Recreational Accidents"]} /> (pressure
        vessels, rotating machinery, forklifts and cranes, exercise &
        recreational equipment, swimming pools, manufacturing and punch
        presses);{" "}
        <StyledList
          items={["slip-or trip-and-fall accidents", "adequacy of warnings"]}
          conjunction2="; and "
        />
        .
      </p>

      <p className="text-center text-xl">
        Only 30% of his work is litigation support; of that, the distribution is
        about 65% to 70% Defense, 25% to 30% Plaintiff, and 5% jointly Plaintiff
        and Defense. He has successfully qualified in courtroom testimony nearly
        2,400 times since 1971. The balance of his practice includes
        <StyledList
          items={[
            "consultation to government",
            "private companies",
            "national laboratories",
            "televised science documentaries",
            "publishing",
          ]}
          conjunction="as well as"
        />
        .
      </p>
    </div>
  );
};

export default KAS;
