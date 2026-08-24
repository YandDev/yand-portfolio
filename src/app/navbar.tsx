"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const programmingColor =
    pathname.startsWith("/programming/projects/discord")
      ? "bg-[#5865F2]"
      : pathname.startsWith("/programming/projects/games")
        ? "bg-red-400"
        : pathname.startsWith("/programming/projects/eduwave")
          ? "bg-blue-600"
          : pathname.startsWith("/programming/projects/misc")
            ? "bg-sky-950"
            : pathname.startsWith("/programming/projects")
              ? "bg-purple-500"
              : "bg-green-400";

  const musicColor = "bg-purple-500"
  const contactColor = "bg-orange-500"

  const programmingActive = pathname.startsWith("/programming");
  const musicActive = pathname.startsWith("/music");
  const contactActive = pathname.startsWith("/contact");

  return (
    <nav>
      <div className="fixed top-0 left-0 w-full h-14 bg-black text-white flex items-center justify-between px-4 z-50">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-lg font-bold hover:scale-105 select-none transition-all duration-500 hover:text-gray-400">yand</span>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-4">
          {/* Home */}
          <Link
            href="/"
            className="text-zinc-400 hover:text-white transition-colors duration-300"
          >
            home
          </Link>

          {/* Programming */}
          <div className="relative h-14 flex items-center">
            <Link
              href="/programming"
              className={`transition-colors duration-300 ${
                programmingActive
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              programming
            </Link>

            {programmingActive && (
              <div
                className={`absolute bottom-0 left-0 w-full h-[2px] ${programmingColor} opacity-70 transition-colors duration-500`}
              />
            )}
          </div>

          {/* Music */}

          <div className="relative h-14 flex items-center">
            <Link
              href="/music"
              className={`transition-colors duration-300 ${
                musicActive
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              music
            </Link>

            {musicActive && (
              <div
                className={`absolute bottom-0 left-0 w-full h-[2px] ${musicColor} opacity-70 transition-colors duration-500`}
              />
            )}
          </div>

          {/* Contact */}

          <div className="relative h-14 flex items-center">
            <Link
              href="/contact"
              className={`transition-colors duration-300 ${
                contactActive
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              contact
            </Link>

            {contactActive && (
              <div
                className={`absolute bottom-0 left-0 w-full h-[2px] ${contactColor} opacity-70 transition-colors duration-500`}
              />
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}