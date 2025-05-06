import AccidentTypes from "./AccidentTypes/AccidentTypes";

const HomePageDescription = () => {
    return (
        <div className="flex flex-col gap-10 text-center">
            <h1 className="text-4xl md:text-6xl">IRSA</h1>

            <p className="text-lg">
                Our organization of nearly two dozen staff and consisting of
                both{" "}
                <span className="italic">
                    The Institute of Risk and Safety Analyses
                </span>{" "}
                (The Institute) and
                <span className="italic">
                    The Laboratory of Risk and Safety Analyses
                </span>{" "}
                (The Lab) are dedicated to applying the tools of forensic
                engineering to scientifically diagnose and resolve{" "}
                <span className="text-secondary"> safety challenges</span>,
                <span className="text-secondary"> criminal activities</span>.
                <span className="text-secondary"> accidents</span>, and/or
                <br />
                <br />
                The Institute (established 1974) uses principles of{" "}
                <span className="italic"> Physical Science</span>,
                <span className="italic"> Mathematics</span>,
                <span className="italic"> Computer Science</span>,
                <span className="italic">
                    {" "}
                    3D Reconstruction and Simulation
                </span>{" "}
                as well as related disciplines in order to formulate analyses in
                the fields of
                <span className="text-secondary"> Accident Reconstruction</span>
                ,<span className="text-secondary"> Biomechanics</span>, and
                <span className="text-secondary"> Human Factors</span>. The
                Institute has applied these skills across a broad set of
                applications to fields including but not limited to:
            </p>

            <AccidentTypes />
        </div>
    );
};

export default HomePageDescription;
