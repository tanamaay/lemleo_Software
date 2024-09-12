import { Img, Button, Heading, Text } from "../components";
import Link from "next/link";
import React from "react";

export default function ImeleohomepagedesktopRowThree() {
  return (
    <div className="mt-[108px]">
      <div className="flex justify-center bg-gray-50_01 py-[58px] md:py-5">
        <div className="container-xs flex justify-center md:px-5">
          <div className="flex w-full flex-col items-center">
            <div className="flex w-[46%] flex-col items-center gap-2 md:w-full">
              <Link href="#" className="md:text-[44px] sm:text-[38px]">
                <Heading size="headings" as="h2" className="text-[48px] font-semibold text-blue-900">
                  Contact Us
                </Heading>
              </Link>
              <Text
                size="texts"
                as="p"
                className="self-stretch text-center text-[20px] font-normal leading-6 text-gray-600"
              >
                Reach out to discuss how we can transform your business with tailored solutions and expert support.
              </Text>
            </div>
            <div className="relative mt-[-38px] h-[600px] self-stretch">
              <div className="absolute bottom-0.5 left-0 right-0 m-auto h-[460px] flex-1 rounded-[52px] bg-blue-900">
                <Img
                  src="img_abstract_design.svg"
                  width={1200}
                  height={408}
                  alt="Abstract Design"
                  className="absolute left-0 right-0 top-0 m-auto h-[408px] w-full flex-1"
                />
                <div className="absolute bottom-0 right-[7%] top-0 my-auto flex h-max w-[48%] flex-col items-start gap-8">
                  <div className="flex flex-col gap-[22px] self-stretch">
                    <div className="flex flex-col gap-2">
                      <Heading
                        size="headingxl"
                        as="h3"
                        className="text-[48px] font-bold leading-[57px] text-white-a700 md:text-[44px] sm:text-[38px]"
                      >
                        We help you to grow your business faster & easier.
                      </Heading>
                      <Text as="p" className="text-[16px] font-normal leading-[19px] text-gray-50_01">
                        Partner with us to simplify the path to your success. We&#39;ll make reaching your business
                        goals faster and easier than ever
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3.5">
                      <div className="flex items-center gap-3">
                        <Img
                          src="img_call_white_a700.png"
                          width={32}
                          height={32}
                          alt="Phone Icon"
                          className="h-[32px] w-[32px] self-end object-cover"
                        />
                        <Heading
                          as="h4"
                          className="text-[30px] font-semibold text-white-a700 md:text-[28px] sm:text-[26px] sm:hidden "
                        >
                          +91-8873-33-8873
                        </Heading>
                      </div>
                      <div className="flex items-center gap-3 sm:hidden">
                        <Img
                          src="img_envelope_regular.svg"
                          width={32}
                          height={32}
                          alt="Email Icon"
                          className="h-[32px] w-[32px]"
                        />
                        <Heading
                          as="h5"
                          className="text-[30px] font-semibold text-white-a700 md:text-[28px] sm:text-[26px] sm:hidden"
                        >
                          contact@imeleo.com
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <Button className="flex h-[54px] min-w-[136px] flex-row items-center justify-center rounded-[10px] bg-white-a700 px-6 text-center text-[18px] font-semibold text-blue-900_02 sm:px-5 sm:hidden">
                    Contact Us
                  </Button>
                </div>
              </div>
              <Img
                src="img_image_600x512.png"
                width={512}
                height={600}
                alt="Decorative Image"
                className="absolute bottom-0 left-0.5 top-0 my-auto h-[600px] w-[42%] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
