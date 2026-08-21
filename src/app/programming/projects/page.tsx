"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Folder, Terminal } from "lucide-react";

export default function Projects() {

    const projects = [
        {
            title: "Personal Portfolio",
            short: "portfolio",
            description: "My personal portfolio.\nBuilt with Next.js and Tailwind.",
            href: "/",
            accent: "slate",
            number: "01",
        },
        {
            title: "Discord Bots",
            short: "discord",
            description: "Moderation, music, economy, RPG.",
            href: "/programming/projects/discord",
            accent: "discord",
            number: "02",
        },
        {
            title: "Video Games",
            short: "games",
            description: "Small games built while learning game development.",
            href: "/programming/projects/games",
            accent: "red",
            number: "03",
        },
        {
            title: "Eduwave",
            short: "eduwave",
            description: "Educational platform designed to fight corruption.",
            href: "/programming/projects/eduwave",
            accent: "blue",
            number: "04",
        },
        {
            title: "Miscellaneous",
            short: "misc",
            description: "Small miscellaneous projects built many years ago.",
            href: "/programming/projects/misc",
            accent: "sky",
            number: "05",
        },
    ];

    const [hovered, setHovered] = useState<number | null>(null);

    return (

        <main className="min-h-screen bg-[#080908] text-white px-6 md:px-12 py-24 overflow-hidden">

            {/* subtle background grid */}

            <div
                className="
                    pointer-events-none
                    fixed inset-0
                    opacity-[0.02]
                    bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
                    bg-[size:40px_40px]
                "
            />


            <div className="relative max-w-7xl mx-auto">


                {/* HEADER */}

                <div className="mb-16">

                    <div className="flex items-center gap-3 mb-5">

                        <Terminal
                            size={18}
                            className="text-emerald-500/60"
                        />

                        <p className="font-mono text-sm text-emerald-500/60">
                            ~/programming
                        </p>

                    </div>

                    <h1 className="text-6xl md:text-7xl font-bold tracking-tight font-mono">
                        {"> ls projects"}
                    </h1>

                    <p className="mt-5 text-zinc-500 text-lg max-w-xl">
                        a collection of things I've built, broken,
                        fixed, and occasionally finished.
                    </p>

                </div>


                {/* PROJECT DIRECTORY */}

                <div className="flex flex-col gap-2">

                    {projects.map((project, index) => (

                        <Link
                            key={project.title}
                            href={project.href}
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                            className="
                                group
                                relative
                                overflow-hidden
                                border
                                border-zinc-900
                                bg-zinc-950
                                transition-all
                                duration-500
                                ease-out
                            "
                        >

                            {/* ambient hover color */}

                            <div
                                className={`
                                    absolute
                                    inset-0
                                    opacity-0
                                    blur-3xl
                                    transition-opacity
                                    duration-500
                                    pointer-events-none

                                    ${
                                        hovered === index
                                            ? project.accent === "discord"
                                                ? "opacity-20 bg-[#5865F2]"
                                                : project.accent === "red"
                                                    ? "opacity-15 bg-red-500"
                                                    : project.accent === "blue"
                                                        ? "opacity-15 bg-blue-500"
                                                        : project.accent === "sky"
                                                            ? "opacity-15 bg-sky-500"
                                                            : "opacity-10 bg-slate-400"
                                            : ""
                                    }
                                `}
                            />


                            {/* actual content */}

                            <div
                                className={`
                                    relative
                                    z-10
                                    min-h-[120px]
                                    flex
                                    items-center
                                    px-6 md:px-8
                                    transition-all
                                    duration-500

                                    ${
                                        hovered === index
                                            ? "py-8"
                                            : "py-6"
                                    }
                                `}
                            >


                                {/* NUMBER */}

                                <span
                                    className="
                                        w-12
                                        font-mono
                                        text-xs
                                        text-zinc-700
                                        group-hover:text-zinc-500
                                        transition-colors
                                    "
                                >
                                    {project.number}
                                </span>


                                {/* FOLDER */}

                                <Folder
                                    size={24}
                                    className="
                                        mr-6
                                        text-zinc-700
                                        group-hover:text-zinc-400
                                        transition-all
                                        duration-300
                                    "
                                />


                                {/* TITLE */}

                                <div className="flex-1">

                                    <h2
                                        className="
                                            text-2xl
                                            md:text-3xl
                                            font-mono
                                            transition-all
                                            duration-300
                                            group-hover:translate-x-1
                                        "
                                    >
                                        {"> "}{project.short}
                                    </h2>


                                    {/* DESCRIPTION */}

                                    <div
                                        className={`
                                            overflow-hidden
                                            transition-all
                                            duration-500
                                            ${
                                                hovered === index
                                                    ? "max-h-24 opacity-100 mt-3"
                                                    : "max-h-0 opacity-0"
                                            }
                                        `}
                                    >

                                        <p className="text-zinc-400 whitespace-pre-line font-mono text-sm leading-6">
                                            {project.description}
                                        </p>

                                    </div>

                                </div>


                                {/* ARROW */}

                                <ArrowUpRight
                                    size={22}
                                    className="
                                        text-zinc-700
                                        group-hover:text-white
                                        group-hover:translate-x-1
                                        group-hover:-translate-y-1
                                        transition-all
                                        duration-300
                                    "
                                />

                            </div>


                            {/* BOTTOM ACCENT LINE */}

                            <div
                                className={`
                                    absolute
                                    bottom-0
                                    left-0
                                    h-[2px]
                                    transition-all
                                    duration-700
                                    ${
                                        hovered === index
                                            ? "w-full"
                                            : "w-0"
                                    }

                                    ${
                                        project.accent === "discord"
                                            ? "bg-[#5865F2]"
                                            : project.accent === "red"
                                                ? "bg-red-400"
                                                : project.accent === "blue"
                                                    ? "bg-blue-500"
                                                    : project.accent === "sky"
                                                        ? "bg-sky-700"
                                                        : "bg-slate-500"
                                    }
                                `}
                            />

                        </Link>

                    ))}

                </div>


                {/* FOOTER */}

                <div
                    className="
                        mt-16
                        pt-6
                        border-t border-zinc-900
                        flex justify-between
                        font-mono
                        text-xs
                        text-zinc-700
                    "
                >

                    <span>
                        /programming/projects
                    </span>

                    <span>
                        {projects.length} entries
                    </span>

                </div>

            </div>

        </main>
    );
}