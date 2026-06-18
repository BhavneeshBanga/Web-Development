"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import { useSearchParams } from "next/navigation";


const Generate = () => {


    const searchParams = useSearchParams();
    const name = searchParams.get("handle")



    const [handle, sethandle] = useState(name)
    // const [link, setlink] = useState("")
    const [links, setLinks] = useState([{ link: "", linktext: "" }])
    // const [linktext, setlinktext] = useState("")
    const [pic, setpic] = useState("")
    const [desc, setdesc] = useState("")



    const handlechange = (index, link, linktext) => {
        setLinks((initiallink) => {
            return initiallink.map((item, i) => {
                if (i === index) {
                    return { link, linktext }
                } else {
                    return item;
                }
            })
        })
    }

    const addLink = () => {
        setLinks(links.concat([{ link: "", linktext: "" }]))
    }

    async function submitlinks() {
        const response = await fetch("/api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "links": links,
                "handle": handle,
                "pic": pic,
                "desc": desc
            }),
        });



        const data = await response.json();
        console.log(data);
        if (data.success) {
            toast.success(data.message)
            sethandle("")
            setLinks([{ link: "", linktext: "" }])
            setpic("")
        } else {
            toast.error(data.message)
        }

    }


    return (
        <div className='bg-[#005CBE] min-h-screen grid grid-cols-2'>
            <div className="col1 flex flex-col justify-center items-center">
                <div className="flex flex-col  gap-5 my-8">

                </div>
                <h1 className='text-white font-bold text-7xl pb-4 selection:bg-white selection:text-[#005CBE]' >Create Your BitTree</h1>
                <div className="item">
                    <h2 className='text-white selection:bg-white selection:text-blue-600 font-semibold text-2xl'>Step 1: claim your Handle</h2>
                    <div className="mx-4">
                        <input value={handle || ""} onChange={e => { sethandle(e.target.value) }} className="bg-white px-4 py-2 mx-2 my-2 text-black border focus:outline-blue-200 border-gray-300 rounded-md " type="text" placeholder='enter your Handle' />
                    </div>
                </div>
                <div className="item">
                    <h2 className='text-white font-semibold text-2xl selection:bg-white selection:text-[#005CBE]'>Step 2: Add Links</h2>
                    {links && links.map((item, index) => {
                        return <div key={index} className="mx-4">
                            <input value={item.linktext || ""} onChange={e => { handlechange(index, item.link, e.target.value) }} className="bg-white  mx-2 my-2 text-black border focus:outline-blue-200 border-gray-300 rounded-md px-4 py-2" type="text" placeholder='enter link text' />

                            <input value={item.link || ""} onChange={e => { handlechange(index, e.target.value, item.linktext) }} className="bg-white  mx-2 my-2 text-black border focus:outline-blue-200 border-gray-300 rounded-md px-4 py-2" type="text" placeholder='enter link' />
                        </div>
                    })}
                    <button onClick={() => addLink()} className="bg-black text-white rounded-full px-6 py-2 hover:bg-gray-800 transition-all cursor-pointer font-bold">
                        + Add Link
                    </button>
                </div>
                <div className="item">
                    <h2 className='text-white font-semibold text-2xl selection:bg-white selection:text-[#005CBE] '>Step 3: Add Picture and Description</h2>
                    <div className="mx-4">
                        <input value={pic || ""} onChange={e => { setpic(e.target.value) }} className="bg-white w-full mx-2 my-2 text-black border focus:outline-blue-200 border-gray-300 rounded-md px-4 py-2" type="text" placeholder='enter Link to your picture' />
                        <input value={desc || ""} onChange={e => { setdesc(e.target.value) }} className="bg-white w-full mx-2 my-2 text-black border focus:outline-blue-200 border-gray-300 rounded-md px-4 py-2" type="text" placeholder='Add Description' />
                        <br />

                        <div className="relative inline-block group">
                            <button
                                disabled={handle === "" || pic === "" || links[0].linktext === ""}
                                onClick={submitlinks}
                                className="
            bg-black text-white rounded-full px-6 py-2
            hover:bg-gray-800 transition-all font-bold
            disabled:bg-gray-400 disabled:cursor-not-allowed
        "
                            >
                                Create Your BitLink
                            </button>

                            {(handle === "" || pic === "" || links[0].linktext === "") && (
                                <div
                                    className="
                absolute bottom-full left-1/2 -translate-x-1/2 mb-4
                opacity-0 scale-95
                group-hover:opacity-100 group-hover:scale-100
                transition-all duration-200
                pointer-events-none
                z-50
            "
                                >
                                    <div
                                        className="
                    bg-gray-900 text-white text-sm
                    px-4 py-2 rounded-xl
                    shadow-xl border border-gray-700
                    whitespace-nowrap flex items-center gap-2
                "
                                    >
                                        <span>⚠️</span>
                                        <span>Please fill all details first</span>
                                    </div>

                                    {/* Arrow */}
                                    <div
                                        className="
                    w-3 h-3 bg-gray-900 border-r border-b border-gray-700
                    rotate-45 absolute left-1/2 -translate-x-1/2
                    -bottom-1
                "
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <ToastContainer></ToastContainer>

            </div>
            <div className="col2">
                <img width={381} src="./generate.webp" alt="" />
            </div>
        </div>
    )
}


export default Generate;