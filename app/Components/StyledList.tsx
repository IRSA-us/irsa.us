const StyledList = ({
  items,
  separator = ", ",
  conjunction = "and",
  conjunction2 = " and ",
  inverted = false,
}: {
  items: string[];
  separator?: string;
  conjunction2?: string;
  conjunction?: string;
  inverted?: boolean;
}) => {
  const n = items.length;
  const color = inverted ? "" : "text-secondary";
  const altColor = inverted ? "text-secondary" : "";

  if (n === 0) return null;
  if (n === 1) return <span className={color}>{items[0]}</span>;
  if (n === 2)
    return (
      <>
        <span className={color}>{items[0]}</span>
        <span className={altColor}>{`${conjunction2}`}</span>
        <span className={color}>{items[1]}</span>
      </>
    );

  return (
    <>
      {items.map((item, i) => (
        <span key={`styledListItem_${item}`}>
          <span className={color}> {item}</span>
          {i < n - 2 ? (
            <span className={altColor}>{`${separator} `}</span>
          ) : i === n - 2 ? (
            <span className={altColor}>{`${separator} ${conjunction} `}</span>
          ) : (
            ""
          )}
        </span>
      ))}
    </>
  );
};

export default StyledList;
