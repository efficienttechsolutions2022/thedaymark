import clsx from "clsx";

export default function Container({
  xPadding = true,
  yPadding = "",
  className,
  children,
  propRef,
  style = {},
}) {
  return (
    <div
      ref={propRef}
      className={clsx(
        "w-full flex relative h-full",
        xPadding ? "px-4 xl:px-8" : "px-0",
        yPadding ? yPadding : "py-0",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}
