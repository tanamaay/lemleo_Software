import React from "react";

const sizes = {
  textxs: "text-[16px] font-normal not-italic",
  texts: "text-[20px] font-normal not-italic",
  textmd: "text-[24px] font-normal not-italic md:text-[22px]",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "textxs",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-800 font-urbanist ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
