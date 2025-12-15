import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Sectors } from "@/components/sections/Sectors";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Stats />
      <Sectors />
    </div>
  );
}
