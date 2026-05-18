import AvailableCard from "@/components/Homepage/AvailableCard/AvailableCard";
import Banner from "@/components/Homepage/Banner/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <AvailableCard />
    </div>
  );
}