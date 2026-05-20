import Link from "next/link";
import { FaCarSide } from "react-icons/fa";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-[#111315] flex items-center justify-center px-4">
            <div className="max-w-2xl text-center">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="bg-[#1b1f22] p-6 rounded-full border border-gray-800 shadow-lg">
                        <FaCarSide className="text-6xl text-red-500" />
                    </div>
                </div>

                {/* 404 Text */}
                <h1 className="text-7xl md:text-8xl font-extrabold text-white mb-4">
                    404
                </h1>

                {/* Heading */}
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto mb-8">
                    The page you’re looking for doesn’t exist or may have been moved.
                    Let’s get you back on the road.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="px-8 py-3 rounded-lg bg-red-500 hover:bg-red-600 transition-all duration-300 text-white font-semibold shadow-lg"
                    >
                        Back to Home
                    </Link>

                    <Link
                        href="/all-cars"
                        className="px-8 py-3 rounded-lg border border-gray-700 hover:border-red-500 hover:text-red-500 transition-all duration-300 text-gray-300 font-semibold"
                    >
                        Browse Cars
                    </Link>
                </div>

                {/* Bottom Accent */}
                <div className="mt-14 border-t border-gray-800 pt-6">
                    <p className="text-sm text-gray-500">
                        NeoMotors © 2026 — Premium Driving Experience
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;