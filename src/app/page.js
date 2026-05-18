import AvailableCar from "@/components/Homepage/AvailableCar/AvailableCar";
import Banner from "@/components/Homepage/Banner/Banner";
import CustomerTestimonials from "@/components/Homepage/CustomerTestimonials/CustomerTestimonials";
import WhyChooseNeoMotors from "@/components/Homepage/WhyChooseNeoMotors/WhyChooseNeoMotors";

export default function Home() {
  return (
    <div>
      <Banner />
      <AvailableCar />
      <div className="bg-[#0a0a0a]">
        <WhyChooseNeoMotors />
        <CustomerTestimonials />
      </div>
    </div>
  );
}