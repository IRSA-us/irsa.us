import classNames from "classnames";

interface Params {
    height?: number;
    mobile?: boolean;
}

const PanelDivider = ({ height = 1, mobile = false }: Params) => {
    return (
        <div
            className={classNames({
                "w-full divider": true,
                "md:hidden": mobile,
            })}
            style={{ height: `${height}px` }}
        />
    );
};

export default PanelDivider;
