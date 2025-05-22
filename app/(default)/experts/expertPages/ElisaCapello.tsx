import RouteLink from "@/app/Components/RouteLink";
import StyledList from "@/app/Components/StyledList";

const ElisaCapello = () => {
  return (
    <div className="flex flex-col gap-10 px-0 md:px-[10%] lg:px-[15%] 2xl:px-[25%] items-center">
      <p className="text-center text-xl">
        Mrs. Capello possesses a{" "}
        <StyledList items={["Bachelor’s of Arts degree"]} /> from California
        State University, Northridge as well as a{" "}
        <StyledList items={["Master’s in Counseling and Guidance"]} /> from
        California Lutheran University. She can create cover letters, resumes,
        conduct salary negotiations, and mock interviews as well as other job
        readiness activities. Mrs. Capello can also{" "}
        <StyledList items={["assess"]} /> an individual’s skills and abilities{" "}
        <StyledList items={["pre and post injury"]} /> to determine whether he
        or she can go back to one’s job, relocate to a new position, or be
        employed at all.{" "}
      </p>

      <p className="text-center text-xl">
        In addition to the above, Mrs. Capello can{" "}
        <StyledList items={["calculate loss of income"]} /> due to the subject
        accident by reviewing medical records, tax forms, pay stubs, and
        researching inflation rates for future projections.{" "}
      </p>

      <p className="text-center text-xl">
        She works with all avenues of employment such as: Labor, Education,
        office settings, and other areas of{" "}
        <RouteLink href="/services/misc" label="vocations" endspc={false} />.{" "}
      </p>
    </div>
  );
};

export default ElisaCapello;
