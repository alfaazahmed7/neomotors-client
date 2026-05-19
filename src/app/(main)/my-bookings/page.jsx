import Image from 'next/image';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import MyBookingPageCard from '@/components/CarCard/MyBookingPageCard';
import { FaArrowRight, FaCar } from 'react-icons/fa';
import Link from 'next/link';

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const user = session?.user;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user.id}`
    );
    const bookings = await res.json();

    return (
        <section className="min-h-screen bg-[#0B0F19] text-white">

            {/* HERO SECTION */}
            <div className="border-b border-white/10 bg-gradient-to-b from-[#111827] to-[#0B0F19]">
                <div className="mx-auto max-w-7xl px-6 py-16">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        {/* LEFT */}
                        <div>
                            <p className="mb-3 text-sm uppercase tracking-[4px] text-gray-400">
                                Neo Motors
                            </p>

                            <h1 className="text-4xl font-bold md:text-5xl">
                                My Bookings
                            </h1>

                            <p className="mt-4 max-w-2xl text-lg text-gray-300">
                                Manage and track all your premium luxury car
                                reservations in one place.
                            </p>
                        </div>

                        {/* USER */}
                        <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                            <Image
                                src={user?.image}
                                alt={user?.name}
                                width={65}
                                height={65}
                                className="rounded-full border border-white/20"
                            />

                            <div>
                                <h3 className="text-lg font-semibold">
                                    {user?.name}
                                </h3>

                                <p className="text-sm text-gray-400">
                                    Premium Member
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Empty Card */}
            {bookings?.length === 0 && (
                <div className="flex min-h-[50vh] flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/5 p-10 text-center">
                    <FaCar className="mb-5 text-6xl text-gray-500" />

                    <h2 className="text-3xl font-bold">
                        No Bookings Found
                    </h2>

                    <p className="mt-3 max-w-md text-gray-400">
                        You haven’t booked any cars yet. Explore our luxury
                        collection and reserve your dream car today.
                    </p>

                    <Link
                        href="/cars"
                        className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:bg-gray-200"
                    >
                        Explore Cars
                        <FaArrowRight />
                    </Link>
                </div>)}

            <div className="flex flex-col gap-10 py-14">
                {bookings?.map((booking) => (
                    <MyBookingPageCard
                        key={booking._id}
                        booking={booking}
                    />
                ))}
            </div>
        </section>
    );
};

export default MyBookingPage;