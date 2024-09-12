import { Button, Img, Text, Heading } from "../components";
import ImeleoHomePageDesktopCard from "../components/ImeleoHomePageDesktopCard";
import React, { Suspense } from "react";

export default function ImeleohomepagedesktopColumn() {
  return (
    <div className="mt-[60px] flex flex-col items-center">
      <div className="container-xs flex flex-col items-center gap-8 md:px-5">
        <div className="flex flex-col items-center gap-12 self-stretch">
          <div className="flex w-[46%] flex-col items-center gap-2 md:w-full">
            <Heading
              size="headings"
              as="h2"
              className="text-[48px] font-semibold text-blue-900 md:text-[44px] sm:text-[38px]"
            >
              Blogs
            </Heading>
            <Text
              size="texts"
              as="p"
              className="self-stretch text-center text-[20px] font-normal leading-6 text-gray-600"
            >
              Explore our blog for expert tips, industry insights, and engaging content on the latest trends. Stay
              informed and inspired!
            </Text>
          </div>
          <div className="flex gap-6 self-stretch md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {[...Array(3)].map((d, index) => (
                <ImeleoHomePageDesktopCard key={"cardList" + index} className="border-blue-100" />
              ))}
            </Suspense>
          </div>
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
  );
}
