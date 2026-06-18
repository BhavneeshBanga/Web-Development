"use client"
import { Maname } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useState } from "react";

export default function Home() {
  const router = useRouter()
    const [handle, sethandle] = useState("");

    const createTree = () => {
      router.push(`/generate?handle=${handle}`);
    };



  return (
    <main className="bg-white">
      <section className="bg-[#d2e823] min-h-screen grid grid-cols-2">
        {/* <section className="bg-black min-h-screen grid grid-cols-2"> */}
        <div className="first flex flex-col justify-center items-center ml-[10vw]">
          <p className="text-green-900 text-9xl font-bold">
            A link in bio built for you.
          </p>
          <p className="text-green-900 font-bold my-4">
            Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>

          <div className="flex gap-2  input">

            <input value={handle} onChange={(e)=>sethandle(e.target.value)} className="bg-white text-black border focus:outline-green-800 border-gray-300 rounded-md px-4 py-2"
              type="text" placeholder="Enter Your Handle" />
           <button onClick={()=>createTree()} className="rounded-full bg-green-900 p-4 font-bold cursor-pointer  text-white">Get started for free</button>
          </div>
        </div>
        <div className="first flex flex-col justify-center items-center mr-[10vw] gap-6">
          <img src="./second.png" alt="" />




        </div>
      </section>
      <section className="bg-red-800 min-h-screen">

      </section>
    </main>
  );
}
