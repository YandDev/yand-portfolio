"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
    Play,
    Pause,
    SkipBack,
    SkipForward,
    Volume2,
    VolumeX,
    Disc3,
    Music2,
    Waves,
    ArrowUpRight,
    ListMusic,
    Circle,
} from "lucide-react";
import Image from "next/image";

export default function Music() {

    /*
    ==================================================
    RELEASE LIBRARY
    ==================================================
    */

    const releases = [
        {
            title: "pomegranate",
            type: "Album",
            year: "2026",
            subtitle: "debut instrumental album",
            description:
                "The creation that culminated over a year of high stress highschool.",
            accent: "from-purple-900/60 to-pink-900/20",
            cover: "/music/covers/pomegranate-cover.jpg",

            tracks: [
                {
                    title: "are you still here",
                    file: "/music/are-you-still-here.m4a",
                },
                {
                    title: "Idle Nomenclature",
                    file: "/music/Idle-Nomenclature.m4a",
                },
                {
                    title: "unstable ceasefire",
                    file: "/music/unstable-ceasefire.m4a",
                },
                {
                    title: "exhaustion",
                    file: "/music/exhaustion.m4a",
                },
                {
                    title: "im trying",
                    file: "/music/im-trying.m4a",
                },
                {
                    title: "hourglass",
                    file: "/music/hourglass.m4a",
                },
                {
                    title: "ammonium hydroxide",
                    file: "/music/ammonium-hydroxide.m4a",
                },
                {
                    title: "sacrificial oath",
                    file: "/music/sacrificial-oath.m4a",
                },
                {
                    title: "(rough signal)",
                    file: "/music/rough-signal.m4a",
                },
                {
                    title: "roll end credits",
                    file: "/music/roll-end-credits.m4a",
                },
            ],
        },

        {
            title: "Game OST // 01",
            type: "Soundtrack",
            year: "2026",
            subtitle: "original game soundtrack",
            description:
                "Music written for games, experiments and things that probably need a soundtrack.",
            accent: "from-indigo-900/60 to-purple-900/20",

            tracks: [],
        },

        {
            title: "Experiments",
            type: "Collection",
            year: "2025",
            subtitle: "production experiments",
            description:
                "Strange loops, production experiments and things that were never supposed to leave the project folder.",
            accent: "from-fuchsia-900/50 to-zinc-900",

            tracks: [],
        },

        // {
        //     title: "some single",
        //     type: "Single",
        //     year: "2026",
        //     subtitle: "single",
        //     description: "whatever",
        //     accent: "from-blue-900/60 to-cyan-900/20",

        //     tracks: [
        //         {
        //             title: "some song",
        //             file: "/music/some-song.m4a",
        //         },
        //     ],
        // }
    ];


    /*
    ==================================================
    STATE
    ==================================================
    */

    const audioRef = useRef<HTMLAudioElement | null>(null);

    const [selectedRelease, setSelectedRelease] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(0);

    const [isPlaying, setIsPlaying] = useState(false);

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [audioError, setAudioError] = useState(false);


    /*
    ==================================================
    ACTIVE RELEASE
    ==================================================
    */

    const activeRelease = releases[selectedRelease];
    const tracks = activeRelease.tracks;
    const track = tracks[currentTrack] ?? null;


    /*
    ==================================================
    WAVEFORM
    ==================================================
    */

    const waveform = [
        18, 32, 24, 48, 36, 62, 42, 74,
        52, 34, 68, 82, 46, 58, 72, 40,
        28, 54, 38, 76, 64, 42, 82, 56,
        34, 68, 44, 72, 58, 36, 64, 48,
        26, 52, 38, 70, 84, 44, 60, 32,
        54, 76, 42, 64, 36, 58, 48, 72,
    ];


    /*
    ==================================================
    AUDIO EVENTS
    ==================================================
    */

    useEffect(() => {

        const audio = audioRef.current;

        if (!audio || !track) return;


        const handleLoadedMetadata = () => {

            setDuration(audio.duration);
            setIsLoading(false);
            setAudioError(false);

        };


        const handleTimeUpdate = () => {

            setCurrentTime(audio.currentTime);

        };


        const handleLoadStart = () => {

            setIsLoading(true);
            setAudioError(false);

        };


        const handleError = () => {

            setIsLoading(false);
            setAudioError(true);
            setIsPlaying(false);

            console.error(
                `Could not load audio file: ${track.file}`
            );

        };


        const handleEnded = () => {

            if (currentTrack < tracks.length - 1) {

                setCurrentTrack(
                    (prev) => prev + 1
                );

            } else {

                setIsPlaying(false);
                setCurrentTime(0);
                audio.currentTime = 0;

            }

        };


        audio.addEventListener(
            "loadedmetadata",
            handleLoadedMetadata
        );

        audio.addEventListener(
            "timeupdate",
            handleTimeUpdate
        );

        audio.addEventListener(
            "loadstart",
            handleLoadStart
        );

        audio.addEventListener(
            "error",
            handleError
        );

        audio.addEventListener(
            "ended",
            handleEnded
        );


        return () => {

            audio.removeEventListener(
                "loadedmetadata",
                handleLoadedMetadata
            );

            audio.removeEventListener(
                "timeupdate",
                handleTimeUpdate
            );

            audio.removeEventListener(
                "loadstart",
                handleLoadStart
            );

            audio.removeEventListener(
                "error",
                handleError
            );

            audio.removeEventListener(
                "ended",
                handleEnded
            );

        };

    }, [currentTrack, track, tracks.length]);


    /*
    ==================================================
    CHANGE TRACK / RELEASE
    ==================================================
    */

    useEffect(() => {

        const audio = audioRef.current;

        if (!audio || !track) {

            setIsLoading(false);
            setDuration(0);
            setCurrentTime(0);
            setAudioError(false);

            return;

        }


        audio.pause();

        setCurrentTime(0);
        setDuration(0);
        setIsLoading(true);
        setAudioError(false);

        audio.load();


        if (isPlaying) {

            const playAfterLoad = () => {

                audio
                    .play()
                    .catch(() => {
                        setIsPlaying(false);
                    });

                audio.removeEventListener(
                    "canplay",
                    playAfterLoad
                );

            };


            audio.addEventListener(
                "canplay",
                playAfterLoad
            );


            return () => {

                audio.removeEventListener(
                    "canplay",
                    playAfterLoad
                );

            };

        }

    }, [currentTrack, selectedRelease]);


    /*
    ==================================================
    SELECT RELEASE
    ==================================================
    */

    const selectRelease = (index: number) => {

        if (index === selectedRelease) {

            if (tracks.length > 0) {
                return;
            }

        }

        const audio = audioRef.current;

        const wasPlaying = isPlaying;

        if (audio) {
            audio.pause();
        }

        setSelectedRelease(index);
        setCurrentTrack(0);
        setCurrentTime(0);
        setDuration(0);
        setAudioError(false);

        const newTracks = releases[index].tracks;

        if (newTracks.length === 0) {

            setIsPlaying(false);

        } else {

            setIsPlaying(wasPlaying);

        }

    };


    /*
    ==================================================
    PLAY / PAUSE
    ==================================================
    */

    const togglePlay = async () => {

        const audio = audioRef.current;

        if (!audio || !track || audioError) return;


        if (isPlaying) {

            audio.pause();
            setIsPlaying(false);

        } else {

            try {

                await audio.play();
                setIsPlaying(true);

            } catch (error) {

                console.error(
                    "Unable to play audio:",
                    error
                );

            }

        }

    };


    /*
    ==================================================
    SELECT TRACK
    ==================================================
    */

    const selectTrack = (index: number) => {

        if (!tracks[index]) return;


        if (index === currentTrack) {

            togglePlay();
            return;

        }


        setCurrentTrack(index);
        setIsPlaying(true);

    };


    /*
    ==================================================
    NEXT
    ==================================================
    */

    const nextTrack = () => {

        if (tracks.length === 0) return;


        setCurrentTrack(
            (prev) =>
                (prev + 1) % tracks.length
        );

        setIsPlaying(true);

    };


    /*
    ==================================================
    PREVIOUS
    ==================================================
    */

    const previousTrack = () => {

        const audio = audioRef.current;

        if (!audio || tracks.length === 0) return;


        if (audio.currentTime > 3) {

            audio.currentTime = 0;
            setCurrentTime(0);

            return;

        }


        setCurrentTrack(
            (prev) =>
                prev === 0
                    ? tracks.length - 1
                    : prev - 1
        );

        setIsPlaying(true);

    };


    /*
    ==================================================
    SEEK
    ==================================================
    */

    const handleSeek = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {

        const audio = audioRef.current;

        if (!audio || !duration) return;


        const newTime = Number(
            event.target.value
        );

        audio.currentTime = newTime;

        setCurrentTime(newTime);

    };


    /*
    ==================================================
    VOLUME
    ==================================================
    */

    const handleVolume = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {

        const audio = audioRef.current;

        if (!audio) return;


        const newVolume = Number(
            event.target.value
        );

        audio.volume = newVolume;

        setVolume(newVolume);
        setIsMuted(newVolume === 0);

    };


    /*
    ==================================================
    MUTE
    ==================================================
    */

    const toggleMute = () => {

        const audio = audioRef.current;

        if (!audio) return;


        if (isMuted) {

            const restoredVolume =
                volume === 0
                    ? 1
                    : volume;

            audio.volume = restoredVolume;

            setVolume(restoredVolume);
            setIsMuted(false);

        } else {

            audio.volume = 0;

            setIsMuted(true);

        }

    };


    /*
    ==================================================
    FORMAT TIME
    ==================================================
    */

    const formatTime = (time: number) => {

        if (!Number.isFinite(time)) {
            return "00:00";
        }


        const minutes =
            Math.floor(time / 60);

        const seconds =
            Math.floor(time % 60);


        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    };


    /*
    ==================================================
    RETURN
    ==================================================
    */

    return (

        <main
            className="
                min-h-screen
                bg-[#070607]
                text-white
                px-6
                md:px-12
                py-24
                overflow-hidden
            "
        >

            {/* BACKGROUND */}

            <div
                className="
                    fixed
                    inset-0
                    pointer-events-none
                    opacity-[0.025]
                    bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
                    bg-[size:40px_40px]
                "
            />

            <div
                className="
                    fixed
                    top-20
                    right-[-200px]
                    w-[600px]
                    h-[600px]
                    rounded-full
                    bg-purple-600/10
                    blur-[160px]
                    pointer-events-none
                "
            />


            <div className="relative max-w-7xl mx-auto">


                {/* HEADER */}

                <section className="mb-20">

                    <div className="flex items-center gap-3 mb-5">

                        <Music2
                            size={17}
                            className="text-purple-400/60"
                        />

                        <p className="font-mono text-sm text-purple-400/60">
                            ~/music
                        </p>

                    </div>


                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                        {"> music"}
                    </h1>


                    <p
                        className="
                            mt-6
                            max-w-2xl
                            text-xl
                            text-zinc-500
                            leading-relaxed
                        "
                    >
                        Songs, soundtracks, experiments and whatever
                        else happens when I plug a guitar into a computer.
                    </p>

                </section>


                {/* AUDIO */}

                {track && (
                    <audio
                        ref={audioRef}
                        src={track.file}
                        preload="metadata"
                    />
                )}


                {/* NOW PLAYING */}

                <section className="mb-24">

                    <div className="flex items-center gap-3 mb-6">

                        <span className="text-xs font-mono text-purple-400">
                            01 / NOW PLAYING
                        </span>

                        <div className="h-px flex-1 bg-zinc-900" />

                        <span className="text-xs font-mono text-zinc-700">
                            {activeRelease.title.toUpperCase()}
                            {" / "}
                            {tracks.length}
                            {" "}
                            {tracks.length === 1
                                ? "TRACK"
                                : "TRACKS"}
                        </span>

                    </div>


                    <div
                        className="
                            border
                            border-zinc-900
                            bg-zinc-950
                            rounded-2xl
                            overflow-hidden
                            shadow-[0_0_100px_rgba(168,85,247,0.05)]
                        "
                    >

                        <div className="grid lg:grid-cols-[260px_1fr_280px]">


                            {/* ALBUM ART */}

                            <div
                                className={`
                                    relative
                                    min-h-[300px]
                                    overflow-hidden
                                    bg-gradient-to-br
                                    ${activeRelease.accent}
                                `}
                            >

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.35),transparent_60%)]
                                    "
                                />


                                {/* VINYL */}

                                <div
                                    className={`
                                        absolute
                                        w-48
                                        h-48
                                        rounded-full
                                        left-1/2
                                        top-1/2
                                        -translate-x-1/2
                                        -translate-y-1/2
                                        shadow-2xl
                                        overflow-hidden
                                        border
                                        border-white/10
                                        ${isPlaying ? "animate-spin" : ""}
                                    `}
                                    style={{
                                        animationDuration: "8s",
                                        animationTimingFunction: "linear",
                                    }}
                                >
                                    {/* COVER */}

                                    {activeRelease.cover ? (
                                        <Image
                                            src={activeRelease.cover}
                                            alt={`${activeRelease.title} cover art`}
                                            fill
                                            className="object-cover brightness-75"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-black" />
                                    )}

                                    {/* VINYL GROOVES */}

                                    <div className="absolute inset-3 rounded-full border border-white/10" />

                                    <div className="absolute inset-6 rounded-full border border-white/[0.08]" />

                                    <div className="absolute inset-9 rounded-full border border-white/[0.07]" />

                                    <div className="absolute inset-12 rounded-full border border-white/[0.06]" />

                                    <div className="absolute inset-[60px] rounded-full border border-white/[0.05]" />

                                    {/* CENTER LABEL / HOLE */}

                                    <div
                                        className="
                                            absolute
                                            left-1/2
                                            top-1/2
                                            -translate-x-1/2
                                            -translate-y-1/2
                                            w-10
                                            h-10
                                            rounded-full
                                            bg-black/70
                                            border
                                            border-white/20
                                        "
                                    />

                                    <div
                                        className="
                                            absolute
                                            left-1/2
                                            top-1/2
                                            -translate-x-1/2
                                            -translate-y-1/2
                                            w-3
                                            h-3
                                            rounded-full
                                            bg-purple-400
                                        "
                                    />
                                </div>


                                <div className="absolute bottom-6 left-6">

                                    <p className="font-mono text-xs text-purple-300/60">
                                        YAND / {String(selectedRelease + 1).padStart(3, "0")}
                                    </p>

                                    <p className="mt-1 text-xs text-white/30">
                                        {activeRelease.title.toUpperCase()}
                                    </p>

                                </div>

                            </div>


                            {/* PLAYER */}

                            <div
                                className="
                                    p-8
                                    md:p-10
                                    flex
                                    flex-col
                                    justify-between
                                    min-h-[420px]
                                    border-x
                                    border-zinc-900
                                "
                            >

                                <div>

                                    <div className="flex items-center justify-between gap-4">

                                        <p className="font-mono text-xs text-purple-400">
                                            NOW PLAYING
                                        </p>

                                        <span className="font-mono text-[10px] text-zinc-700">
                                            {activeRelease.type.toUpperCase()}
                                            {" / "}
                                            {activeRelease.year}
                                        </span>

                                    </div>


                                    {track ? (

                                        <>

                                            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
                                                {track.title}
                                            </h2>

                                            <p className="mt-2 text-zinc-500">
                                                {activeRelease.title}
                                            </p>

                                        </>

                                    ) : (

                                        <>

                                            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-zinc-500">
                                                Nothing loaded
                                            </h2>

                                            <p className="mt-2 text-zinc-700">
                                                This release doesn't have any tracks yet.
                                            </p>

                                        </>

                                    )}


                                    {audioError && (

                                        <div
                                            className="
                                                mt-6
                                                p-4
                                                border
                                                border-red-900/40
                                                bg-red-950/20
                                                rounded-lg
                                            "
                                        >

                                            <p className="text-xs font-mono text-red-400">
                                                AUDIO ERROR
                                            </p>

                                            <p className="mt-1 text-xs text-zinc-500">
                                                Could not load this track.
                                            </p>

                                        </div>

                                    )}

                                </div>


                                {/* WAVEFORM */}

                                <div className="mt-10">

                                    <div
                                        className={`
                                            h-20
                                            flex
                                            items-center
                                            gap-[3px]
                                            overflow-hidden
                                            ${
                                                !track
                                                    ? "opacity-20"
                                                    : ""
                                            }
                                        `}
                                    >

                                        {waveform.map(
                                            (height, index) => {

                                                const progressPosition =
                                                    (index / waveform.length) * 100;

                                                const played =
                                                    progressPosition <
                                                    (
                                                        duration
                                                            ? (currentTime / duration) * 100
                                                            : 0
                                                    );

                                                return (

                                                    <div
                                                        key={index}
                                                        className={`
                                                            flex-1
                                                            rounded-full
                                                            transition-all
                                                            duration-150
                                                            ${
                                                                played
                                                                    ? "bg-purple-400"
                                                                    : "bg-zinc-800"
                                                            }
                                                        `}
                                                        style={{
                                                            height: `${height}%`,
                                                        }}
                                                    />

                                                );

                                            }
                                        )}

                                    </div>


                                    <input
                                        type="range"
                                        min="0"
                                        max={duration || 0}
                                        value={currentTime}
                                        onChange={handleSeek}
                                        disabled={!duration || !track}
                                        aria-label="Seek through track"
                                        className="
                                            w-full
                                            h-1
                                            accent-purple-400
                                            cursor-pointer
                                            disabled:opacity-30
                                        "
                                    />


                                    <div
                                        className="
                                            flex
                                            justify-between
                                            mt-2
                                            text-xs
                                            font-mono
                                            text-zinc-700
                                        "
                                    >

                                        <span>
                                            {formatTime(currentTime)}
                                        </span>

                                        <span>
                                            {formatTime(duration)}
                                        </span>

                                    </div>

                                </div>


                                {/* CONTROLS */}

                                <div
                                    className="
                                        mt-8
                                        flex
                                        items-center
                                        justify-between
                                    "
                                >

                                    <div className="flex items-center gap-3">

                                        <button
                                            onClick={toggleMute}
                                            disabled={!track}
                                            aria-label={
                                                isMuted
                                                    ? "Unmute"
                                                    : "Mute"
                                            }
                                            className="
                                                text-zinc-600
                                                hover:text-white
                                                transition-colors
                                                disabled:opacity-20
                                            "
                                        >

                                            {isMuted || volume === 0
                                                ? <VolumeX size={18} />
                                                : <Volume2 size={18} />
                                            }

                                        </button>


                                        <input
                                            type="range"
                                            min="0"
                                            max="1"
                                            step="0.01"
                                            value={
                                                isMuted
                                                    ? 0
                                                    : volume
                                            }
                                            onChange={handleVolume}
                                            disabled={!track}
                                            aria-label="Volume"
                                            className="
                                                w-20
                                                accent-purple-400
                                                cursor-pointer
                                                disabled:opacity-20
                                            "
                                        />

                                    </div>


                                    <div className="flex items-center gap-6">

                                        <button
                                            onClick={previousTrack}
                                            disabled={!track}
                                            aria-label="Previous track"
                                            className="
                                                text-zinc-500
                                                hover:text-white
                                                transition-colors
                                                disabled:opacity-20
                                            "
                                        >

                                            <SkipBack size={20} />

                                        </button>


                                        <button
                                            onClick={togglePlay}
                                            disabled={
                                                isLoading ||
                                                audioError ||
                                                !track
                                            }
                                            aria-label={
                                                isPlaying
                                                    ? "Pause"
                                                    : "Play"
                                            }
                                            className="
                                                w-14
                                                h-14
                                                rounded-full
                                                bg-white
                                                text-black
                                                flex
                                                items-center
                                                justify-center
                                                hover:scale-105
                                                active:scale-95
                                                transition-transform
                                                disabled:opacity-40
                                                disabled:cursor-wait
                                            "
                                        >

                                            {isLoading && track

                                                ? (

                                                    <div
                                                        className="
                                                            w-5
                                                            h-5
                                                            border-2
                                                            border-black/20
                                                            border-t-black
                                                            rounded-full
                                                            animate-spin
                                                        "
                                                    />

                                                )

                                                : isPlaying

                                                    ? <Pause size={21} />

                                                    : <Play size={21} />

                                            }

                                        </button>


                                        <button
                                            onClick={nextTrack}
                                            disabled={!track}
                                            aria-label="Next track"
                                            className="
                                                text-zinc-500
                                                hover:text-white
                                                transition-colors
                                                disabled:opacity-20
                                            "
                                        >

                                            <SkipForward size={20} />

                                        </button>

                                    </div>


                                    <Disc3
                                        size={18}
                                        className={`
                                            text-purple-400/40
                                            ${
                                                isPlaying
                                                    ? "animate-spin"
                                                    : ""
                                            }
                                        `}
                                    />

                                </div>

                            </div>


                            {/* TRACKLIST */}

                            <div
                                className="
                                    bg-black/30
                                    flex
                                    flex-col
                                    min-h-[420px]
                                "
                            >

                                <div
                                    className="
                                        px-6
                                        py-5
                                        border-b
                                        border-zinc-900
                                        flex
                                        items-center
                                        justify-between
                                    "
                                >

                                    <div className="flex items-center gap-2">

                                        <ListMusic
                                            size={16}
                                            className="text-purple-400"
                                        />

                                        <span className="font-mono text-xs text-zinc-400">
                                            TRACKLIST
                                        </span>

                                    </div>

                                    <span className="font-mono text-xs text-zinc-700">
                                        {tracks.length > 0
                                            ? `${String(currentTrack + 1).padStart(2, "0")} — ${String(tracks.length).padStart(2, "0")}`
                                            : "EMPTY"
                                        }
                                    </span>

                                </div>


                                <div
                                    className="
                                        flex-1
                                        overflow-y-auto
                                        max-h-[420px]
                                        scrollbar-thin
                                        scrollbar-thumb-zinc-800
                                    "
                                >

                                    {tracks.length > 0 ? (

                                        tracks.map((item, index) => (

                                            <button
                                                key={item.title}
                                                onClick={() => selectTrack(index)}
                                                className={`
                                                    w-full
                                                    text-left
                                                    px-6
                                                    py-3
                                                    flex
                                                    items-center
                                                    gap-4
                                                    border-b
                                                    border-zinc-900/60
                                                    transition-all
                                                    group
                                                    ${
                                                        currentTrack === index
                                                            ? "bg-purple-500/[0.08]"
                                                            : "hover:bg-white/[0.025]"
                                                    }
                                                `}
                                            >

                                                <span
                                                    className={`
                                                        w-5
                                                        text-right
                                                        font-mono
                                                        text-[10px]
                                                        ${
                                                            currentTrack === index
                                                                ? "text-purple-400"
                                                                : "text-zinc-700"
                                                        }
                                                    `}
                                                >
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>


                                                <span className="flex-1 min-w-0">

                                                    <span
                                                        className={`
                                                            block
                                                            truncate
                                                            text-sm
                                                            ${
                                                                currentTrack === index
                                                                    ? "text-white"
                                                                    : "text-zinc-500 group-hover:text-zinc-300"
                                                            }
                                                        `}
                                                    >
                                                        {item.title}
                                                    </span>

                                                </span>


                                                {currentTrack === index && isPlaying ? (

                                                    <div className="flex items-end gap-[2px] h-4">

                                                        <span className="w-[2px] h-2 bg-purple-400 animate-pulse" />

                                                        <span className="w-[2px] h-4 bg-purple-400 animate-pulse [animation-delay:150ms]" />

                                                        <span className="w-[2px] h-3 bg-purple-400 animate-pulse [animation-delay:300ms]" />

                                                    </div>

                                                ) : (

                                                    <Circle
                                                        size={5}
                                                        fill="currentColor"
                                                        className={
                                                            currentTrack === index
                                                                ? "text-purple-400"
                                                                : "text-zinc-800"
                                                        }
                                                    />

                                                )}

                                            </button>

                                        ))

                                    ) : (

                                        <div
                                            className="
                                                h-full
                                                min-h-[300px]
                                                flex
                                                flex-col
                                                items-center
                                                justify-center
                                                px-8
                                                text-center
                                            "
                                        >

                                            <Music2
                                                size={24}
                                                className="text-zinc-800"
                                            />

                                            <p className="mt-4 font-mono text-xs text-zinc-600">
                                                NO TRACKS YET
                                            </p>

                                            <p className="mt-2 text-xs text-zinc-800">
                                                This release is still being assembled.
                                            </p>

                                        </div>

                                    )}

                                </div>


                                <div className="px-6 py-4 border-t border-zinc-900">

                                    <p className="text-[10px] font-mono text-zinc-700">
                                        {activeRelease.title.toUpperCase()}
                                        {" / YAND / "}
                                        {activeRelease.year}
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* RELEASES */}

                <section className="mb-24">

                    <div className="flex items-center gap-3 mb-8">

                        <span className="text-xs font-mono text-purple-400">
                            02 / RELEASE LIBRARY
                        </span>

                        <div className="h-px flex-1 bg-zinc-900" />

                        <span className="text-xs font-mono text-zinc-700">
                            {releases.length} RELEASES
                        </span>

                    </div>


                    <div className="grid md:grid-cols-3 gap-5 items-stretch">

                        {releases.map((release, index) => {

                            const selected =
                                selectedRelease === index;

                            const hasTracks =
                                release.tracks.length > 0;


                            return (

                                <button
                                    key={release.title}
                                    onClick={() =>
                                        selectRelease(index)
                                    }
                                    className={`
                                        group
                                        flex
                                        flex-col
                                        text-left
                                        border
                                        rounded-xl
                                        overflow-hidden
                                        bg-zinc-950
                                        transition-all
                                        duration-500
                                        ${
                                            selected
                                                ? "border-purple-500/60 shadow-[0_0_50px_rgba(168,85,247,0.08)]"
                                                : "border-zinc-900 hover:border-purple-500/30"
                                        }
                                    `}
                                >

                                    {/* ART */}


                                    <div
                                        className={`
                                            relative
                                            aspect-square
                                            bg-gradient-to-br
                                            ${release.accent}
                                            overflow-hidden
                                        `}
                                    >
                                        {release.cover ? (
                                            <>
                                                <Image
                                                    src={release.cover}
                                                    alt={`${release.title} cover art`}
                                                    fill
                                                    className="
                                                        object-cover
                                                        transition-transform
                                                        duration-700
                                                        group-hover:scale-105
                                                    "
                                                />

                                                <div
                                                    className="
                                                        absolute
                                                        inset-0
                                                        bg-black/10
                                                        group-hover:bg-black/0
                                                        transition-colors
                                                    "
                                                />
                                            </>
                                        ) : (
                                            <>
                                                {/* PLACEHOLDER ART */}

                                                <div
                                                    className="
                                                        absolute
                                                        w-40
                                                        h-40
                                                        rounded-full
                                                        border
                                                        border-white/10
                                                        left-1/2
                                                        top-1/2
                                                        -translate-x-1/2
                                                        -translate-y-1/2
                                                        group-hover:scale-110
                                                        transition-transform
                                                        duration-700
                                                    "
                                                />

                                                <div
                                                    className="
                                                        absolute
                                                        w-24
                                                        h-24
                                                        rounded-full
                                                        border
                                                        border-white/10
                                                        left-1/2
                                                        top-1/2
                                                        -translate-x-1/2
                                                        -translate-y-1/2
                                                    "
                                                />

                                                <Music2
                                                    className="
                                                        absolute
                                                        left-1/2
                                                        top-1/2
                                                        -translate-x-1/2
                                                        -translate-y-1/2
                                                        text-white/40
                                                        group-hover:text-white
                                                        transition-colors
                                                    "
                                                    size={32}
                                                />
                                            </>
                                        )}

                                        <span
                                            className="
                                                absolute
                                                top-5
                                                left-5
                                                font-mono
                                                text-xs
                                                text-white/40
                                            "
                                        >
                                            {release.year}
                                        </span>


                                        {/* LOADED INDICATOR */}

                                        {selected && (

                                            <div
                                                className="
                                                    absolute
                                                    bottom-5
                                                    right-5
                                                    flex
                                                    items-center
                                                    gap-2
                                                    px-3
                                                    py-1.5
                                                    rounded-full
                                                    bg-black/50
                                                    backdrop-blur-md
                                                    border
                                                    border-purple-400/30
                                                "
                                            >

                                                <span
                                                    className={`
                                                        w-1.5
                                                        h-1.5
                                                        rounded-full
                                                        ${
                                                            isPlaying
                                                                ? "bg-purple-400 animate-pulse"
                                                                : "bg-purple-400/50"
                                                        }
                                                    `}
                                                />

                                                <span className="font-mono text-[10px] text-purple-300">
                                                    {isPlaying
                                                        ? "PLAYING"
                                                        : "LOADED"}
                                                </span>

                                            </div>

                                        )}


                                        {/* EMPTY INDICATOR */}

                                        {!hasTracks && !selected && (

                                            <div
                                                className="
                                                    absolute
                                                    bottom-5
                                                    right-5
                                                    px-3
                                                    py-1.5
                                                    rounded-full
                                                    bg-black/40
                                                    backdrop-blur-md
                                                    border
                                                    border-white/5
                                                "
                                            >

                                                <span className="font-mono text-[10px] text-zinc-500">
                                                    COMING SOON
                                                </span>

                                            </div>

                                        )}

                                    </div>


                                    {/* INFO */}

                                    <div className="p-6">

                                        <div className="flex justify-between items-start">

                                            <div>

                                                <p className="font-mono text-xs text-purple-400 mb-2">
                                                    {release.type}
                                                </p>

                                                <h3 className="text-xl font-bold">
                                                    {release.title}
                                                </h3>

                                            </div>


                                            <ArrowUpRight
                                                size={18}
                                                className="
                                                    text-zinc-700
                                                    group-hover:text-purple-400
                                                    group-hover:translate-x-1
                                                    group-hover:-translate-y-1
                                                    transition-all
                                                "
                                            />

                                        </div>


                                        <p className="mt-2 text-xs text-zinc-600 font-mono">
                                            {release.tracks.length}{" "}
                                            {release.tracks.length === 1
                                                ? "track"
                                                : "tracks"}
                                        </p>


                                        <p className="mt-4 text-sm text-zinc-600 leading-6">
                                            {release.description}
                                        </p>

                                    </div>

                                </button>

                            );

                        })}

                    </div>

                </section>


                {/* SOUND DESIGN */}

                <section className="mb-24">

                    <div className="flex items-center gap-3 mb-8">

                        <span className="text-xs font-mono text-purple-400">
                            03 / SOUND DESIGN
                        </span>

                        <div className="h-px flex-1 bg-zinc-900" />

                    </div>


                    <div
                        className="
                            border
                            border-zinc-900
                            rounded-2xl
                            p-8
                            md:p-12
                            bg-zinc-950
                            relative
                            overflow-hidden
                        "
                    >

                        <Waves
                            className="
                                absolute
                                right-10
                                top-1/2
                                -translate-y-1/2
                                text-purple-500/[0.04]
                            "
                            size={280}
                        />


                        <div className="relative max-w-2xl">

                            <p className="font-mono text-xs text-purple-400 mb-4">
                                AUDIO / EXPERIMENTAL
                            </p>


                            <h2 className="text-3xl md:text-5xl font-bold">
                                Making things sound alive.
                            </h2>


                            <p className="mt-6 text-zinc-500 text-lg leading-8">
                                Game music, sound design, production
                                experiments, weird noises and anything else
                                that makes a project feel less dead.
                            </p>


                            <button
                                className="
                                    mt-8
                                    flex
                                    items-center
                                    gap-3
                                    px-5
                                    py-3
                                    border
                                    border-zinc-800
                                    rounded-lg
                                    font-mono
                                    text-sm
                                    text-zinc-400
                                    hover:text-white
                                    hover:border-purple-500/40
                                    transition-all
                                "
                            >

                                <Waves size={16} />

                                explore sound design

                            </button>

                        </div>

                    </div>

                </section>


                {/* FOOTER */}

                <footer
                    className="
                        pt-8
                        border-t
                        border-zinc-900
                        flex
                        justify-between
                        font-mono
                        text-xs
                        text-zinc-700
                    "
                >

                    <span>
                        ~/music
                    </span>


                    <Link
                        href="/"
                        className="hover:text-white transition-colors"
                    >
                        cd ..
                    </Link>

                </footer>

            </div>

        </main>
    );
}