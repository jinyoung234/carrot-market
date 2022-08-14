import Link from "next/link";
import React from "react";

interface FloatingButton {
  children: React.ReactNode;
  href: string;
}

export default function FloatingButton({ children, href }: FloatingButton) {
  return (
    <Link href={href}>
      <a style={{position: 'absolute', bottom : '10%', right: '5%'}} className=" px-2 py-2 rounded-full flex items-center justify-center bg-orange-400 text-white shadow-md">
        {children}
      </a>
    </Link>
  );
}
