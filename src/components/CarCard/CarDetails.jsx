'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
    FaGasPump,
    FaTachometerAlt,
    FaMapMarkerAlt,
    FaStar,
    FaCalendarAlt,
    FaCogs,
    FaCar,
    FaDoorOpen,
    FaUsers,
    FaBolt,
    FaShieldAlt,
    FaCheckCircle,
    FaHeart,
    FaArrowLeft,
} from 'react-icons/fa';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

const CarDetails = ({ car }) => {
    const [selectedDate, setSelectedDate] = useState('');

    const userData = authClient.useSession();
    const user = userData.data?.user;

    const handleBooking = async () => {
        const bookingData = {
            userId: user.id,
            userImage: user.image,
            userName: user.name,
            carId: car._id,
            carName: car.name,
            carBrand: car.brand,
            carImage: car.image,
            carPrice: car.price,
            carCurrency: car.currency,
            carAvailability: car.availability,
            departureDate: selectedDate
        }
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
            method: "POST",
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(bookingData)
        });
        const data = await res.json();
        
        toast.success(`Your booking for the ${car.name} has been successfully confirmed.`);
    }

    return (
        <section className="min-h-screen bg-[#0B0F19] text-white">
            {/* HERO SECTION */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    priority
                    quality={100}
                    className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-black/50 to-black/20"></div>

                {/* Back Button */}
                <div className="absolute left-6 top-6 z-20">
                    <Link
                        href="/all-cars"
                        className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium backdrop-blur-md transition hover:bg-white hover:text-black"
                    >
                        <FaArrowLeft />
                        Back to Cars
                    </Link>
                </div>

                {/* Content */}
                <div className="absolute bottom-10 left-0 right-0 z-10 mx-auto max-w-7xl px-6">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        {/* Left */}
                        <div>
                            <div className="mb-4 flex flex-wrap gap-3">
                                {car.featured && (
                                    <span className="rounded-full bg-yellow-400 px-4 py-1 text-xs font-bold uppercase tracking-widest text-black">
                                        Featured
                                    </span>
                                )}

                                {car.isNew ? (
                                    <span className="rounded-full bg-green-500 px-4 py-1 text-xs font-bold uppercase tracking-widest text-black">
                                        Brand New
                                    </span>
                                ) : (
                                    <span className="rounded-full bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                                        Used Car
                                    </span>
                                )}
                            </div>

                            <h1 className="text-4xl font-bold md:text-6xl">
                                {car.name}
                            </h1>

                            <p className="mt-4 max-w-2xl text-lg text-gray-300">
                                {car.shortDescription}
                            </p>

                            <div className="mt-6 flex flex-wrap items-center gap-6 text-gray-300">
                                <div className="flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-red-400" />
                                    {car.location}
                                </div>

                                <div className="flex items-center gap-2">
                                    <FaStar className="text-yellow-400" />
                                    {car.rating} ({car.reviews} Reviews)
                                </div>
                            </div>
                        </div>

                        {/* Price Card */}
                        <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
                            <p className="text-sm uppercase tracking-[4px] text-gray-300">
                                Price
                            </p>

                            <h2 className="mt-2 text-5xl font-bold">
                                ${car.price.toLocaleString()}
                            </h2>

                            <p className="mt-2 text-gray-400">
                                {car.currency}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-10 lg:grid-cols-3">
                    {/* LEFT SIDE */}
                    <div className="space-y-8 lg:col-span-2">
                        {/* Description */}
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
                            <h2 className="mb-5 text-3xl font-bold">
                                About This Car
                            </h2>

                            <p className="leading-8 text-gray-300">
                                {car.description}
                            </p>
                        </div>

                        {/* Specs */}
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
                            <div className="mb-8 flex items-center justify-between">
                                <h2 className="text-3xl font-bold">
                                    Specifications
                                </h2>

                                <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-400">
                                    {car.availability}
                                </span>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                <SpecCard
                                    icon={<FaCalendarAlt />}
                                    title="Year"
                                    value={car.year}
                                />

                                <SpecCard
                                    icon={<FaGasPump />}
                                    title="Fuel Type"
                                    value={car.fuelType}
                                />

                                <SpecCard
                                    icon={<FaCogs />}
                                    title="Transmission"
                                    value={car.transmission}
                                />

                                <SpecCard
                                    icon={<FaBolt />}
                                    title="Horsepower"
                                    value={`${car.horsepower} HP`}
                                />

                                <SpecCard
                                    icon={<FaTachometerAlt />}
                                    title="Top Speed"
                                    value={car.topSpeed}
                                />

                                <SpecCard
                                    icon={<FaCar />}
                                    title="Drive Type"
                                    value={car.driveType}
                                />

                                <SpecCard
                                    icon={<FaDoorOpen />}
                                    title="Doors"
                                    value={car.doors}
                                />

                                <SpecCard
                                    icon={<FaUsers />}
                                    title="Seats"
                                    value={car.seats}
                                />

                                <SpecCard
                                    icon={<FaShieldAlt />}
                                    title="Mileage"
                                    value={car.mileage}
                                />
                            </div>
                        </div>

                        {/* Engine + Features */}
                        <div className="grid gap-8 md:grid-cols-2">
                            {/* Engine */}
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
                                <h2 className="mb-6 text-2xl font-bold">
                                    Engine Details
                                </h2>

                                <div className="space-y-5 text-gray-300">
                                    <InfoRow
                                        label="Engine"
                                        value={car.engine}
                                    />

                                    <InfoRow
                                        label="Range"
                                        value={car.range}
                                    />

                                    <InfoRow
                                        label="Exterior Color"
                                        value={car.color}
                                    />

                                    <InfoRow
                                        label="Interior Color"
                                        value={car.interiorColor}
                                    />
                                </div>
                            </div>

                            {/* Features */}
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
                                <h2 className="mb-6 text-2xl font-bold">
                                    Highlights
                                </h2>

                                <div className="mb-8 flex flex-wrap gap-3">
                                    {car.tags?.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-gray-200"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="space-y-4 text-gray-300">
                                    <FeatureItem text="Premium Luxury Interior" />
                                    <FeatureItem text="Advanced Safety Features" />
                                    <FeatureItem text="High Performance Package" />
                                    <FeatureItem text="Sports Exhaust System" />
                                    <FeatureItem text="Smart Driving Assistance" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SIDEBAR */}
                    <div>
                        <div className="sticky top-24 rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 backdrop-blur-xl">
                            <div className="mb-8 flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-400">
                                        Total Price
                                    </p>

                                    <h2 className="mt-2 text-4xl font-bold">
                                        ${car.price.toLocaleString()}
                                    </h2>
                                </div>

                                <button className="rounded-full border border-white/10 bg-white/10 p-4 transition hover:scale-110 hover:bg-red-500">
                                    <FaHeart />
                                </button>
                            </div>

                            <span className='text-4xl lg:text-2xl font-semibold opacity-90'>
                                Departure Date:
                            </span>

                            <input
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="input w-full rounded-2xl border border-white/15 py-7 text-lg font-bold transition hover:bg-white hover:text-black mb-4 mt-4"
                            />

                            <button
                                onClick={handleBooking}
                                className="w-full rounded-2xl bg-white py-4 text-lg font-bold text-black transition hover:bg-gray-200 cursor-pointer"
                            >
                                Book Now
                            </button>

                            {/* Small Info */}
                            <div className="mt-8 border-t border-white/10 pt-6 text-sm">
                                <div className="mb-4 flex items-center justify-between text-gray-400">
                                    <span>Brand</span>
                                    <span className="font-semibold text-white">
                                        {car.brand}
                                    </span>
                                </div>

                                <div className="mb-4 flex items-center justify-between text-gray-400">
                                    <span>Category</span>
                                    <span className="font-semibold text-white">
                                        {car.category}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between text-gray-400">
                                    <span>Status</span>
                                    <span className="font-semibold text-green-400">
                                        {car.availability}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* SPEC CARD */
const SpecCard = ({ icon, title, value }) => {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:border-white/20 hover:bg-white/10">
            <div className="mb-4 inline-flex rounded-xl bg-white/10 p-4 text-xl text-white">
                {icon}
            </div>

            <p className="text-sm text-gray-400">{title}</p>

            <h3 className="mt-2 text-lg font-semibold text-white">
                {value}
            </h3>
        </div>
    );
};

/* INFO ROW */
const InfoRow = ({ label, value }) => {
    return (
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span>{label}</span>

            <span className="font-semibold text-white">{value}</span>
        </div>
    );
};

/* FEATURE ITEM */
const FeatureItem = ({ text }) => {
    return (
        <div className="flex items-center gap-3">
            <FaCheckCircle className="text-green-400" />
            <span>{text}</span>
        </div>
    );
};

export default CarDetails;