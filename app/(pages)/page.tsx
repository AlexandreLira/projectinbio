import Image from "next/image";
import { Hero } from "../components/landing/hero";
import { Header } from "../components/landing/header";
import { VideoExplanation } from "../components/landing/video-explanation";
import { Pricing } from "../components/landing/pricing";
import { FAQ } from "../components/landing/faq";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Hero />
      <VideoExplanation />
      <Pricing />
      <FAQ />
    </div>
  );
}
