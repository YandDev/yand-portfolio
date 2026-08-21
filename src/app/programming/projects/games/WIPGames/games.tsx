"use client";

import { useState, useEffect } from "react";

export default function Games() {

    const [player, setPlayer] = useState({
        x: 400,
        y: 250
    })

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            
            const speed = 100;

            setPlayer((prev) => {
                let x = prev.x;
                let y = prev.y;

                if (event.key === "w" || event.key === "ArrowUp") {
                    y -= speed;
                }
                if (event.key === "a" || event.key === "ArrowLeft") {
                    x -= speed;
                }
                if (event.key === "s" || event.key === "ArrowDown") {
                    y += speed;
                }
                if (event.key === "d" || event.key === "ArrowRight") {
                    x += speed;
                }

                return { x,y };
            });
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);


    return (
        <main className="min-h-screen bg-black text-white flex items-center justify-center">

                        <div
                            className="relative w-[800px] h-[500px] bg-[#111111] border-2 border-zinc-700 overflow-hidden"
                        >
                        <div className="absolute w-8 h-8 bg-purple-500" style={{left:player.x, top:player.y}} />

                                {/* Top wall */}

                                <div className="absolute top-0 left-0 w-full h-8 bg-zinc-800" />

                                {/* Bottom wall */}

                                <div className="absolute bottom-0 left-0 w-full h-8 bg-zinc-800" />

                                {/* Left wall */}

                                <div className="absolute top-0 left-0 w-8 h-full bg-zinc-800" />

                                {/* Right wall */}

                                <div className="absolute top-0 right-0 w-8 h-full bg-zinc-800" />
                    </div>

        </main>
    )
}