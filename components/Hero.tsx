'use client';

import { useEffect, useState } from "react";
import ProcessTimeline from "@/components/ProcessTimeline";
import Nav from "@/components/Nav";
import { ArrowUpRight } from "lucide-react";
const words = ["Build", "Test", "Deploy"];

export default function Hero() {
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="herobg w-full min-h-screen flex flex-col">

            <Nav />

            <main className="
        flex-1 flex-col w-full max-w-7xl mx-auto
        px-6 md:px-12
        py-12
        flex items-center justify-center
      ">

                <div className="
          grid grid-cols-1 md:grid-cols-2
          items-center gap-15
          flex items-start
          w-full
        ">

                    {/* Left Content */}
                    <div className="w-full">

                        <p className="mb-4 font-light text-[var(--text)]">
                            Web Development
                            <span className="mx-2 text-white">X</span>
                            Software Testing
                        </p>

                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">

                            We{" "}

                            <span
                                key={wordIndex}
                                className="
                  inline-block min-w-[6ch]
                  text-[var(--text)]
                  animate-[wordIn_0.5s_ease-out]
                "
                            >
                                {words[wordIndex]}
                            </span>

                            <br />

                            Digital Products

                            <br />

                            <span className="text-[var(--text)]">
                                That Last
                            </span>

                        </h1>

                        <p className="mt-6 max-w-xl text-gray-400 leading-relaxed">
                            We build reliable digital products through
                            professional development, quality testing,
                            and seamless deployment.
                        </p>



                    </div>

                    {/* Right Content */}
                    <div className="flex justify-start md:justify-end">
                        <ProcessTimeline />
                    </div>

                </div>
                <div className="mt-10 w-full flex flex-wrap gap-4 justify-start">

                    <button className="
                px-8 py-3 rounded-full
                bg-[var(--text)] text-black
                font-semibold
                hover:scale-105
                transition-transform duration-300
              ">
                        Start Project
                        <ArrowUpRight
                            size={16}
                            className="inline mx-2 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </button>

                </div>
            </main>

        </div>
    );
}
