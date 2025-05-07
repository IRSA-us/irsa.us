interface Props {
    params: Promise<{ serviceID: string }>;
}

const ServicePage = async ({ params }: Props) => {
    const { serviceID } = await params;

    return <div className="pt-[500px]">{serviceID}</div>;
};

export default ServicePage;
