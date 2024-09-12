import { Button, Img, Heading, Text } from "../../components";
import React from "react";

export default function ImeleohomepagedesktopRowaboutimeleo() {
  return (
    <div className="mt-[60px]">
      <div className="flex flex-col items-center bg-gray-50_01 py-[60px] md:py-5">
        <div className="container-xs flex flex-col items-center gap-12 md:px-5">
          <div className="flex w-[46%] flex-col items-center gap-2 md:w-full">
            <Heading
              size="headings"
              as="h2"
              className="text-[48px] font-semibold text-blue-900 md:text-[44px] sm:text-[38px]"
            >
              About Imeleo
            </Heading>
            <Text
              size="texts"
              as="p"
              className="self-stretch text-center text-[20px] font-normal leading-6 text-gray-600"
            >
              Imeleo provides cutting-edge solutions and expert insights to drive your business success in the digital
              age.
            </Text>
          </div>
          <div className="flex items-center gap-[42px] self-stretch md:flex-col">
            <Img
              src="img_image_516x568.png"
              width={568}
              height={516}
              alt="Feature Image"
              className="h-[516px] w-[48%] rounded-[16px] object-contain md:w-full"
            />
            <div className="flex flex-1 flex-col items-start gap-12 md:self-stretch">
              <div className="flex flex-col gap-8 self-stretch">
                <div className="flex flex-col gap-5">
                  <Heading
                    size="headings"
                    as="h3"
                    className="text-[48px] font-semibold leading-[57px] text-blue-900 md:text-[44px] sm:text-[38px]"
                  >
                    <span className="text-blue_gray-800">We Are Increasing&nbsp;</span>
                    <span className="text-blue-900">Business</span>
                    <span className="text-blue_gray-800">&nbsp;Success With Technology</span>
                  </Heading>
                  <Text as="p" className="text-[18px] font-normal leading-[21px] text-blue_gray-700">
                    At Imeleo, we use technology to help businesses grow, work smarter, and get better results. Our goal
                    is to make it easier for companies to succeed in today&#39;s digital world.
                  </Text>
                </div>
                <div className="flex flex-col gap-[30px]">
                  <div className="flex items-center gap-[18px]">
                    <Img
                      src="img_check_duotone_solid.svg"
                      width={28}
                      height={32}
                      alt="Check Icon"
                      className="h-[32px]"
                    />
                    <Heading
                      as="h4"
                      className="text-[30px] font-semibold text-blue_gray-900 md:text-[28px] sm:text-[26px]"
                    >
                      Problem Solving
                    </Heading>
                  </div>
                  <div className="flex items-center gap-[18px]">
                    <Img
                      src="img_check_duotone_solid.svg"
                      width={28}
                      height={32}
                      alt="Check Icon"
                      className="h-[32px]"
                    />
                    <Heading
                      as="h5"
                      className="text-[30px] font-semibold text-blue_gray-900 md:text-[28px] sm:text-[26px]"
                    >
                      Strategic Growth
                    </Heading>
                  </div>
                  <div className="flex items-center gap-[18px]">
                    <Img
                      src="img_check_duotone_solid.svg"
                      width={28}
                      height={32}
                      alt="Check Icon"
                      className="h-[32px]"
                    />
                    <Heading
                      as="h6"
                      className="text-[30px] font-semibold text-blue_gray-900 md:text-[28px] sm:text-[26px]"
                    >
                      Enhanced Performance
                    </Heading>
                  </div>
                </div>
              </div>
              <Button
                rightIcon={
                  <Img
                    src="img_arrowright_white_a700.svg"
                    width={14}
                    height={24}
                    alt="Arrow Right"
                    className="h-[24px] w-[14px]"
                  />
                }
                className="flex h-[60px] min-w-[176px] flex-row items-center justify-center gap-2.5 rounded-lg bg-blue-900_02 px-[34px] text-center text-[16px] font-bold text-white-a700 sm:px-5"
              >
                View More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
