import classNames from "classnames";

interface Params {
  height?: number;
  mobile?: boolean;
  className?: string;
}

const PanelDivider = ({
  height = 1,
  mobile = false,
  className = "",
}: Params) => {
  return (
    <div
      className={classNames(
        "w-full divider bg-[var(--gold)] opacity-70",
        className,
        { "md:hidden": mobile }
      )}
      style={{ height: `${height}px` }}
    />
  );
};

export default PanelDivider;
