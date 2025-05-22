import PanelDivider from "@/app/Components/PanelDivider";

const admins = [
  { name: "Wes", title: "Office Manager" },
  { name: "Carol", title: "Administrative Assistant" },
  { name: "Olivia", title: "Case Manager" },
];

const page = () => {
  return (
    <div className="tintedPanel mt-[125px] mx-[10%] px-10 pt-5 pb-15 flex flex-col items-center gap-3">
      <h1 className="text-secondary text-4xl text-center">
        ADMINISTRATIVE STAFF
      </h1>
      <PanelDivider />

      <div className="mt-10 flex flex-col gap-10 w-8/10 lg:w-3/10">
        {admins.map((admin) => (
          <div className="" key={admin.name}>
            <h1 className="text-4xl pb-2">{admin.name}</h1>
            <p className="ml-5 text-xl">{admin.title}</p>
            <PanelDivider />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
