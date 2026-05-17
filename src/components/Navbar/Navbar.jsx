'use client'
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavLink from "./Navlink";
import navImage from "@/assets/logo1.png"
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const pathname = usePathname();
    const isHome = pathname === '/';

    return (
        <div
            className={`w-full z-50 top-0 transition-all duration-300 ${scrolled
                    ? "sticky bg-white/70 backdrop-blur-xl border-b border-base-200 shadow-sm"
                    : isHome
                        ? "absolute bg-transparent"
                        : "relative bg-[#1A2536]"
                } ${isHome ? "py-8" : "py-8"}`}
        >
            <div className="navbar md:w-11/12 lg:w-10/12 mx-auto px-2">

                <div className="navbar-start">

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden rounded-sm text-white bg-[#2b2d42] mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content mt-3 w-56 shadow-xl bg-[#003566] rounded-2xl border border-base-200"
                        >
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/explore-cars">Explore Cars</NavLink>
                            <NavLink href="/add-car">Add Car</NavLink>
                            <NavLink href="/my-booking">My Bookings</NavLink>
                        </ul>
                    </div>

                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src={navImage}
                            alt="tiles logo"
                            width={150}
                            height={100}
                            className="rounded-xl"
                        />
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-2">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/explore-cars">Explore Cars</NavLink>
                        <NavLink href="/add-car">Add Car</NavLink>
                        <NavLink href="/my-booking">My Bookings</NavLink>
                    </ul>
                </div>

                <div className="navbar-end flex items-center gap-3">
                    <div className="flex gap-2">
                        <Link
                            href="/signin"
                            className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;