import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image
        src="/images/center_logo.jpeg"
        alt="GUIDE_Centre Logo"
        width={50}
        height={50}
        className="object-contain rounded-full"
      />
    </Link>
  );
}
