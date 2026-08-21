"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FolderOpen, SquareCode, Terminal } from "lucide-react";

export default function Programming() {

    const [showLanguages, setShowLanguages] = useState(false);
    const [showFrameworks, setShowFrameworks] = useState(false);

    const screens = [
        `> npm run dev

✓ ready in 623ms`,

        `> git status
On branch main
nothing to commit`,

        `> git log --oneline
d91f2a7 Update page.tsx
3a2b1c4 Add new feature
5f6e7d8 Fix bug in component
9a0b1c2 Initial commit`,

        `> ls
Projects/
Unity/
React/
discord.js/`,

        `> dotnet build ammonium hydroxide.csproj

Building succeeded
0 Warning(s)
0 Error(s)

Time Elapsed 00:00:00.67`,

        `> Console.WriteLine("i think inductors are the coolest circuit components ever due to their working theory,
its like the electricity gets stored in an invisible air bubble that is then discharged ykwim")`,

        `> check out the music side of this site!`,

        `> i think organic chemistry is pretty damn cool`,

        `> cals if youre reading this text me`,

        `> I love Guns N' Roses`
    ];

    const [screen, setScreen] = useState(0);
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {

        let i = 0;

        const typing = setInterval(() => {

            setDisplayedText(screens[screen].slice(0, i + 1));

            i++;

            if (i >= screens[screen].length) {

                clearInterval(typing);

                setTimeout(() => {
                    setScreen((prev) => (prev + 1) % screens.length);
                }, 2000);
            }

        }, 35);

        return () => clearInterval(typing);

    }, [screen]);


    return (

        <main className="min-h-screen bg-[#080908] text-white px-6 md:px-12 py-24 overflow-hidden relative">


            {/* BACKGROUND */}

            <div
                className="
                    pointer-events-none
                    fixed inset-0
                    opacity-[0.025]
                    bg-[linear-gradient(to_right,#39ff14_1px,transparent_1px),linear-gradient(to_bottom,#39ff14_1px,transparent_1px)]
                    bg-[size:40px_40px]
                "
            />


            {/* AMBIENT GREEN GLOW */}

            <div
                className="
                    pointer-events-none
                    fixed
                    top-1/3
                    right-[-300px]
                    w-[700px]
                    h-[700px]
                    rounded-full
                    bg-emerald-500/[0.04]
                    blur-[150px]
                "
            />


            <div className="relative max-w-7xl mx-auto">


                {/* HEADER */}

                <div className="mb-16">

                    <p className="font-mono text-sm text-emerald-500/60 mb-4">
                        ~/portfolio
                    </p>

                    <h1
                        className="
                            text-6xl md:text-7xl
                            font-bold
                            tracking-tight
                            font-mono
                        "
                    >
                        {"> cd programming"}
                    </h1>

                    <p className="mt-5 text-zinc-500 text-lg">
                        welcome to my programming world
                    </p>

                </div>


                {/* MAIN AREA */}

                <div className="grid lg:grid-cols-[1fr_1.15fr] gap-16 items-center">


                    {/* COMMAND MENU */}

                    <div className="flex flex-col">


                        {/* LANGUAGES */}

                        <button
                            onClick={() => setShowLanguages(!showLanguages)}
                            className="
                                group
                                flex items-center gap-4
                                text-left
                                text-3xl md:text-4xl
                                font-mono
                                py-4
                                transition-all duration-300
                                hover:text-emerald-400
                            "
                        >

                            <FolderOpen
                                size={30}
                                className="
                                    text-zinc-600
                                    group-hover:text-emerald-400
                                    transition-colors duration-300
                                "
                            />

                            <span>
                                {"> ls languages"}
                            </span>

                            <span className="ml-auto text-sm text-zinc-700">
                                {showLanguages ? "[-]" : "[+]"}
                            </span>

                        </button>


                        {showLanguages && (

                            <div
                                className="
                                    ml-12
                                    mb-4
                                    border-l
                                    border-emerald-500/20
                                    pl-6
                                    font-mono
                                    text-zinc-500
                                    space-y-2
                                "
                            >

                                <p className="hover:text-emerald-400 transition-colors">
                                    ├── C#
                                </p>

                                <p className="hover:text-emerald-400 transition-colors">
                                    ├── JavaScript
                                </p>

                                <p className="hover:text-emerald-400 transition-colors">
                                    ├── TypeScript
                                </p>

                                <p className="hover:text-emerald-400 transition-colors">
                                    └── Python
                                </p>

                            </div>

                        )}


                        {/* FRAMEWORKS */}

                        <button
                            onClick={() => setShowFrameworks(!showFrameworks)}
                            className="
                                group
                                flex items-center gap-4
                                text-left
                                text-3xl md:text-4xl
                                font-mono
                                py-4
                                transition-all duration-300
                                hover:text-emerald-400
                            "
                        >

                            <FolderOpen
                                size={30}
                                className="
                                    text-zinc-600
                                    group-hover:text-emerald-400
                                    transition-colors duration-300
                                "
                            />

                            <span>
                                {"> ls frameworks"}
                            </span>

                            <span className="ml-auto text-sm text-zinc-700">
                                {showFrameworks ? "[-]" : "[+]"}
                            </span>

                        </button>


                        {showFrameworks && (

                            <div
                                className="
                                    ml-12
                                    mb-4
                                    border-l
                                    border-emerald-500/20
                                    pl-6
                                    font-mono
                                    text-zinc-500
                                    space-y-2
                                "
                            >

                                <p className="hover:text-emerald-400 transition-colors">
                                    ├── React
                                </p>

                                <p className="hover:text-emerald-400 transition-colors">
                                    ├── Next.js
                                </p>

                                <p className="hover:text-emerald-400 transition-colors">
                                    ├── Tailwind CSS
                                </p>

                                <p className="hover:text-emerald-400 transition-colors">
                                    ├── discord.js
                                </p>

                                <p className="hover:text-emerald-400 transition-colors">
                                    └── Unity
                                </p>

                            </div>

                        )}


                        {/* PROJECTS */}

                        <Link
                            href="/programming/projects"
                            className="
                                group
                                flex items-center gap-4
                                text-3xl md:text-4xl
                                font-mono
                                py-4
                                transition-all duration-300
                                hover:text-emerald-400
                            "
                        >

                            <SquareCode
                                size={30}
                                className="
                                    text-zinc-600
                                    group-hover:text-emerald-400
                                    transition-colors duration-300
                                "
                            />

                            <span>
                                {"> ls projects"}
                            </span>

                            <span
                                className="
                                    ml-auto
                                    text-sm
                                    text-zinc-700
                                    group-hover:text-emerald-500
                                    transition-colors
                                "
                            >
                                →
                            </span>

                        </Link>


                        {/* STATUS */}

                        <div className="mt-12 border-t border-zinc-900 pt-6 font-mono text-xs text-zinc-700">

                            <div className="flex justify-between">

                                <span>
                                    system
                                </span>

                                <span className="text-emerald-500/60">
                                    ● online
                                </span>

                            </div>

                            <div className="flex justify-between mt-2">

                                <span>
                                    environment
                                </span>

                                <span>
                                    yand.dev
                                </span>

                            </div>

                        </div>

                    </div>


                    {/* CRT */}

                    <div className="relative">


                        {/* OUTER GLOW */}

                        <div
                            className="
                                absolute
                                -inset-16
                                rounded-full
                                bg-emerald-400/[0.08]
                                blur-[120px]
                                animate-[crtGlow_4s_ease-in-out_infinite]
                            "
                        />


                        {/* TERMINAL */}

                        <div
                            className="
                                relative
                                z-10
                                w-full
                                aspect-[550/380]
                                rounded-2xl
                                bg-[#111]
                                border
                                border-zinc-800
                                p-3
                                shadow-[0_0_100px_rgba(57,255,20,0.08)]
                            "
                        >

                            {/* CRT FRAME */}

                            <div className="h-full rounded-xl bg-[#050806] p-5 md:p-7">

                                <div
                                    className="
                                        crt-screen
                                        h-full
                                        rounded-[28px]
                                        bg-[#071b10]
                                        p-5 md:p-6
                                        font-mono
                                        text-lime-400
                                        overflow-hidden
                                        relative
                                    "
                                >

                                    <div className="flex items-center gap-2 mb-5 text-xs text-emerald-700">

                                        <span className="w-2 h-2 rounded-full bg-red-500/60" />
                                        <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                                        <span className="w-2 h-2 rounded-full bg-green-500/60" />

                                        <span className="ml-2">
                                            terminal
                                        </span>

                                    </div>


                                    <p className="text-emerald-600 text-sm">
                                        yand@portfolio:~$
                                    </p>


                                    <p className="whitespace-pre-wrap select-none mt-3 text-sm md:text-base leading-relaxed">

                                        {displayedText}

                                        <span className="cursor">
                                            |
                                        </span>

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* BOTTOM */}

                <div
                    className="
                        mt-20
                        pt-6
                        border-t border-zinc-900
                        flex justify-between
                        font-mono
                        text-xs
                        text-zinc-700
                    "
                >

                    <span>
                        /programming
                    </span>

                    <span>
                        build something.
                    </span>

                </div>

            </div>

        </main>
    );
}