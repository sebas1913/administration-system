"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface NavLinkProps {
    path: string;
    title: string;
    className: string;
    icon?: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ path, title, className, icon }) => {
    const currentPath = usePathname();

    return (
        <Link href={path} className={className}>
            {icon}{title}
        </Link>
    );
};

export default NavLink;
