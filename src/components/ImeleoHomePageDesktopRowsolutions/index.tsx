import { Button, Img, Text, Heading } from "./..";
import React, { Suspense } from "react";

const data = [
  {
    contentImage: "img_image.png",
    contentTitle: "Content Management",
    contentDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetu",
  },
  {
    contentImage: "img_image_244x336.png",
    contentTitle: "Employee Management",
    contentDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetur ",
  },
  {
    contentImage: "img_image_1.png",
    contentTitle: "Vehicle Management",
    contentDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetur",
  },
  {
    contentImage: "img_image_2.png",
    contentTitle: "Lead Management",
    contentDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetu",
  },
  {
    contentImage: "img_image_3.png",
    contentTitle: "Inventory Management",
    contentDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetur ",
  },
  {
    contentImage: "img_image_4.png",
    contentTitle: "Hospital Management",
    contentDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet, consectetur",
  },
];
interface Props {
  className?: string;
}

export default function ImeleoHomePageDesktopRowsolutions({ ...props }: Props) {
  return (
    <div {...props} className={`${props.className} flex items-center md:px-5 flex-1`}>
      <div className="flex w-full flex-col items-center bg-white-a700 py-[60px] md:py-5">
        <div className="container-xs flex flex-col items-center gap-12 md:px-5">
          <div className="flex w-[46%] flex-col items-center gap-2 md:w-full">
            <Heading
              size="headings"
              as="h1"
              className="text-[48px] font-semibold text-blue-900 md:text-[44px] sm:text-[38px]"
            >
              Solutions
            </Heading>
            <Text
              size="texts"
              as="p"
              className="self-stretch text-center text-[20px] font-normal leading-6 text-gray-900"
            >
              Innovative software solutions tailored to streamline your business operations and maximize efficiency.
            </Text>
          </div>
          <div className="flex flex-col items-center gap-8 self-stretch">
            <div className="grid grid-cols-3 justify-center gap-6 self-stretch md:grid-cols-2 sm:grid-cols-1">
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <div
                    key={"featuresGrid" + index}
                    className="flex w-full flex-col gap-[18px] rounded-[28px] border border-solid border-blue_gray-100 bg-white-a700 p-6 sm:p-5"
                  >
                    <div className="flex flex-col items-start gap-3">
                      <Img
                        src={d.contentImage}
                        width={336}
                        height={244}
                        alt="Content Image"
                        className="h-[244px] w-full rounded-lg object-cover md:h-auto"
                      />
                      <Heading
                        as="h3"
                        className="text-[30px] font-semibold text-blue-900 md:text-[28px] sm:text-[26px]"
                      >
                        {d.contentTitle}
                      </Heading>
                    </div>
                    <Text as="p" className="text-[18px] font-normal leading-[21px] text-blue_gray-700_01">
                      {d.contentDescription}
                    </Text>
                  </div>
                ))}
              </Suspense>
            </div>
            <Button
              rightIcon={
                <Img src="img_arrowright.svg" width={14} height={24} alt="Arrow Right" className="h-[24px] w-[14px]" />
              }
              className="flex h-[52px] min-w-[174px] flex-row items-center justify-center gap-2.5 rounded-lg border border-solid border-blue-900_02 bg-white-a700 px-[33px] text-center text-[16px] font-semibold text-blue_gray-900_01 sm:px-5"
            >
              View More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
