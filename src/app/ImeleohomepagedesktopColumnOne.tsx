import { Text, Heading } from "../components";
import UserProfile from "../components/UserProfile";
import React, { Suspense } from "react";

const data = [
  {
    userImage: "img_close_blue_gray_500_64x64.svg",
    userExpertiseTitle: "Technical Expertise",
    userDescription:
      "Building cutting-edge, high-performing web apps tailored to your business needs. Our solutions ensure seamless user experiences,",
  },
  {
    userImage: "img_user_blue_gray_500_64x64.svg",
    userExpertiseTitle: "Technical Expertise",
    userDescription:
      "Putting business first, providing tailored IT solutions based on the unique needs of each business",
  },
  {
    userImage: "img_floating_icon_blue_gray_500.svg",
    userExpertiseTitle: "Technical Expertise",
    userDescription:
      "Implementing thorough testing and quality checks to deliver high-performing and secure IT solutions.",
  },
  {
    userImage: "img_floating_icon_blue_gray_500_64x64.svg",
    userExpertiseTitle: "Technical Expertise",
    userDescription: "Offering timely support and quick resolution of issues to minimize downtime and disruptions.",
  },
  {
    userImage: "img_close_64x64.svg",
    userExpertiseTitle: "Innovation",
    userDescription:
      "Continuously adopting and integrating new technologies to stay competitive and offer clients cutting-edge solutions.",
  },
  {
    userImage: "img_floating_icon_64x64.svg",
    userExpertiseTitle: "Scalability",
    userDescription: "Providing scalable IT infrastructure and services that grow as the client&#39;s business grows.",
  },
];

export default function ImeleohomepagedesktopColumnOne() {
  return (
    <div className="mt-[60px] flex flex-col items-center">
      <div className="container-xs flex flex-col items-center gap-12 md:px-5">
        <div className="flex w-[46%] flex-col items-center gap-2 md:w-full">
          <Heading
            size="headings"
            as="h2"
            className="text-[48px] font-semibold text-blue-900 md:text-[44px] sm:text-[38px]"
          >
            Why Choose Us
          </Heading>
          <Text
            size="texts"
            as="p"
            className="self-stretch text-center text-[20px] font-normal leading-6 text-gray-600"
          >
            rusted expertise, cutting-edge technology, and a customer-first approach to drive your success.
          </Text>
        </div>
        <div className="grid grid-cols-3 justify-center gap-6 self-stretch md:grid-cols-2 sm:grid-cols-1">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <UserProfile {...d} key={"technicalGrid" + index} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
