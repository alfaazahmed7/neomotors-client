"use client";

import { usePathname } from "next/navigation";

const LayoutWrapper = ({ children }) => {
    const pathname = usePathname();

    return (
        <main className={pathname !== "/" ? "pt-32" : ""}>
            {children}
        </main>
    );
};

export default LayoutWrapper;