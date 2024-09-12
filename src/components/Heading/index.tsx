import React from "react";

const sizes = {
  headingxs: "text-[22px] font-semibold",
  headings: "text-[24px] font-bold md:text-[22px]",
  headingmd: "text-[30px] font-semibold md:text-[28px] sm:text-[26px]",
  headinglg: "text-[33px] font-semibold md:text-[31px] sm:text-[29px]",
  headingxl: "text-[48px] font-bold md:text-[44px] sm:text-[38px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "headingmd",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue-900 font-urbanist ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
