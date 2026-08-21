"use client";
import React, { useState, useEffect } from "react";

export default function Discord() {

    interface Message {
        id: number;
        content: string;
        bot?: boolean;
        userName?: string;
        avatar?: string;
    }
    
    interface Channel {
        botName: string;
        avatar: string;
        messages: Message[];
        commands: Record<string, string>;
    }


    const [selectedChannel, setSelectedChannel] = useState("moderation");

    const [input, setInput] = useState("");
    const [sentMessages, setSentMessages] = useState<Record<string, Message[]>>({
        moderation: [],
        rpg: [],
        economy: [],
        music: [],
        study: []
    });

    const channels = [
        {name: "moderation"},
        {name: "rpg"},
        {name: "economy"},
        {name: "music"},
        {name: "study"}
    ];

    const channelData : Record<string, Channel> = {
        moderation: {
            botName: "ModBot",
            avatar: "M",
                    messages: [ 
                        { id: 1, content: "Hiya! I'm a moderation bot. I can help you keep your server safe and clean.", bot: true }, 
                        { id: 2, content: "I can also help you with moderation commands, such as banning, kicking, and muting users.", bot: true }, 
                        { id: 3, content: "Try typing in one of my commands!" , bot: true} 
                    ],
            commands: {
                "/help": "Available commands: /help + [warn/mute/kick/ban], /warn, /mute, /kick, /ban",
                "/help warn": "Warns a user. Usage: /warn [user] [reason]",
                "/help mute": "Mutes a user. Usage: /mute [user] [duration]",
                "/help kick": "Kicks a user. Usage: /kick [user] [reason]",
                "/help ban": "Bans a user. Usage: /ban [user] [reason]",
                "/warn": "⚠️ The user has been warned.",
                "/mute": "👢 The user has been muted.",
                "/kick": "🔨 The user has been kicked.",
                "/ban": "🔇 The user has been banned."
            }
        },
        
        rpg: {
            botName: "AdventureBot",
            avatar: "A",
            messages: [
                { id: 1, content: "Greetings, traveler. Tis I, AdventureBot, Your personal dungeon companion.", bot: true },
                { id: 2, content: "I can manage your characters, quests, and battles. Tis but a click of a button.", bot: true },
                { id: 3, content: "Try typing in one of my commands, traveler, such as the mighty /help.", bot: true },
            ],

            commands: {
                "/help": "Available commands: /help, /profile, /inventory, /quest",
                "/profile": "🧙 Your character is level 12 with 1,450 XP.",
                "/inventory": "🎒 Your inventory is currently empty.",
                "/quest": "📜 Your current quest: Defeat the Cave Guardian."
            }
        },

        economy: {
            botName: "WallStreetBot",
            avatar: "W",
            messages: [
                {id: 1, content: "Welcome to the server economy!", bot: true},
                {id: 2, content: "I can manage virtual currencies, shops, transactions, and leaderboards.", bot: true},
                {id: 3, content: "Type /help to see all available economy commands.", bot: true}
            ],

            commands: {
                "/help": "Available commands: /help, /balance, /daily, /shop",
                "/balance": "💰 Your current balance is 2,450 coins.",
                "/daily": "🎁 You collected your daily reward: 250 coins!",
                "/shop": "🛒 Shop: Sword — 500 coins | Shield — 750 coins | Potion — 100 coins"
            }
            
        },

        music: {
            botName: "MelodyBot",
            avatar: "M",
            messages: [
                {id: 1, content: "Hello! I'm MelodyBot, your personal music bot.", bot: true},
                {id: 2, content: "I can play music from YouTube, Spotify, and SoundCloud.", bot: true},
                {id: 3, content: `Type "/play unstable ceasefire" to play one of my songs in my upcoming solo album, "Pomegranate".`, bot: true}
                
            ],

            commands: {
                "/help": "Available commands: /help, /play, /queue, /skip",
                "/play": "🎵 Added the requested song to the queue.",
                "/queue": "📜 The queue is currently empty.",
                "/skip": "⏭️ Skipped the current song."
            }
    },

        study: {
            botName: "Michael Faraday",
            avatar: "F",
            messages: [
                {id: 1, content: "Hello! I'm Michael Faraday, your personal study bot.", bot: true},
                {id: 2, content: "I can help you with your studies by providing you with study materials, quizzes, and flashcards, alongside\npomodoro timers and leaderboards!", bot: true},
                {id: 3, content: "Type /help to see all available study commands.", bot: true}
            ],

            commands: {
                "/help": "Available commands: /help, /quiz, /flashcards, /pomodoro",
                "/quiz": "🧠 Starting a new quiz...",
                "/flashcards": "📚 Loading your flashcards...",
                "/pomodoro": "⏱️ Pomodoro timer started for 25 minutes."
            }
        }
    };

        const currentChannel = channelData[selectedChannel];

                    const commandHandlers: Record<
                string,
                (args: string[]) => string 
            > = {
                    "/warn": (args) => {
                        const user = args[0];
                        const reason = args.slice(1).join(" ");

                        return reason
                            ? `⚠️ ${user} has been warned for: ${reason}`
                            : `⚠️ ${user} has been warned.`;
                    },

                    "/kick": (args) => {
                        const user = args[0];
                        const reason = args.slice(1).join(" ");

                        return reason
                            ? `👢 ${user} has been kicked for: ${reason}`
                            : `👢 ${user} has been kicked.`;
                    },

                    "/ban": (args) => {
                        const user = args[0];
                        const reason = args.slice(1).join(" ");

                        return reason
                            ? `🔨 ${user} has been banned for: ${reason}`
                            : `🔨 ${user} has been banned.`;
                    },

                    "/mute": (args) => {
                        const user = args[0];
                        const duration = args[1];

                        return duration
                            ? `🔇 ${user} has been muted for ${duration}.`
                            : `🔇 ${user} has been muted.`;
                    }
            };

        const handleCommand = (
            command: string,
            args: string[],
            channel: Channel
        ): string | null => {
            

            if (commandHandlers[command]) {
                return commandHandlers[command](args);
            }

            return channel.commands[command] ?? null;
        };


        const sendMessage = () => {
            if (!input.trim()) return;


            const userMessage: Message = {
                id: Date.now(),
                userName: "You",
                avatar: "Y",
                content: input,
                bot: false
            };


            const parts = input.trim().split(/\s+/);

            const command = parts[0];
            const args = parts.slice(1);

            const response = handleCommand(command, args, currentChannel);

            

            const newMessages: Message[] = [userMessage];

            if (response) {
                const botMessage: Message = {
                    id: Date.now() + 1,
                    content: response,
                    bot: true
                };

                newMessages.push(botMessage);

            }

                setSentMessages((prev) => ({
                    ...prev,
                    [selectedChannel]: [
                            ...prev[selectedChannel], ...newMessages
                        ]
                }));
            

            setInput("");
        };


    return (
        <main className="bg-[#313338] p-12 pb-0 h-screen text-white">
            <div className="flex h-full overflow-hidden rounded-lg border border-[#232428]">
                
                {/* servers */}
                <div className="w-20 bg-[#1e1f22]">
                    <div className="flex flex-col items-center gap-4 pt-4">

                        <div className="w-12 h-12 rounded-full bg-[#5865F2]" />

                        <div className="w-12 h-12 rounded-full bg-zinc-700" />

                        <div className="w-12 h-12 rounded-full bg-zinc-700" />

                    </div>
                </div>

                {/* channels */}
                <div className="w-64 bg-[#2b2d31]">
                    <div className="pt-4">
                        TEXT CHANNELS

                        {channels.map((channel) => (
                        <p
                            key={channel.name}
                            onClick={() => setSelectedChannel(channel.name)}
                            className = {`
                                    cursor-pointer
                                    rounded-md
                                    px-2
                                    py-1
                                    transition-all
                                    duration-200

                                    ${
                                        selectedChannel === channel.name
                                        ? "bg-[#404249] text-white"
                                        : "text-zinc-400 hover:bg-[#35373c]"
                                    }
                                `}        
                            >
                                #{channel.name}
                            </p>
                    ))}
                    </div>
                </div>

                {/* chat */}
                <div className="flex-1 bg-[#313338] flex flex-col">
                        <div className="h-12 border-b border-[#232428] flex items-center px-4">
                            <span className="text-zinc-400 text-xl mr-2">#</span>
                            <span className="text-white text-lg font-semibold">{selectedChannel}</span>    
                        </div>

                        <div className="flex-1 p-4 overflow-y-auto">
                            {[...currentChannel.messages, ...sentMessages[selectedChannel]].map((message) => (
                                <div 
                                    key={message.id}
                                    className="flex gap-3 mb-4"
                                    >
                                        <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center
                                            ${message.bot 
                                                ? "bg-[#5865F2]"
                                                : "bg-[#57F287]"
                                            }`}
                                        >
                                            <span className="font-bold text-sm">
                                                {message.avatar ?? currentChannel.avatar}
                                            </span>
                                        </div>
                                        
                                        <div>

                                            <div className="flex items-baseline gap-2">
                                                <span className="font-semibold">
                                                    {message.userName ?? currentChannel.botName}
                                                </span>

                                                {message.bot && (
                                                    <span className="text-[10px] bg-[#5865F2] px-1 rounded-sm font-semibold">
                                                        BOT
                                                    </span>
                                                )}
                                            
                                                <span className="text-xs text-zinc-500">
                                                    Today at 4:23 AM
                                                </span>
                                            
                                            </div>

                                            <p className="text-zinc-200">
                                                {message.content}
                                            </p>
                                            </div>
                                        </div>
                            ))}
                            </div>

                            <div className="px-4 pb-4">
                                <div className="bg-[#383a40] rounded-lg px-4 py-3 text-zinc-500">
                                    <input 
                                        type="text"
                                        value = {input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                sendMessage();
                                            }
                                        }}
                                        placeholder ={`Message #${selectedChannel}`}
                                        className="w-full bg-[#383a40] rounded-lg px-4 py-3 text-white placeholder-zinc-500 outline-none focus:ring-2 focus:ring-[#5865F2]"
                                        />
                                </div>
                            </div>
                        </div>
            </div>
        </main>
    )
}