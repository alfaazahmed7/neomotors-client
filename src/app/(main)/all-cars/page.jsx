"use client";

import CarCardPage from "@/components/Explore-Cars/CarCard";
import FilterCars from "@/components/Explore-Cars/FilterCars";
import SearchCars from "@/components/Explore-Cars/SearchCars";
import { useEffect, useState } from "react";

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

    // brand filtering
    const handleBrandFiltering = async (brandValue) => {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/search?brand=${brandValue}`
        );
        const data = await res.json();
        setCars(data);
    };

    return (
        <div className="bg-[#151719] pb-20">

            {/* TITLE */}
            <div className="bg-[#1A2536] pt-14 pb-28 mb-8">
                <div className="w-10/12 mx-auto">
                    <h2 className="text-5xl md:text-8xl font-bold text-white mb-4">
                        Discover Every Model
                    </h2>

                    <p className="text-[#6c757d]">
                        See What Your NeoMotors Can Do
                    </p>
                </div>
            </div>

            <div className="w-10/12 mx-auto">

                {/* STATS */}
                {/* <div className="mb-14">
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
                </div> */}

                <div className="md:flex md:justify-between md:items-center gap-10">
                    {/* Filtering */}
                    <FilterCars onFilter={handleBrandFiltering} />

                    {/* SEARCH */}
                    <SearchCars onSearch={handleSearch} />
                </div>

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