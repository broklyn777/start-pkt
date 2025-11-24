// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);

//   const linkClass = (path: string) =>
//     pathname === path
//       ? "text-blue-600 font-semibold"
//       : "text-gray-700 hover:text-blue-600 transition";

//   return (
//     <nav className="w-full border-b bg-white">
//       <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
//         {/* Logo */}
//         <Link href="/" className="text-xl font-bold text-gray-700">
//           MittProjekt
//         </Link>

//         {/* Desktop menu */}
//         <div className="hidden md:flex gap-6">
//           <Link href="/" className={linkClass("/")}>
//             Hem
//           </Link>
//           <Link href="/omoss" className={linkClass("/omoss")}>
//             Om oss
//           </Link>
//           <Link href="/tjanster" className={linkClass("/tjanster")}>
//             Tjänster
//           </Link>
//         </div>

//         {/* Hamburger button */}
//         <button
//           className="md:hidden focus:outline-none"
//           onClick={() => setOpen(!open)}
//         >
//           <div className="space-y-1.5">
//             <span
//               className={`block h-1 w-6 bg-gray-800 transition ${
//                 open ? "rotate-45 translate-y-2" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-1 w-6 bg-gray-800 transition ${
//                 open ? "opacity-0" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-1 w-6 bg-gray-800 transition ${
//                 open ? "-rotate-45 -translate-y-2" : ""
//               }`}
//             ></span>
//           </div>
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {open && (
//         <div className="md:hidden flex flex-col gap-4 p-4 border-t bg-white">
//           <Link
//             href="/"
//             className={linkClass("/")}
//             onClick={() => setOpen(false)}
//           >
//             Hem
//           </Link>

//           <Link
//             href="/omoss"
//             className={linkClass("/omoss")}
//             onClick={() => setOpen(false)}
//           >
//             Om oss
//           </Link>

//           <Link
//             href="/tjanster"
//             className={linkClass("/tjanster")}
//             onClick={() => setOpen(false)}
//           >
//             Tjänster
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (path: string) =>
    pathname === path
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
          <Link href="/omoss" className={linkClass("/omoss")}>
            Om oss
          </Link>
          <Link href="/tjanster" className={linkClass("/tjanster")}>
            Tjänster
          </Link>
          <Link href="/kontakt" className={linkClass("/kontakt")}>
            Kontakt
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1.5">
            <span
              className={`block h-1 w-6 bg-gray-800 transition ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-6 bg-gray-800 transition ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-6 bg-gray-800 transition ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
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
            href="/omoss"
            className={linkClass("/omoss")}
            onClick={() => setOpen(false)}
          >
            Om oss
          </Link>
          <Link
            href="/tjanster"
            className={linkClass("/tjanster")}
            onClick={() => setOpen(false)}
          >
            Tjänster
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
