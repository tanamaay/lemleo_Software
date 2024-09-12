import { Img, Text, Heading } from "./..";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer {...props} className={`${props.className} flex flex-col mt-[150px]`}>
      <div className="flex justify-center self-stretch bg-blue-900 py-14 sm:py-10 md:py-8">
        <div className="container-xs flex flex-wrap items-start justify-between gap-5 md:flex-col md:px-5">
          <div className="flex w-[26%] flex-col gap-9 md:w-full">
            <div className="flex flex-col gap-3">
              <Img
                src="img_logo.svg"
                width={246}
                height={88}
                alt="Company Logo"
                className="h-[88px] w-[78%] object-contain"
              />
              <Heading
                as="h3"
                className="text-[30px] font-semibold leading-9 text-white-a700 lg:text-[28px] md:text-[26px]"
              >
                <span className="font-black">Business Software&nbsp;</span>
                <span className="font-medium">Solutions And Services</span>
              </Heading>
            </div>
            <div className="flex w-[80%] justify-between gap-5 md:w-full">
              <Img
                src="img_facebook_brands_solid.svg"
                width={32}
                height={32}
                alt="Facebook Icon"
                className="h-[32px] w-[32px]"
              />
              <Img
                src="img_linkedin_brands_solid.svg"
                width={28}
                height={32}
                alt="Linkedin Icon"
                className="h-[32px]"
              />
              <Img
                src="img_instagram_brands_solid.svg"
                width={28}
                height={32}
                alt="Instagram Icon"
                className="h-[32px]"
              />
              <Img
                src="img_youtube_brands_solid.svg"
                width={36}
                height={32}
                alt="Youtube Icon"
                className="h-[32px]"
              />
              <Img
                src="img_x_twitter_brands_solid.svg"
                width={32}
                height={32}
                alt="Twitter Icon"
                className="h-[32px] w-[32px]"
              />
            </div>
          </div>
          <div className="flex w-[44%] items-center justify-between gap-5 md:w-full md:flex-col">
            <div className="flex w-[28%] flex-col items-start gap-11 md:w-full">
              <Heading size="headingxs" as="h4" className="text-[24px] font-semibold text-white-a700 lg:text-[22px]">
                Links
              </Heading>
              <ul className="flex flex-col items-start gap-[18px]">
                <li>
                  <Link href="About" target="_blank" rel="noreferrer">
                    <Text as="p" className="text-[16px] font-normal text-white-a700">
                      About
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="Services" target="_blank" rel="noreferrer">
                    <Text as="p" className="text-[16px] font-normal text-white-a700">
                      Services
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="Solutions" target="_blank" rel="noreferrer">
                    <Text as="p" className="text-[16px] font-normal text-white-a700">
                      Solutions
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text as="p" className="text-[16px] font-normal text-white-a700">
                      Why Us
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text as="p" className="text-[16px] font-normal text-white-a700 ">
                      Contact Us
                    </Text>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex w-[40%] flex-col items-start gap-11 md:w-full">
              <Heading size="headingxs" as="h4" className="text-[24px] font-semibold text-white-a700 lg:text-[22px]">
                Services
              </Heading>
              <ul className="flex flex-col items-start gap-[18px]">
                <li>
                  <Link href="#">
                    <Text as="p" className="text-[16px] font-normal text-white-a700">
                      Web App Dev
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text as="p" className="text-[16px] font-normal text-white-a700">
                      Mobile App Dev
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text as="p" className="text-[16px] font-normal text-white-a700">
                      IT Consulting
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text as="p" className="text-[16px] font-normal text-white-a700">
                      Custom Software
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text as="p" className="text-[16px] font-normal text-white-a700">
                      Cloud Services
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text as="p" className="text-[16px] font-normal text-white-a700">
                      Data Engineering
                    </Text>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex w-[30%] flex-col items-start gap-11 md:w-full">
              <Heading size="headingxs" as="h4" className="text-[24px] font-semibold text-white-a700 lg:text-[22px]">
                Solutions
              </Heading>
              <ul className="flex flex-col items-start gap-[18px]">
                <li>
                  <Link href="#">
                    <Text as="p" className="text-[16px] font-normal text-white-a700">
                      Content Management
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text as="p" className="text-[16px] font-normal text-white-a700">
                      Employee Management
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text as="p" className="text-[16px] font-normal text-white-a700">
                      Vehicle Management
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text as="p" className="text-[16px] font-normal text-white-a700">
                      Lead Management
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text as="p" className="text-[16px] font-normal text-white-a700">
                      Inventory Management
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text as="p" className="text-[16px] font-normal text-white-a700">
                      Hospital Management
                    </Text>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-[14%] flex-col items-start gap-12 md:w-full">
            <Heading size="headingxs" as="h4" className="text-[24px] font-semibold text-white-a700 lg:text-[22px] ">
              Contact
            </Heading>
            <div className="flex flex-col gap-[22px] self-stretch">
              <div className="flex items-center gap-3">
                <Img src="img_call.svg" width={24} height={24} alt="Phone Icon" className="h-[24px] w-[24px]" />
                <Text as="p" className="self-end text-[16px] font-normal text-white-a700">
                  +91-8873-33-8873
                </Text>
              </div>
              <div className="flex items-center gap-3">
                <Img src="img_envelope_regular.svg" width={24} height={24} alt="Email Icon" className="h-[24px] w-[24px]" />
                <Text as="p" className="text-[16px] font-normal text-white-a700">
                  contact@imeleo.com
                </Text>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Img src="img_location_dot_regular.svg" width={18} height={24} alt="Location Icon" className="h-[24px]" />
                <Text as="p" className="text-[16px] font-normal text-white-a700">
                  Noida Uttar Pradesh
                </Text>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
