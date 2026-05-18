'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`relative px-5 py-4 text-sm font-medium transition-all
            ${isActive
                    ? "text-white"
                    : "text-white hover:bg-[#495057]"
                }`}
        >
            {children}

            {/* subtle active indicator line */}
            {isActive && (
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-gray-500 rounded-full" />
            )}
        </Link>
    );
};

export default NavLink;