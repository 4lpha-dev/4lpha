'use client';

import { useEffect, useState } from "react";
import ProcessTimeline from "@/components/ProcessTimeline"
import Nav from "@/components/Nav";
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
        <div className="herobg">

                <Nav />
            <div className=" w-screen min-h-screen flex items-center">

                <div className="row flex flex-col md:flex-row justify-between">
                    <div className="col w-full md:w-1/2 px-8">
                    <p className="smallTitle text-(color:--text) mb-3 font-light">Web Development <span className="mx-2 text-white">X</span> SoftWare Testing</p>
                        <p className="homeContent text-6xl">
                            We{" "}
                            <span
                                key={wordIndex}
                                className="inline-block min-w-[6ch] text-(color:--text) font-bold animate-[wordIn_0.5s_ease-out]"
                            >
                                {words[wordIndex]}
                            </span>
                            <br />
                            {" "}Digital Products{" "}
                            <br />
                            <span className="text-(color:--text)">
                                That Last
                            </span>
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
                            sed assumenda quisquam, aut unde quas magni, voluptatem optio nihil
                            repudiandae cumque debitis inventore voluptatibus architecto! Voluptatem,
                            provident sequi? Laudantium, eum.
                        </p>
                        <div className="heroContentButton">
                            <button className="startProjectButtom m-5 mt-10 w-30 h-12 rounded-3xl bg-(color:--text)">Start Project</button>


                            <button></button>
                        </div>
                    </div>
                    <div className="col px-8 ">
                        <ProcessTimeline />
                    </div>
                </div>
            </div>
        </div>

    );
}