"use client";

import { useEffect, useState } from "react";
import CarCardPage from "@/components/CarCard/CarCard";
import SearchCars from "@/components/CarCard/SearchCars";
import { FaCarCrash } from "react-icons/fa";

const AllCarsPage = () => {
    const [cars, setCars] = useState([]);

    // Load all cars initially
    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async () => {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/cars`
        );
        const data = await res.json();
        setCars(data);
    };

    // Search function
    const handleSearch = async (searchText) => {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/search?search=${searchText}`
        );
        const data = await res.json();
        setCars(data);
    };

    return (
        <div className="bg-[#151719] py-20">
            <div className="w-10/12 mx-auto">

                {/* TITLE */}
                <div className="text-center pb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Discover Every Model
                    </h2>

                    <p className="text-[#6c757d] max-w-[700px] mx-auto">
                        Explore our full collection of modern vehicles crafted
                        to deliver exceptional comfort, powerful performance,
                        and advanced technology.
                    </p>
                </div>

                {/* STATS */}
                <div className="mb-14">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-center">
                            <h3 className="text-3xl font-bold text-white">
                                20+
                            </h3>
                            <p className="mt-2 text-sm text-gray-400">
                                Available Cars
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-center">
                            <h3 className="text-3xl font-bold text-white">
                                10+
                            </h3>
                            <p className="mt-2 text-sm text-gray-400">
                                Premium Brands
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-center">
                            <h3 className="text-3xl font-bold text-white">
                                4.8★
                            </h3>
                            <p className="mt-2 text-sm text-gray-400">
                                Customer Rating
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-center">
                            <h3 className="text-3xl font-bold text-white">
                                500HP+
                            </h3>
                            <p className="mt-2 text-sm text-gray-400">
                                Performance Models
                            </p>
                        </div>
                    </div>
                </div>

                {/* SEARCH */}
                <SearchCars onSearch={handleSearch} />

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
                    {cars.length > 0 && (
                        cars.map((car) => (
                            <CarCardPage
                                key={car._id}
                                car={car}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllCarsPage;