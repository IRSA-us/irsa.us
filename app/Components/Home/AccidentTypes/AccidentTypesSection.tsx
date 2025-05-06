"use client";
import { useEffect, useState } from "react";
import AccidentTypesCover from "./AccidentTypesCover";
import AccidentTypesDropdown from "./AccidentTypesDropdown";
import AccidentTypesButton from "./AccidentTypesButton";

interface Params {
    type: string;
    examples: string[];
    imgPath: string;
}

const AccidentTypesSection = ({ type, examples, imgPath }: Params) => {
    const [isExpanded, setExpanded] = useState(false);

    const [examplesFontSize, setExamplesFontSize] = useState(24);
    useEffect(() => {
        // Function to update font size based on screen width
        const updateFontSize = () => {
            if (window.innerWidth >= 1280) {
                // xl and larger
                setExamplesFontSize(30);
            } else {
                setExamplesFontSize(24);
            }
        };

        // Call on mount and add event listener
        updateFontSize();
        window.addEventListener("resize", updateFontSize);

        // Cleanup listener on unmount
        return () => window.removeEventListener("resize", updateFontSize);
    }, []);

    // Preset pixel values for dropdown menu (necessary for visually pleasing expansion)
    const accidentTypeMargin = 20;
    const dropdownPaddingY = 20;
    const dropdownHeight =
        examples.length * examplesFontSize +
        dropdownPaddingY +
        accidentTypeMargin;

    return (
        <div
            className="h-[70px] lg:h-[100px] w-full border-1 rounded-sm"
            style={{
                marginBottom: isExpanded
                    ? `${dropdownHeight}px`
                    : `${accidentTypeMargin}px`,
                transition: "margin-bottom 300ms ease-in-out",
            }}
        >
            <div className="w-full h-full flex items-center justify-center relative">
                <AccidentTypesCover src={imgPath} />
                <div className="w-full flex justify-between items-center absolute px-2 lg:px-4">
                    <p className="text-secondary w-3/4 text-xl lg:text-3xl text-left">
                        {type}
                    </p>
                    <AccidentTypesButton
                        onClick={() => setExpanded((prev) => !prev)}
                    />
                </div>
                <AccidentTypesDropdown
                    expanded={isExpanded}
                    examples={examples}
                    fontSize={examplesFontSize}
                    paddingY={dropdownPaddingY}
                />
            </div>
        </div>
    );
};

export default AccidentTypesSection;
