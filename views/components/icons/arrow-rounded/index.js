import clsx from "clsx";

const ArrowRounded = ({
  className = "w-16 h-16",
  strokeWidth = "4px",
  strokeColor = "#FFFFFF",
  rotate = "rotate-90",
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220.82 220.82"
    >
      <circle
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        cx="110.41"
        cy="110.41"
        r="108.76"
      />
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

export default ArrowRounded;
