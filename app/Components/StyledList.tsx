const StyledList = ({
  items,
  separator = ", ",
  conjunction = "and",
}: {
  items: string[];
  separator?: string;
  conjunction?: string;
}) => {
  const n = items.length;
  const gold = "text-[var(--gold)]";

  if (n === 0) return null;
  if (n === 1) return <span className={gold}>{items[0]}</span>;
  if (n === 2)
    return (
      <>
        <span className={gold}>{items[0]}</span>
        {` ${conjunction} `}
        <span className={gold}>{items[1]}</span>
      </>
    );

  return (
    <>
      {items.map((item, i) => (
        <span key={`styledListItem_${item}`}>
          <span className={gold}> {item}</span>
          {i < n - 2
            ? `${separator} `
            : i === n - 2
            ? `${separator} ${conjunction} `
            : ""}
        </span>
      ))}
    </>
  );
};

export default StyledList;
