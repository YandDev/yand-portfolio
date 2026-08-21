"use client";

import { useState } from "react";

export default function About() {
    const [showMore, setShowMore] = useState(false);

    return (
        <main className="min-h-screen bg-black text-white px-6 md:px-12 pt-28">

            {/* HERO */}
            <section className="max-w-6xl mx-auto min-h-[70vh] flex flex-col justify-center">

                <p className="text-zinc-500 font-mono text-sm mb-4">
                    /about
                </p>

                <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                    hey, i'm{" "}
                    <span className="text-purple-400">
                        yand.
                    </span>
                </h1>

                <p className="mt-8 max-w-2xl text-xl md:text-2xl text-zinc-400 leading-relaxed">
                    I'm a developer, musician, designer, and professional
                    enjoyer of making things that probably didn't need to
                    exist in the first place.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">

                    <span className="px-4 py-2 border border-zinc-800 rounded-full text-sm text-zinc-400">
                        programmer
                    </span>

                    <span className="px-4 py-2 border border-zinc-800 rounded-full text-sm text-zinc-400">
                        musician
                    </span>

                    <span className="px-4 py-2 border border-zinc-800 rounded-full text-sm text-zinc-400">
                        student
                    </span>

                    <span className="px-4 py-2 border border-zinc-800 rounded-full text-sm text-zinc-400">
                        professional tinkerer
                    </span>

                </div>

            </section>


            {/* DIVIDER */}
            <div className="max-w-6xl mx-auto border-t border-zinc-900" />


            {/* STORY */}
            <section className="max-w-6xl mx-auto py-24 grid md:grid-cols-2 gap-16">

                <div>
                    <p className="text-purple-400 font-mono text-sm mb-4">
                        01 / the story
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        So... what do I actually do?
                    </h2>
                </div>

                <div className="text-zinc-400 text-lg leading-8 space-y-6">

                    <p>
                        I like building things.
                    </p>

                    <p>
                        Sometimes that means writing code. Sometimes it means
                        making music. Sometimes it means spending six hours
                        building an unnecessarily complicated interface because
                        I thought it would be funny.
                    </p>

                    <p>
                        My main focus is programming, particularly web
                        development and interactive applications. I enjoy
                        projects where I can actually <span className="text-white rainbow-hover">
                        interact with the thing I've built</span> rather than
                        simply looking at a finished webpage.
                    </p>

                    <p>
                        I'm also heavily interested in electronics and
                        engineering, which has slowly made its way into the
                        kinds of projects I want to build.
                    </p>

                </div>

            </section>


            {/* CURRENTLY */}
            <section className="max-w-6xl mx-auto py-24">

                <p className="text-purple-400 font-mono text-sm mb-4">
                    02 / currently
                </p>

                <h2 className="text-4xl md:text-5xl font-bold mb-12">
                    What am I up to?
                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                    {/* CARD */}
                    <div className="group border border-zinc-900 bg-zinc-950 p-8 rounded-xl hover:border-purple-500/40 transition-all duration-300">

                        <div className="text-3xl mb-6">
                            {"</>"}
                        </div>

                        <h3 className="text-xl font-bold mb-3">
                            Building
                        </h3>

                        <p className="text-zinc-500 leading-7">
                            Working on my portfolio and a growing collection
                            of weird little interactive projects.
                        </p>

                    </div>


                    <div className="group border border-zinc-900 bg-zinc-950 p-8 rounded-xl hover:border-purple-500/40 transition-all duration-300">

                        <div className="text-3xl mb-6">
                            ♫
                        </div>

                        <h3 className="text-xl font-bold mb-3">
                            Making music
                        </h3>

                        <p className="text-zinc-500 leading-7">
                            Playing guitar, experimenting with production,
                            and slowly trying to turn random ideas into
                            actual songs.
                        </p>

                    </div>


                    <div className="group border border-zinc-900 bg-zinc-950 p-8 rounded-xl hover:border-purple-500/40 transition-all duration-300">

                        <div className="text-3xl mb-6">
                            ⚡
                        </div>

                        <h3 className="text-xl font-bold mb-3">
                            Learning
                        </h3>

                        <p className="text-zinc-500 leading-7">
                            Starting my engineering journey and learning how
                            software, electronics, and physical systems can
                            come together.
                        </p>

                    </div>

                </div>

            </section>


            {/* TECH STACK */}
            <section className="max-w-6xl mx-auto py-24">

                <p className="text-purple-400 font-mono text-sm mb-4">
                    03 / toolbox
                </p>

                <h2 className="text-4xl md:text-5xl font-bold mb-12">
                    Things I like using.
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                    {[
                        "JavaScript",
                        "TypeScript",
                        "React",
                        "Next.js",
                        "Tailwind CSS",
                        "Python",
                        "C#",
                        "Git",
                    ].map((tech) => (
                        <div
                            key={tech}
                            className="border border-zinc-900 bg-zinc-950 rounded-lg p-5 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-200"
                        >
                            {tech}
                        </div>
                    ))}

                </div>

            </section>


            {/* PHILOSOPHY */}
            <section className="max-w-6xl mx-auto py-24">

                <div className="border border-zinc-900 bg-zinc-950 rounded-2xl p-8 md:p-16">

                    <p className="text-purple-400 font-mono text-sm mb-6">
                        04 / philosophy
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
                        I don't really want to make
                        <span className="text-zinc-500">
                            {" "}normal websites.
                        </span>
                    </h2>

                    <p className="mt-8 text-zinc-500 text-lg leading-8 max-w-3xl">
                        A portfolio should tell you something about the person
                        who made it. If you can replace the entire thing with
                        a generic template and nothing changes, then what's
                        the point?
                    </p>

                    <p className="mt-6 text-zinc-500 text-lg leading-8 max-w-3xl">
                        That's why I'm experimenting with interactive pages,
                        little games, fake Discord servers, strange UI ideas,
                        music, animations, and whatever else I happen to think
                        of.
                    </p>

                </div>

            </section>


            {/* OPTIONAL MORE */}
            <section className="max-w-6xl mx-auto py-16">

                <button
                    onClick={() => setShowMore(!showMore)}
                    className="text-zinc-500 hover:text-white transition-colors font-mono text-sm"
                >
                    {showMore
                        ? "[-] hide unnecessary information"
                        : "[+] show unnecessary information"
                    }
                </button>

                {showMore && (
                    <div className="mt-8 grid md:grid-cols-2 gap-8 text-zinc-500">

                        <div className="border border-zinc-900 p-6 rounded-lg">
                            <p className="text-white mb-3">
                                Things I enjoy
                            </p>

                            <p className="leading-7">
                                Programming, guitar, music production,
                                games, physics, electronics, weird UI,
                                long songs, and starting projects at
                                unreasonable hours.
                            </p>
                        </div>

                        <div className="border border-zinc-900 p-6 rounded-lg">
                            <p className="text-white mb-3">
                                Current objective
                            </p>

                            <p className="leading-7">
                                Make cool things. Learn a ridiculous amount.
                                Eventually figure out what the hell I'm
                                actually doing.
                            </p>
                        </div>

                    </div>
                )}

            </section>


            {/* END */}
            <section className="max-w-6xl mx-auto pt-24 pb-8">

                <div className="border-t border-zinc-900 pt-12 flex flex-col md:flex-row justify-between gap-6">

                    <div>
                        <p className="text-zinc-600 font-mono text-sm">
                            yand / about
                        </p>

                        <p className="text-zinc-500 mt-2">
                            still figuring things out.
                        </p>
                    </div>

                    <p className="text-zinc-700 font-mono text-sm">
                        © 2026
                    </p>

                </div>

            </section>

        </main>
    );
}