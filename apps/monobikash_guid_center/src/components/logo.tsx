import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image
        src="/images/bunni_education_logo.jpeg"
        alt="bunni_education Logo"
        width={50}
        height={50}
        className="object-contain rounded-full"
      />
    </Link>
  );
}
