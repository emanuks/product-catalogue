'use-client';

import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/images/logo.svg";

export const Logo = () => {
    return (
        <Link href='/' className="flex items-center">
            <Image src={logo} height={24} width={150} alt='Flow Logo' />
        </Link>
    );
}