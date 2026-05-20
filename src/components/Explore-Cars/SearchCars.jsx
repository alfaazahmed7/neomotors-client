"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchCars({ onSearch }) {
    const [search, setSearch] = useState("");

    return (
        <div className="w-full flex md:justify-end">
            <div className="w-full max-w-xl">
                <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-lg">

                    {/* INPUT */}
                    <input
                        type="text"
                        placeholder="Search cars..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 px-5 py-3 bg-transparent text-white placeholder:text-gray-400 outline-none"
                    />

                    {/* BUTTON */}
                    <button
                        onClick={() => onSearch(search)}
                        className="flex items-center gap-2 px-5 py-3 bg-red-500 hover:bg-red-600 transition-all duration-300 text-white font-medium cursor-pointer"
                    >
                        <FaSearch />
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}