import React from "react";
import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
  title: "Imeleo Home - Business Software Solutions And Services",
  description:
    "Discover Imeleo\\'s innovative software solutions and services designed to elevate your business efficiency and growth. Explore our offerings from content to hospital management, web and app development, IT consulting, and more.",
  //ogTitle:'...'
};

export default function ImeleoHomePageDesktopPage() {
  return <Page />;
}
