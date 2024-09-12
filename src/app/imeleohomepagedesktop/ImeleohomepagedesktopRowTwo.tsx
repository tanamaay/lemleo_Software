import { Heading, Img, Text } from "../../components";
import React from "react";

export default function ImeleohomepagedesktopRowTwo() {
  return (
    <div>
      <div className="flex justify-center bg-gray-50_01 py-[60px] md:py-5">
        <div className="container-xs mb-12 flex justify-center md:flex-col md:px-5">
          <div className="flex flex-1 flex-col gap-10 md:self-stretch">
            <div className="flex items-center gap-4 sm:flex-col">
              <Img
                src="img_star_shooting_sharp_regular.svg"
                width={36}
                height={36}
                alt="Founder Image"
                className="h-[36px] w-[36px] sm:w-full"
              />
              <Heading
                size="headings"
                as="h2"
                className="text-[48px] font-semibold text-blue_gray-800 md:text-[44px] sm:text-[38px]"
              >
                <span className="text-blue_gray-800">Meet Our&nbsp;</span>
                <span className="text-blue-900">Founder</span>
              </Heading>
            </div>
            <Text
              size="textmd"
              as="p"
              className="w-[90%] text-[24px] font-normal leading-7 text-blue_gray-700 md:w-full md:text-[22px]"
            >
              <span>With decades of industry experience,&nbsp;</span>
              <span className="font-bold">Mayank</span>
              <span>
                <>
                  &nbsp;is a highly skilled software developer, solution architect and technology entrepreneur. He
                  specializes in building modular and scalable cross platform software solutions.
                  <br />
                  <br />
                  Over the past, he has worked with numerous business, helping them overcome complex business challenges
                  by building innovative technology solutions.
                  <br />
                  <br />
                  Admired by clients, developers and designers alike, his entrepreneurial vision drives&nbsp;
                </>
              </span>
              <span className="font-bold">
                Imeleo, empowering businesses with cutting-edge technology solutions, thus fueling growth and
                innovation.
              </span>
            </Text>
          </div>
          <div className="flex w-[44%] flex-col gap-[30px] md:w-full">
            <Img
              src="img_js1a9972_bg.png"
              width={540}
              height={370}
              alt="Background Image"
              className="h-[370px] rounded-[16px] object-cover"
            />
            <div className="flex flex-col items-start gap-0.5">
              <div className="flex items-center gap-3.5 self-stretch">
                <Heading
                  size="headinglg"
                  as="h3"
                  className="text-[33.99px] font-semibold text-blue-900 md:text-[31px] sm:text-[29px]"
                >
                  Mayank Mahajan
                </Heading>
                <Img src="img_frame.svg" width={32} height={32} alt="Profile Frame" className="h-[32px] w-[32px]" />
              </div>
              <Heading size="headingxs" as="h4" className="text-[22.66px] font-semibold text-blue_gray-900">
                Founder, Imeleo
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
