import Tint from "../../Tint";
import Image from "next/image";

const AccidentTypesCover = ({ src }: { src: string }) => {
    return (
        <>
            <Image
                src={src}
                alt="transportation"
                fill
                style={{ objectFit: "cover" }}
                className="absolute rounded-sm"
            />
            <Tint className="rounded-sm" />
        </>
    );
};

export default AccidentTypesCover;
