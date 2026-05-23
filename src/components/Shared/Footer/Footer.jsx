import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-14">
                {/* Footer Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand Section */}
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Neo<span className="text-red-500">Motors</span>
                        </h2>

                        <p className="text-sm leading-6 text-gray-400">
                            Discover premium cars with modern technology and
                            seamless experience. Your trusted destination for
                            luxury, sports, and electric vehicles.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 mt-6">
                            <Link
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 hover:bg-red-500 transition duration-300"
                            >
                                <FaFacebookF size={16} />
                            </Link>

                            <Link
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 hover:bg-red-500 transition duration-300"
                            >
                                <FaInstagram size={16} />
                            </Link>

                            <Link
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 hover:bg-red-500 transition duration-300"
                            >
                                <FaTwitter size={16} />
                            </Link>

                            <Link
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 hover:bg-red-500 transition duration-300"
                            >
                                <FaLinkedinIn size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-5">
                            Useful Links
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-red-500 transition"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/cars"
                                    className="hover:text-red-500 transition"
                                >
                                    Cars
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-red-500 transition"
                                >
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/services"
                                    className="hover:text-red-500 transition"
                                >
                                    Services
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-red-500 transition"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-5">
                            Support
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    href="/faq"
                                    className="hover:text-red-500 transition"
                                >
                                    FAQ
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/privacy-policy"
                                    className="hover:text-red-500 transition"
                                >
                                    Privacy Policy
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/terms"
                                    className="hover:text-red-500 transition"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/booking"
                                    className="hover:text-red-500 transition"
                                >
                                    Booking
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/dashboard"
                                    className="hover:text-red-500 transition"
                                >
                                    Dashboard
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-5">
                            Contact Info
                        </h3>

                        <div className="space-y-5 text-sm">
                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-red-500 mt-1" />
                                <p className="text-gray-400">
                                    123 Neo Street, Dhaka, Bangladesh
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="text-red-500" />
                                <p className="text-gray-400">
                                    +880 1234-567890
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-red-500" />
                                <p className="text-gray-400">
                                    support@neomotors.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500 text-center md:text-left">
                        © {new Date().getFullYear()} NeoMotors. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5 text-sm">
                        <Link
                            href="/privacy-policy"
                            className="hover:text-red-500 transition"
                        >
                            Privacy
                        </Link>

                        <Link
                            href="/terms"
                            className="hover:text-red-500 transition"
                        >
                            Terms
                        </Link>

                        <Link
                            href="/cookies"
                            className="hover:text-red-500 transition"
                        >
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}