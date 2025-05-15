import classNames from "classnames";

interface Params {
  height?: number;
  mobile?: boolean;
  md?: boolean;
  className?: string;
}

const PanelDivider = ({
  height = 1,
  mobile = false,
  md = false,
  className = "",
}: Params) => {
  return (
    <div
      className={classNames(
        "w-full divider bg-[var(--gold)] opacity-70",
        className,
        { "md:hidden": mobile },
        { "hidden md:inline": md }
      )}
      style={{ height: `${height}px` }}
    />
  );
};

export default PanelDivider;
