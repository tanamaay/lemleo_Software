"use client";

import { CloseSVG } from "../Input/close";
import { Input, Img, Text } from "./..";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header {...props} className={`${props.className} flex justify-center items-center py-5 bg-blue-900_02`}>
      <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:px-5">
        <Img
          src="img_header_logo.svg"
          width={114}
          height={40}
          alt="Logoimage"
          className="h-[40px] w-[114px] object-contain"
        />
        <ul className="flex flex-wrap gap-11">
          <li className="cursor-pointer">
            <Link href="#">
              <Text as="p" className="text-[18px] font-medium text-white-a700">
                Solutions
              </Text>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="#">
              <Text as="p" className="text-[18px] font-medium text-white-a700">
                Services
              </Text>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="#">
              <Text as="p" className="text-[18px] font-medium text-white-a700">
                About Us
              </Text>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="#">
              <Text as="p" className="text-[18px] font-medium text-white-a700">
                Careers
              </Text>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="#">
              <Text as="p" className="text-[18px] font-medium text-white-a700">
                Why Us
              </Text>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="#">
              <Text as="p" className="text-[18px] font-medium text-white-a700">
                Blogs
              </Text>
            </Link>
          </li>
        </ul>
        <Input
          name="SearchField"
          placeholder={`Search`}
          value={searchBarValue}
          onChange={(e) => setSearchBarValue(e.target.value)}
          prefix={
            <div className="flex h-[22px] w-[24px] items-center justify-center">
              <Img src="img_search.svg" width={24} height={24} alt="Search" className="h-[24px] w-[24px]" />
            </div>
          }
          suffix={
            searchBarValue?.length > 0 ? (
              <CloseSVG onClick={() => setSearchBarValue("")} height={24} width={24} />
            ) : null
          }
          className="flex h-[52px] w-[22%] items-center justify-center gap-3.5 rounded-[26px] bg-white-a700 pl-[18px] pr-3 text-[18px] font-medium text-blue_gray-700 md:w-full"
        />
      </div>
    </header>
  );
}

