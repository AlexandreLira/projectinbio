import Image from "next/image";
import { Hero } from "./components/landing/hero";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-content-heading text-4xl font-bold">Hello World</h1>
      {/* <Header /> */}
      <Hero />
      {/* <VideoExplanation /> */}
      {/* <Pricing /> */}
      {/* <FAQ /> */}
    </div>
  );
}
