"use client";

import { useState } from "react";

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [status, setStatus] = useState("");


    const [sent, setSent] = useState(false);

        const handleSubmit = async (e: React.SubmitEvent) => {
            e.preventDefault();

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
            });

            const data = await response.json();

            if (data.success) {
                setSubmitted(true);

                setName("")
                setEmail("");
                setMessage("");
            }
            else {
                setStatus("Something went wrong. Please try again later.")
            }
        };



    return (
        <main className="min-h-screen bg-black text-white px-6 md:px-12 pt-28">

            <section className="max-w-5xl mx-auto min-h-[80vh] flex flex-col justify-center">

                {/* HEADER */}
                <div className="mb-12">

                    <p className="text-zinc-600 font-mono text-sm mb-4">
                        /contact
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold">
                        <span className="text-purple-400">
                            &gt;
                        </span>{" "}
                        ping yand.dev
                    </h1>

                    <p className="mt-6 text-zinc-500 text-lg max-w-xl leading-8">
                        Got a project, an idea, a question, or just something
                        you think I should see?
                    </p>

                </div>


                {/* TERMINAL */}
                <div className="border border-zinc-900 rounded-xl bg-zinc-950 overflow-hidden">

                    {/* TERMINAL HEADER */}
                    <div className="h-10 border-b border-zinc-900 flex items-center px-4">

                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>

                        <span className="ml-4 text-xs text-zinc-600 font-mono">
                            yand@portfolio:~
                        </span>

                    </div>


                    {/* FORM */}
                    <div className="p-6 md:p-10 font-mono">

                        <div className="text-zinc-600 text-sm mb-8">
                            <span className="text-purple-400">
                                yand@portfolio
                            </span>
                            <span className="text-zinc-700">
                                :
                            </span>
                            <span className="text-blue-400">
                                ~
                            </span>
                            <span className="text-zinc-600">
                                $
                            </span>{" "}
                            ./send-message

                        </div>


                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >

                            {/* NAME */}
                            <div>
                                <label className="block text-zinc-500 text-sm mb-2">
                                    name
                                </label>

                                <input
                                    type="text"
                                    placeholder="your name"
                                    className="w-full bg-black border border-zinc-900 rounded-lg px-4 py-3 text-white placeholder-zinc-700 outline-none focus:border-purple-500/60 transition-colors"
                                    value = {name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>


                            {/* EMAIL */}
                            <div>
                                <label className="block text-zinc-500 text-sm mb-2">
                                    email
                                </label>

                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full bg-black border border-zinc-900 rounded-lg px-4 py-3 text-white placeholder-zinc-700 outline-none focus:border-purple-500/60 transition-colors"
                                    value = {email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>


                            {/* MESSAGE */}
                            <div>
                                <label className="block text-zinc-500 text-sm mb-2">
                                    message
                                </label>

                                <textarea
                                    rows={6}
                                    placeholder="say something..."
                                    className="w-full bg-black border border-zinc-900 rounded-lg px-4 py-3 text-white placeholder-zinc-700 outline-none resize-none focus:border-purple-500/60 transition-colors"
                                    value = {message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>


                            {/* SEND */}
                            <button
                                type="submit"
                                className="px-6 py-3 rounded-lg border border-purple-500/40 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300"
                            >
                                ./send
                            </button>

                        </form>


                        {/* SUCCESS */}
                        {submitted && (
                            <div className="mt-8 border-t border-zinc-900 pt-6">

                                <p className="text-green-400">
                                    ✓ message queued successfully.
                                </p>

                                <p className="text-zinc-600 text-sm mt-2">
                                    yand will get back to you as soon as possible.
                                </p>

                            </div>
                        )}

                    </div>

                </div>


                {/* OTHER WAYS */}
                <div className="grid md:grid-cols-3 gap-4 mt-6 mb-28">

                    <a
                        href="mailto:you@example.com"
                        className="border border-zinc-900 bg-zinc-950 rounded-lg p-5 hover:border-purple-500/40 transition-all"
                    >
                        <p className="text-zinc-600 text-xs font-mono mb-2">
                            email
                        </p>

                        <p className="text-zinc-400">
                            send an email →
                        </p>
                    </a>


                    <a
                        href="#"
                        className="border border-zinc-900 bg-zinc-950 rounded-lg p-5 hover:border-purple-500/40 transition-all"
                    >
                        <p className="text-zinc-600 text-xs font-mono mb-2">
                            github
                        </p>

                        <p className="text-zinc-400">
                            inspect the code →
                        </p>
                    </a>


                    <a
                        href="#"
                        className="border border-zinc-900 bg-zinc-950 rounded-lg p-5 hover:border-purple-500/40 transition-all"
                    >
                        <p className="text-zinc-600 text-xs font-mono mb-2">
                            somewhere else
                        </p>

                        <p className="text-zinc-400">
                            find me →
                        </p>
                    </a>

                </div>

            </section>

        </main>
    );
}