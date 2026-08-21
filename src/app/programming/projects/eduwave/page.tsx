"use client";

import Image from "next/image";
import {
    Search,
    ChevronLeft,
    ChevronRight,
    Terminal,
    ExternalLink,
} from "lucide-react";

import { useState } from "react";

export default function Eduwave() {

    const EduwaveDesc =
`> Project Goal

The idea of Eduwave grew inside my head during my final
year of high school.

> Problem

Students often chose teachers based on popularity and
advertising rather than teaching quality.

> Solution

I designed Eduwave to help students discover teachers
based on meaningful information instead.

> Outcome

Although it never launched publicly, it's still one of
the systems I'm most proud of building.`;

    const screenshots = [
        "/images/eduwave1.png",
        "/images/eduwave2.png",
        "/images/eduwave3.png",
        "/images/eduwave4.png",
    ];

    const [currentImage, setCurrentImage] = useState(0);


    const previousImage = () => {
        setCurrentImage((prev) =>
            prev === 0
                ? screenshots.length - 1
                : prev - 1
        );
    };


    const nextImage = () => {
        setCurrentImage((prev) =>
            prev === screenshots.length - 1
                ? 0
                : prev + 1
        );
    };


    return (

        <main className="min-h-screen bg-[#080908] text-white px-6 md:px-12 py-24 overflow-hidden">


            {/* BACKGROUND GRID */}

            <div className="pointer-events-none fixed inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />


            <div className="relative max-w-7xl mx-auto">


                {/* HEADER */}

                <div className="mb-14">

                    <div className="flex items-center gap-3 mb-5">

                        <Terminal
                            size={18}
                            className="text-blue-500/60"
                        />

                        <p className="font-mono text-sm text-blue-500/60">
                            ~/programming/projects
                        </p>

                    </div>


                    <div className="flex items-center gap-4">

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-mono">
                            {"> eduwave.app"}
                        </h1>

                        <span className="hidden md:block px-3 py-1 rounded-full border border-zinc-800 text-xs font-mono text-zinc-600">
                            archived
                        </span>

                    </div>


                    <p className="mt-5 text-zinc-500 text-lg">
                        an educational platform concept built around
                        discovering teachers through meaningful information.
                    </p>

                </div>


                {/* MAIN */}

                <div className="grid xl:grid-cols-[0.85fr_1.5fr] gap-12 items-start">


                    {/* TERMINAL */}

                    <div className="relative">


                        {/* GLOW */}

                        <div className="absolute -inset-16 bg-blue-500/[0.04] blur-[100px] rounded-full pointer-events-none" />


                        <div className="relative border border-zinc-900 bg-[#050605] rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(37,99,235,0.05)]">

                            {/* TERMINAL HEADER */}

                            <div className="flex items-center gap-2 h-11 px-4 border-b border-zinc-900 bg-zinc-950">

                                <div className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
                                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
                                <div className="h-2.5 w-2.5 rounded-full bg-green-500/50" />

                                <span className="ml-3 font-mono text-xs text-zinc-700">
                                    eduwave.txt
                                </span>

                            </div>


                            {/* TERMINAL BODY */}

                            <div className="crt-screen min-h-[600px] bg-[#07111b] p-6 md:p-8 font-mono text-blue-300">

                                <p className="text-blue-500/60 text-sm mb-6">
                                    yand@portfolio:~/projects$
                                </p>


                                <p className="whitespace-pre-wrap text-sm md:text-[15px] leading-7 text-zinc-300">
                                    {EduwaveDesc}
                                </p>


                                {/* TERMINAL FOOTER */}

                                <div className="absolute bottom-6 left-6 right-6 pt-4 border-t border-blue-500/10 flex justify-between text-xs text-blue-500/40">

                                    <span>
                                        status: archived
                                    </span>

                                    <span>
                                        eduwave.app
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* BROWSER */}

                    <div>


                        <div className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-[0_0_100px_rgba(37,99,235,0.08)] group">


                            {/* BROWSER BAR */}

                            <div className="flex items-center h-12 px-4 bg-zinc-900 border-b border-zinc-800">

                                {/* TRAFFIC LIGHTS */}

                                <div className="flex items-center gap-2">

                                    <div className="h-3 w-3 rounded-full bg-red-500/70" />

                                    <div className="h-3 w-3 rounded-full bg-yellow-500/70" />

                                    <div className="h-3 w-3 rounded-full bg-green-500/70" />

                                </div>


                                {/* NAVIGATION */}

                                <div className="flex items-center gap-1 ml-6">

                                    <button
                                        onClick={previousImage}
                                        className="p-1.5 rounded text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors"
                                    >
                                        <ChevronLeft size={18} />
                                    </button>


                                    <button
                                        onClick={nextImage}
                                        className="p-1.5 rounded text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors"
                                    >
                                        <ChevronRight size={18} />
                                    </button>

                                </div>


                                {/* ADDRESS BAR */}

                                <div className="ml-5 flex-1">

                                    <div className="flex items-center gap-2 rounded-md bg-zinc-800 px-3 py-1.5">

                                        <Search
                                            size={12}
                                            className="text-zinc-500"
                                        />

                                        <p className="text-xs text-zinc-400 font-mono">
                                            eduwave.app
                                        </p>

                                    </div>

                                </div>


                                {/* COUNTER */}

                                <p className="ml-4 text-xs text-zinc-600 font-mono whitespace-nowrap">

                                    {String(currentImage + 1).padStart(2, "0")}
                                    {" / "}
                                    {String(screenshots.length).padStart(2, "0")}

                                </p>

                            </div>


                            {/* SCREEN */}

                            <div className="relative w-full aspect-[1264/630] bg-zinc-950">


                                {/* HOVER MESSAGE */}

                                <div className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-md border border-white/10 bg-black/70 backdrop-blur-sm text-xs font-mono text-zinc-400 opacity-100 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none">
                                    hover to inspect
                                </div>


                                {/* IMAGE */}

                                <Image
                                    src={screenshots[currentImage]}
                                    alt={`Eduwave screenshot ${currentImage + 1}`}
                                    fill
                                    priority
                                    className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
                                />


                                {/* SCREEN VIGNETTE */}

                                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,transparent_45%,rgba(0,0,0,0.35)_100%)]" />

                            </div>

                        </div>


                        {/* BROWSER INFO */}

                        <div className="mt-4 flex items-center justify-between font-mono text-xs text-zinc-600">

                            <span>
                                ← → navigate screenshots
                            </span>

                            <span>
                                {currentImage + 1} of {screenshots.length}
                            </span>

                        </div>


                    </div>

                </div>


                {/* PROJECT INFO */}

                <div className="mt-20 pt-8 border-t border-zinc-900 grid md:grid-cols-3 gap-8">

                    <div>

                        <p className="text-xs font-mono text-zinc-700 mb-2">
                            PROJECT TYPE
                        </p>

                        <p className="text-zinc-400">
                            Educational Platform
                        </p>

                    </div>


                    <div>

                        <p className="text-xs font-mono text-zinc-700 mb-2">
                            STATUS
                        </p>

                        <p className="text-zinc-400">
                            Concept / Archived
                        </p>

                    </div>


                    <div>

                        <p className="text-xs font-mono text-zinc-700 mb-2">
                            PUBLIC URL
                        </p>

                        <p className="flex items-center gap-2 text-zinc-500">
                            eduwave.app
                            <ExternalLink size={13} />
                        </p>

                    </div>

                </div>


                {/* FOOTER */}

                <div className="mt-12 pt-6 border-t border-zinc-900 flex justify-between font-mono text-xs text-zinc-700">

                    <span>
                        /programming/projects/eduwave
                    </span>

                    <span>
                        2026
                    </span>

                </div>

            </div>

        </main>
    );
}