"use client";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";

const FilterCars = ({ onFilter }) => {
    const [brand, setBrand] = useState("");

    return (
        <div className="w-full flex">
            <div className="w-full max-w-xl mb-5 md:mb-0">

                <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-lg">

                    {/* ICON SECTION */}
                    <div className="px-4 text-gray-300">
                        <FaFilter />
                    </div>

                    {/* SELECT */}
                    <select
                        value={brand}
                        onChange={(e) => {
                            const value = e.target.value;
                            setBrand(value);
                            onFilter(value);
                        }}
                        className="flex-1 bg-transparent px-3 py-3 text-white outline-none cursor-pointer"
                    >
                        <option value="" className="text-black">
                            All Brands
                        </option>
                        <option value="Audi" className="text-black">
                            Audi
                        </option>
                        <option value="BMW" className="text-black">
                            BMW
                        </option>
                        <option value="Tesla" className="text-black">
                            Tesla
                        </option>
                        <option value="Ferrari" className="text-black">
                            Ferrari
                        </option>
                        <option value="Porsche" className="text-black">
                            Porsche
                        </option>
                        <option value="Toyota" className="text-black">
                            Toyota
                        </option>
                        <option value="McLaren" className="text-black">
                            McLaren
                        </option>
                    </select>

                </div>
            </div>
        </div>
    );
};

export default FilterCars;