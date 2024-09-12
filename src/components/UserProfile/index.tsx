import { Text, Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  userImage?: string;
  userExpertiseTitle?: React.ReactNode;
  userDescription?: React.ReactNode;
}

export default function UserProfile({
  userImage = "img_close_blue_gray_500_64x64.svg",
  userExpertiseTitle = "Technical Expertise",
  userDescription = "Building cutting-edge, high-performing web apps tailored to your business needs. Our solutions ensure seamless user experiences,",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full gap-[18px] p-6 sm:p-5 border-blue_gray-100 border border-solid bg-white-a700 rounded-[28px]`}
    >
      <div className="flex flex-col gap-3.5 self-stretch">
        <Img src={userImage} width={64} height={64} alt="Close Icon" className="h-[64px] w-[64px]" />
        <div className="flex">
          <Heading as="h3" className="text-[30px] font-semibold text-blue-900">
            {userExpertiseTitle}
          </Heading>
        </div>
      </div>
      <Text as="p" className="mb-5 w-full text-[18px] font-normal leading-[21px] text-blue_gray-700">
        {userDescription}
      </Text>
    </div>
  );
}
