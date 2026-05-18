'use client';

import Image from 'next/image';
import {
    FaTachometerAlt,
    FaGasPump,
    FaStar,
    FaBolt
} from 'react-icons/fa';

const AvailableCarCardPage = ({ car }) => {
    return (
        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-white/20">

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative h-[240px] overflow-hidden">

                {/* Image */}
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        src={car.image}
                        alt={car.name}
                        fill
                        priority={false}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover will-change-transform transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

                {/* Badges */}
                <div className="absolute left-4 top-4 flex items-center gap-2 z-10">
                    {car.featured && (
                        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                            Featured
                        </span>
                    )}

                    {car.isNew && (
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">
                            NEW
                        </span>
                    )}
                </div>

                {/* Rating */}
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/40 px-3 py-1 backdrop-blur-md z-10">
                    <FaStar className="text-yellow-400" size={14} />
                    <span className="text-sm font-medium text-white">
                        {car.rating}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="space-y-5 p-6">

                {/* Title */}
                <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                        {car.brand}
                    </p>

                    <h2 className="mt-1 text-2xl font-bold text-white">
                        {car.name}
                    </h2>

                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-300">
                        {car.shortDescription}
                    </p>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-3">

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
                        <FaTachometerAlt className="mb-2 text-white/80" size={18} />
                        <p className="text-xs text-gray-400">Top Speed</p>
                        <p className="text-sm font-semibold text-white">
                            {car.topSpeed}
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
                        <FaGasPump className="mb-2 text-white/80" size={18} />
                        <p className="text-xs text-gray-400">Fuel</p>
                        <p className="text-sm font-semibold text-white">
                            {car.fuelType}
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
                        <FaBolt className="mb-2 text-white/80" size={18} />
                        <p className="text-xs text-gray-400">Horsepower</p>
                        <p className="text-sm font-semibold text-white">
                            {car.horsepower} HP
                        </p>
                    </div>

                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between border-t border-white/10 pt-5">
                    <div>
                        <p className="text-sm text-gray-400">Starting Price</p>

                        <h3 className="text-3xl font-bold text-white">
                            ${car.price.toLocaleString()}
                        </h3>
                    </div>

                    <button className="rounded-2xl border border-white/10 bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-gray-200">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AvailableCarCardPage;