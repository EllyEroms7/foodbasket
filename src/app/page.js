'use client';
import Home from "@/components/home/home";
import Feature from "@/components/home/feature";
import Contact from "@/components/home/contact";
import Loading from "./loading";

export default function home() {
  return (
    <>
      <div>
        <Home />
        <Feature />
        <Contact />
      </div>
    </>
  );
}
