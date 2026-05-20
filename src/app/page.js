import AvailableCar from "@/components/Homepage/AvailableCar/AvailableCar";
import Banner from "@/components/Homepage/Banner/Banner";
import CustomerTestimonials from "@/components/Homepage/CustomerTestimonials/CustomerTestimonials";
import WhyChooseNeoMotors from "@/components/Homepage/WhyChooseNeoMotors/WhyChooseNeoMotors";
import LoadingSpinner from "@/components/Spinner/LoadingSpinner";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Banner />

      <Suspense fallback={<LoadingSpinner />}>
        <AvailableCar />
      </Suspense>
      
      <div className="bg-[#0a0a0a]">
        <WhyChooseNeoMotors />
        <CustomerTestimonials />
      </div>
    </div>
  );
}