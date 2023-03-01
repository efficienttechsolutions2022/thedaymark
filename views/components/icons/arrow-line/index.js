import clsx from "clsx";

const ArrowLine = ({
  className = "",
  strokeWidth = "4px",
  strokeColor = "#FFFFFF",
  rotate = "rotate-90",
}) => {
  return (
    <svg
      className={clsx("w-8 h-8 lg:w-10 lg:h-10 xl:w-14 xl:h-14", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220.82 220.82"
    >
      <polyline
        className={clsx("origin-center", rotate)}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        points="72.95 35.79 147.25 110.41 72.95 185.02"
      />
    </svg>
  );
};

export default ArrowLine;
