"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

  const linkClass = (path: string) =>
    isActive(path)
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600 transition";

  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-700">
          MittProjekt
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6">
          <Link href="/" className={linkClass("/")}>
            Hem
          </Link>

          <Link href="/fl-studio" className={linkClass("/fl-studio")}>
            FL Studio
          </Link>

          <Link href="/webbresurs" className={linkClass("/webbresurs")}>
            Webbresurs
          </Link>

          <Link href="/kontakt" className={linkClass("/kontakt")}>
            Kontakt
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Stäng meny" : "Öppna meny"}
        >
          <div className="space-y-1.5">
            <span
              className={`block h-1 w-6 bg-gray-800 transition ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-1 w-6 bg-gray-800 transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-1 w-6 bg-gray-800 transition ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 p-4 border-t bg-white">
          <Link
            href="/"
            className={linkClass("/")}
            onClick={() => setOpen(false)}
          >
            Hem
          </Link>

          <Link
            href="/fl-studio"
            className={linkClass("/fl-studio")}
            onClick={() => setOpen(false)}
          >
            FL Studio
          </Link>

          <Link
            href="/webbresurs"
            className={linkClass("/webbresurs")}
            onClick={() => setOpen(false)}
          >
            Webbresurs
          </Link>

          <Link
            href="/kontakt"
            className={linkClass("/kontakt")}
            onClick={() => setOpen(false)}
          >
            Kontakt
          </Link>
        </div>
      )}
    </nav>
  );
}
