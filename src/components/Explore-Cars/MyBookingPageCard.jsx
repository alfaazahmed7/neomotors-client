import React from 'react';
import {
    FaCalendarAlt,
    FaMoneyBillWave,
    FaCheckCircle,
    FaCar,
    FaArrowRight,
    FaTimes,
} from 'react-icons/fa';
import Link from 'next/link';
import CancelBooking from './CancelBooking';
import Image from 'next/image';

const MyBookingPageCard = ({ booking }) => {
    const bookingId = booking._id;

    return (
        <div>
            {/* BOOKINGS */}
            <div className="mx-auto max-w-6xl px-6">
                <div
                    className="group overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-xl transition duration-500 hover:border-white/20"
                >
                    <div className="grid lg:grid-cols-[420px_1fr]">
                        {/* IMAGE SIDE */}
                        <div className="relative h-[280px] overflow-hidden lg:h-full">
                            <Image
                                src={booking?.carImage}
                                alt={booking.carName}
                                fill
                                quality={100}
                                className="object-cover transition duration-700 group-hover:scale-110"
                            />

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>

                            {/* AVAILABILITY */}
                            <div className="absolute left-6 top-6">
                                <span className="rounded-full bg-green-500 px-4 py-2 text-xs font-bold uppercase tracking-[3px] text-white shadow-lg">
                                    {booking.carAvailability}
                                </span>
                            </div>

                            {/* CAR INFO */}
                            <div className="absolute bottom-8 left-6">
                                <p className="mb-2 text-sm uppercase tracking-[4px] text-gray-300">
                                    {booking.carBrand}
                                </p>

                                <h2 className="max-w-xs text-4xl font-bold leading-tight">
                                    {booking.carName}
                                </h2>
                            </div>
                        </div>

                        {/* CONTENT SIDE */}
                        <div className="flex flex-col justify-between px-8 lg:px-10 py-4">
                            {/* TOP */}
                            <div>
                                {/* USER INFO */}
                                <div className="mb-4 flex items-center gap-4">
                                    <Image
                                        src={booking.userImage}
                                        alt={booking.userName}
                                        width={60}
                                        height={60}
                                        className="rounded-full border border-white/20"
                                    />

                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            {booking.userName}
                                        </h3>

                                        <p className="text-sm text-gray-400">
                                            Premium Booking Member
                                        </p>
                                    </div>
                                </div>

                                {/* INFO CARDS */}
                                <div className="grid gap-3 grid-cols-3 text-center">
                                    {/* DATE */}
                                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                                        <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 mx-auto">
                                            <FaCalendarAlt size={16} />
                                        </div>

                                        <p className="text-xs text-gray-400">
                                            Departure Date
                                        </p>

                                        <h3 className="mt-1 text-sm font-semibold">
                                            {booking.departureDate}
                                        </h3>
                                    </div>

                                    {/* PRICE */}
                                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                                        <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10 text-green-400 mx-auto">
                                            <FaMoneyBillWave size={16} />
                                        </div>

                                        <p className="text-xs text-gray-400">
                                            Booking Price
                                        </p>

                                        <h3 className="mt-1 text-sm font-semibold">
                                            ${booking.carPrice.toLocaleString()}
                                        </h3>
                                    </div>

                                    {/* STATUS */}
                                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                                        <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-400 mx-auto">
                                            <FaCheckCircle size={16} />
                                        </div>

                                        <p className="text-xs text-gray-400">
                                            Booking Status
                                        </p>

                                        <h3 className="mt-1 text-sm font-semibold text-green-400">
                                            Confirmed
                                        </h3>
                                    </div>
                                </div>

                                {/* DESCRIPTION */}
                                <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-2">
                                    <p className="leading-8 text-gray-300">
                                        Your booking for the{' '}
                                        <span className="font-semibold text-white">
                                            {booking.carName}
                                        </span>{' '}
                                        has been successfully
                                        confirmed. Get ready to
                                        experience premium luxury
                                        driving with Neo Motors.
                                    </p>
                                </div>
                            </div>

                            {/* BUTTONS */}
                            <div className="mt-5 flex items-center justify-center gap-4">
                                <Link href={`/all-cars/${booking.carId}`} className="group flex w-[190px] items-center justify-center gap-2 rounded-xl border border-white/10 bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-gray-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                                    View Details
                                    <FaArrowRight className="text-xs" />
                                </Link>

                                <CancelBooking
                                    booking={booking}
                                    bookingId={bookingId}
                                />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default MyBookingPageCard;