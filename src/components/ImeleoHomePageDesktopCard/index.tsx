import { Text, Heading, Button, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
}

export default function ImeleoHomePageDesktopCard({ ...props }: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-[32%] md:w-full gap-[18px] p-4 border border-solid bg-gray-50 rounded-[28px]`}
    >
      <div className="mt-1.5 flex flex-col gap-3 self-stretch">
        <div className="flex flex-col items-start gap-6">
          <Img
            src="img_business_person.png"
            width={334}
            height={300}
            alt="Businessperson Image"
            className="h-[300px] w-full rounded-lg object-cover"
          />
          <Button className="flex h-[32px] min-w-[148px] flex-row items-center justify-center rounded-[16px] border border-solid border-blue-900 bg-white-a700 px-[23px] text-center text-[14px] text-blue_gray-800 sm:px-5">
            January 10, 2024
          </Button>
        </div>
        <Heading size="headings" as="h4" className="text-[24px] font-bold leading-7 text-blue-900">
          Why Data-Driven Decision Making is Key for Business Growth
        </Heading>
      </div>
      <Text as="p" className="w-[96%] text-[18px] font-normal leading-[21px] text-blue_gray-700">
        Learn how leveraging software that offers real-time data insights can enhance strategic decisions, boost
        productivity, and drive sustainable growth.
      </Text>
    </div>
  );
}
