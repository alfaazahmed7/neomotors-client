"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Arafat Hossain",
        role: "Tesla Model 3 Owner",
        image: "https://i.pravatar.cc/150?img=12",
        review:
            "NeoMotors made my buying experience incredibly smooth. Everything was transparent and fast.",
        rating: 5,
    },
    {
        name: "Nusrat Jahan",
        role: "BMW X5 Buyer",
        image: "https://i.pravatar.cc/150?img=32",
        review:
            "The verified listings gave me confidence. I finally felt safe buying a car online.",
        rating: 5,
    },
    {
        name: "Mehedi Hasan",
        role: "Audi A6 Owner",
        image: "https://i.pravatar.cc/150?img=15",
        review:
            "The pricing was fair and the car matched exactly what was shown. Very reliable platform.",
        rating: 4,
    },
    {
        name: "Sadia Rahman",
        role: "Toyota Harrier Buyer",
        image: "https://i.pravatar.cc/150?img=47",
        review:
            "Fast delivery and excellent service. NeoMotors feels like a premium dealership.",
        rating: 5,
    },
    {
        name: "Tanvir Ahmed",
        role: "Mercedes C-Class Owner",
        image: "https://i.pravatar.cc/150?img=21",
        review:
            "Smooth booking system and luxury-level experience from start to finish.",
        rating: 5,
    },
    {
        name: "Rafiul Islam",
        role: "Honda Civic Buyer",
        image: "https://i.pravatar.cc/150?img=8",
        review:
            "Very trustworthy platform. No hidden issues, everything was clear.",
        rating: 4,
    },
];

const CustomerTestimonials = () => {
    return (
        <section className="relative w-full bg-[#0a0a0a] text-white py-20 px-6 md:px-16">
            {/* glow background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)] pointer-events-none" />

            <div className="relative max-w-6xl mx-auto text-center">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
                    What Our <span className="text-white/70">Customers Say</span>
                </h2>

                <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                    Real experiences from verified buyers who trusted NeoMotors for their dream cars.
                </p>

                {/* Swiper */}
                <div className="mt-14">
                    <Swiper
                        modules={[Pagination, Navigation]}
                        spaceBetween={24}
                        slidesPerView={2}
                        navigation
                        pagination={{
                            clickable: true,
                            el: ".custom-pagination",
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                        }}
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-[#111111] border border-white/10 rounded-2xl px-14 py-6 text-left hover:border-white/30 transition-all duration-300 h-full min-h-[230px]">

                                    {/* User Header */}
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-12 h-12">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="rounded-full object-cover border border-white/20"
                                            />
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-white">
                                                {item.name}
                                            </h4>
                                            <p className="text-xs text-gray-500">{item.role}</p>
                                        </div>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex gap-1 text-yellow-400 mt-4">
                                        {Array.from({ length: item.rating }).map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>

                                    {/* Review */}
                                    <p className="mt-4 text-gray-300 text-sm leading-relaxed line-clamp-3">
                                        “{item.review}”
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="custom-pagination mt-6 flex justify-center gap-2 text-white"></div>
                </div>
            </div>
        </section>
    );
};

export default CustomerTestimonials;