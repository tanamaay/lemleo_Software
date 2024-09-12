import { Button, Text, Heading } from "../../components";
import React from "react";

export default function ImeleohomepagedesktopRowOne() {
  return (
    <div>
      <div className="bg-gray-50_02">
        <div className="flex h-[642px] items-start justify-center bg-[url(/images/img_mask_group.png)] bg-cover bg-no-repeat py-[184px] opacity-10 md:h-auto md:py-5">
          <div className="container-xs mb-5 flex justify-center px-14 md:px-5">
            <div className="flex w-[58%] flex-col gap-6 md:w-full">
              <div className="flex flex-col items-center gap-3">
                <Heading
                  as="h1"
                  className="self-stretch text-center text-[60px] font-semibold leading-[72px] tracking-[-0.60px] text-blue-900 md:text-[52px] sm:text-[46px]"
                >
                  Business Software Solutions And Services
                </Heading>
                <Text size="texts" as="p" className="flex text-[20px] font-medium text-blue_gray-900">
                  <a href="#" className="inline font-bold underline">
                    Software
                  </a>
                  <span>&nbsp;services and solutions to take your&nbsp;</span>
                  <a href="#" className="inline font-bold underline">
                    Business to the next level 🚀
                  </a>
                </Text>
              </div>
              <div className="mx-[158px] flex gap-[18px] md:mx-0">
                <Button className="flex h-[46px] w-full flex-row items-center justify-center rounded-lg bg-blue-900_02 px-[34px] text-center text-[16px] font-semibold text-white-a700 sm:px-5">
                  Know more
                </Button>
                <Button className="flex h-[46px] w-full flex-row items-center justify-center rounded-lg border border-solid border-blue-900_02 bg-white-a700 px-[33px] text-center text-[16px] font-semibold text-blue_gray-900_01 sm:px-5">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
