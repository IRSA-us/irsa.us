import engineerData from "../../../data/engineers.json";

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

  return <div className="mt-100">ExpertPage: {expert?.id}</div>;
};

export default ExpertPage;
