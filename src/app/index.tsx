import Footer from "../components/Footer";
import Header from "../components/Header";
import ImeleoHomePageDesktopRowsolutions from "../components/ImeleoHomePageDesktopRowsolutions";
import ImeleoHomePageDesktopRowsolutions2 from "../components/services";
import ImeleohomepagedesktopColumn from "./ImeleohomepagedesktopColumn";
import ImeleohomepagedesktopColumnOne from "./ImeleohomepagedesktopColumnOne";
import ImeleohomepagedesktopRowOne from "./ImeleohomepagedesktopRowOne";
import ImeleohomepagedesktopRowThree from "./ImeleohomepagedesktopRowThree";
import ImeleohomepagedesktopRowTwo from "./ImeleohomepagedesktopRowTwo";
import ImeleohomepagedesktopRowaboutimeleo from "./ImeleohomepagedesktopRowaboutimeleo";
import React from "react";

export default function ImeleoHomePageDesktopPage() {
  return (
    <div className="w-full bg-white-a700">
      <Header />
      <div>
        <ImeleohomepagedesktopRowOne />
        <div className="flex flex-col">
          <ImeleoHomePageDesktopRowsolutions />
          <ImeleoHomePageDesktopRowsolutions2 />
        </div>
        <ImeleohomepagedesktopColumn/>
        <ImeleohomepagedesktopRowaboutimeleo />
        <ImeleohomepagedesktopRowTwo />
        <ImeleohomepagedesktopColumnOne />
        <ImeleohomepagedesktopRowThree />
      </div>
      <Footer />
    </div>
  );
}
