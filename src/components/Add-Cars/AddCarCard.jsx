import React from 'react';
import Image from 'next/image';
import {
    FaGasPump,
    FaTachometerAlt,
    FaBolt,
    FaStar,
    FaTrash,
    FaEdit
} from 'react-icons/fa';
import UpdateCarModal from './UpdateCarModal';
import CancelAddedCar from './CancelAddedCar';

const AddCarCardPage = ({ car }) => {

    return (
        <div
            className="group mx-auto flex max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg transition duration-300 hover:border-blue-500/40 lg:flex-row"
        >
            {/* IMAGE */}
            <div className="relative h-[240px] w-full lg:h-auto lg:w-[360px]">
                <Image
                    src={car?.image}
                    alt={car.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute left-4 top-4 flex gap-2">
                    {car.availability === "Available" ? (
                        <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">
                            Available
                        </span>
                    ) : (
                        <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                            Unavailable
                        </span>
                    )}

                    {car.isNew && (
                        <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">
                            New
                        </span>
                    )}
                </div>
            </div>

            {/* CONTENT */}
            <div className="flex flex-1 flex-col justify-between p-6">
                {/* TOP */}
                <div>
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div>
                            <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
                                {car.brand}
                            </p>

                            <h2 className="mt-1 text-2xl font-bold">
                                {car.name}
                            </h2>

                            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/65">
                                {car.shortDescription}
                            </p>
                        </div>

                        {/* BUTTONS */}
                        <div className="flex gap-3">
                            <UpdateCarModal car={car} />
                            <CancelAddedCar car={car} />
                        </div>
                    </div>

                    {/* INFO */}
                    <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <div className="flex items-center gap-2 text-white/50">
                                <FaGasPump />
                                <span className="text-xs">
                                    Fuel
                                </span>
                            </div>

                            <p className="mt-2 font-semibold">
                                {car.fuelType}
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <div className="flex items-center gap-2 text-white/50">
                                <FaTachometerAlt />
                                <span className="text-xs">
                                    Mileage
                                </span>
                            </div>

                            <p className="mt-2 font-semibold">
                                {car.mileage}
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <div className="flex items-center gap-2 text-white/50">
                                <FaBolt />
                                <span className="text-xs">
                                    Horsepower
                                </span>
                            </div>

                            <p className="mt-2 font-semibold">
                                {car.horsepower} HP
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <div className="flex items-center gap-2 text-white/50">
                                <FaStar />
                                <span className="text-xs">
                                    Rating
                                </span>
                            </div>

                            <p className="mt-2 font-semibold">
                                {car.rating}
                            </p>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-5 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
                        <span>{car.year}</span>
                        <span className="h-1 w-1 rounded-full bg-white/30"></span>
                        <span>{car.transmission}</span>
                        <span className="h-1 w-1 rounded-full bg-white/30"></span>
                        <span>{car.driveType}</span>
                        <span className="h-1 w-1 rounded-full bg-white/30"></span>
                        <span>{car.location}</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-sm text-white/50">
                            Price
                        </span>

                        <h3 className="text-2xl font-bold text-white">
                            ${car.price.toLocaleString()}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCarCardPage;