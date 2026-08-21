"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function Home() {
  const fullText =
    ">whoami\ngenius, video game music composer, developer,\nand electronics engineer";

  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;

      if (i === fullText.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#080808] text-white mt-16 overflow-hidden">

      {/* subtle background grid */}
      <div
        className="
          pointer-events-none
          fixed inset-0
          opacity-[0.035]
          bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      <section className="relative px-6 md:px-20 pt-24 pb-24">

        {/* HERO */}

        <div className="max-w-5xl">

          <p className="text-zinc-600 font-mono text-sm mb-4">
            ~/portfolio
          </p>

          <h1
            className="
              text-8xl md:text-9xl
              font-bold
              tracking-tight
              select-none
              w-fit
              transition-all
              duration-500
              hover:tracking-widest
              hover:text-zinc-200
            "
          >
            yand
          </h1>

          <div className="mt-6 font-mono text-zinc-400 text-lg md:text-xl whitespace-pre-line leading-relaxed">
            {text}
            <span className="cursor">|</span>
          </div>

        </div>


        {/* MAIN NAVIGATION */}

        <div className="mt-24">

          <div className="flex flex-col lg:flex-row gap-3">

            {/* PROGRAMMING */}

            <Link
              href="/programming"
              className="
                group relative
                flex-1
                min-h-[360px]
                overflow-hidden
                rounded-sm
                border border-zinc-900
                bg-[#0b100d]
                hover:flex-[1.25]
                transition-all duration-500 ease-out
              "
            >

              {/* glow */}

              <div
                className="
                  absolute
                  -top-32
                  -right-32
                  w-96
                  h-96
                  rounded-full
                  bg-emerald-500/10
                  blur-3xl
                  group-hover:bg-emerald-400/20
                  transition-all duration-700
                "
              />

              {/* accent line */}

              <div
                className="
                  absolute
                  top-0 left-0
                  h-[2px]
                  w-0
                  bg-emerald-400
                  group-hover:w-full
                  transition-all duration-500
                "
              />

              <div className="relative min-h-[360px] h-full flex flex-col justify-center items-center">

                <span
                  className="
                    font-mono
                    text-3xl md:text-4xl
                    text-zinc-200
                    group-hover:text-emerald-300
                    transition-colors duration-300
                  "
                >
                  {"> cd programming"}
                </span>

                <div className="mt-8 flex flex-col items-center gap-2 font-mono text-sm">

                  <p className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-emerald-300">
                    web development
                  </p>

                  <p className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75 text-zinc-400">
                    react / next.js
                  </p>

                  <p className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-150 text-zinc-400">
                    unity
                  </p>

                  <p className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-200 text-zinc-400">
                    interactive projects
                  </p>

                </div>

                <span
                  className="
                    absolute
                    bottom-6
                    text-xs
                    font-mono
                    text-zinc-700
                    group-hover:text-emerald-500/60
                    transition-colors
                  "
                >
                  [ ENTER ]
                </span>

              </div>

            </Link>


            {/* MUSIC */}

            <Link
              href="/music"
              className="
                group relative
                flex-1
                min-h-[360px]
                overflow-hidden
                rounded-sm
                border border-zinc-900
                bg-[#0d0a12]
                hover:flex-[1.25]
                transition-all duration-500 ease-out
              "
            >

              <div
                className="
                  absolute
                  -bottom-32
                  -left-32
                  w-96
                  h-96
                  rounded-full
                  bg-purple-500/10
                  blur-3xl
                  group-hover:bg-purple-500/20
                  transition-all duration-700
                "
              />

              <div
                className="
                  absolute
                  top-0 right-0
                  h-[2px]
                  w-0
                  bg-purple-400
                  group-hover:w-full
                  transition-all duration-500
                "
              />

              <div className="relative h-full flex flex-col justify-center items-center">

                <span
                  className="
                    font-mono
                    text-3xl md:text-4xl
                    text-zinc-200
                    group-hover:text-purple-300
                    transition-colors duration-300
                  "
                >
                  {"> cd music"}
                </span>

                <div className="mt-8 flex flex-col items-center gap-2 font-mono text-sm">

                  <p className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-purple-300">
                    game soundtracks
                  </p>

                  <p className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75 text-zinc-400">
                    albums
                  </p>

                  <p className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-150 text-zinc-400">
                    sound design
                  </p>

                </div>

                <span
                  className="
                    absolute
                    bottom-6
                    text-xs
                    font-mono
                    text-zinc-700
                    group-hover:text-purple-500/60
                    transition-colors
                  "
                >
                  [ ENTER ]
                </span>

              </div>

            </Link>

          </div>


          {/* SECONDARY NAVIGATION */}

          <div className="mt-20 flex flex-col lg:flex-row gap-3">

            {/* ABOUT */}

            <Link
              href="/about"
              className="
                group relative
                flex-1
                min-h-[240px]
                overflow-hidden
                rounded-sm
                border border-zinc-900
                bg-[#090d10]
                hover:flex-[1.25]
                transition-all duration-500 ease-out
              "
            >

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-cyan-500/[0.04]
                  via-transparent
                  to-transparent
                  group-hover:from-cyan-400/[0.10]
                  transition-all duration-500
                "
              />

              <div
                className="
                  absolute
                  left-0 top-0
                  w-[2px]
                  h-0
                  bg-cyan-400
                  group-hover:h-full
                  transition-all duration-500
                "
              />

              <div className="relative min-h-[240px] h-full flex flex-col items-center justify-center">

                <span
                  className="
                    font-mono
                    text-2xl md:text-3xl
                    text-zinc-300
                    group-hover:text-cyan-300
                    transition-colors duration-300
                  "
                >
                  {"> cat about.txt"}
                </span>

                <p
                  className="
                    mt-5
                    font-mono
                    text-sm
                    text-zinc-600
                    opacity-0
                    translate-y-3
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all duration-300
                  "
                >
                  who is yand?
                </p>

              </div>

            </Link>


            {/* CONTACT */}

            <Link
              href="/contact"
              className="
                group relative
                flex-1
                min-h-[240px]
                overflow-hidden
                rounded-sm
                border border-zinc-900
                bg-[#100d08]
                hover:flex-[1.25]
                transition-all duration-500 ease-out
              "
            >

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-bl
                  from-orange-500/[0.04]
                  via-transparent
                  to-transparent
                  group-hover:from-orange-400/[0.10]
                  transition-all duration-500
                "
              />

              <div
                className="
                  absolute
                  right-0 top-0
                  w-[2px]
                  h-0
                  bg-orange-400
                  group-hover:h-full
                  transition-all duration-500
                "
              />

              <div className="relative h-full flex flex-col items-center justify-center">

                <span
                  className="
                    font-mono
                    text-2xl md:text-3xl
                    text-zinc-300
                    group-hover:text-orange-300
                    transition-colors duration-300
                  "
                >
                  {"> ping yand.dev"}
                </span>

                <p
                  className="
                    mt-5
                    font-mono
                    text-sm
                    text-zinc-600
                    opacity-0
                    translate-y-3
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all duration-300
                  "
                >
                  establish connection
                </p>

              </div>

            </Link>

          </div>

        </div>


        {/* FOOTER-LIKE TERMINAL STATUS */}

        <div className="mt-20 flex justify-between items-center font-mono text-xs text-zinc-700">

          <span>
            yand.dev
          </span>

          <span>
            system online
          </span>

          <span>
            © 2026
          </span>

        </div>

      </section>

    </main>
  );
}