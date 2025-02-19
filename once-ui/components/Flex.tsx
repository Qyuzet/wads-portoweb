import React from "react";
import clsx from "clsx";
import styles from "./Flex.module.scss";

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column";
  justify?:
    | "start"
    | "center"
    | "end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";
  align?: "start" | "center" | "end" | "stretch";
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
  gap?: number;
  className?: string;
}

const Flex: React.FC<FlexProps> = ({
  direction = "row",
  justify,
  align,
  wrap,
  gap,
  className,
  children,
  ...props
}) => {
  const flexClasses = clsx(
    styles[`flex-${direction}`],
    justify && styles[`justify-${justify}`],
    align && styles[`align-${align}`],
    wrap && styles[`flex-${wrap}`],
    className
  );

  const style = {
    gap: gap ? `${gap}px` : undefined,
    ...props.style,
  };

  return (
    <div className={flexClasses} style={style} {...props}>
      {children}
    </div>
  );
};

export default Flex;
