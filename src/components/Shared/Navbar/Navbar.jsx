'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavLink from "./Navlink";
import navImage from "@/assets/logo1.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 10);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className=
        {`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? "bg-[#1A2536]/90 backdrop-blur-md shadow-md py-5" : isHome ? "bg-transparent py-8" : "bg-[#1A2536] py-8"}`}>

            <div className="navbar md:w-11/12 lg:w-10/12 mx-auto px-2">

                {/* LEFT SIDE */}
                <div className="navbar-start">

                    {/* MOBILE DROPDOWN */}
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden rounded-md text-white bg-[#2b2d42] mr-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul className="menu menu-sm dropdown-content mt-3 w-56 shadow-xl bg-[#003566] rounded-2xl border border-base-200">
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/all-cars">Explore Cars</NavLink>
                            <NavLink href="/add-car">Add Car</NavLink>
                            <NavLink href="/my-booking">My Bookings</NavLink>
                        </ul>
                    </div>

                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src={navImage}
                            alt="logo"
                            width={150}
                            height={100}
                            priority
                            className="rounded-xl"
                        />
                    </Link>
                </div>

                {/* CENTER MENU */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-2 text-white">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/all-cars">Explore Cars</NavLink>
                        <NavLink href="/add-car">Add Car</NavLink>
                        <NavLink href="/my-booking">My Bookings</NavLink>
                    </ul>
                </div>

                {/* RIGHT SIDE */}
                <div className="navbar-end flex items-center gap-3">
                    <Link
                        href="/sign-in"
                        className="
                            bg-blue-500 text-white px-6 py-2 rounded-lg
                            border-b-4 border-blue-600
                            transition-all duration-200
                            hover:brightness-110 hover:-translate-y-[1px]
                            active:border-b-2 active:translate-y-[2px]
                        "
                    >
                        Login
                    </Link>
                    <Link
                        href="/sign-up"
                        className="
                            bg-red-400 text-white px-6 py-2 rounded-lg
                            border-b-4 border-red-400
                            transition-all duration-200
                            hover:brightness-110 hover:-translate-y-[1px]
                            active:border-b-2 active:translate-y-[2px]
                        "
                    >
                        Register
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;