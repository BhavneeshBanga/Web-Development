'use client'
import React from 'react'

const Managermy = () => {


    const showpassword = (params) => {
      alert("showing password")
    }
    
    return (
        <>

            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#22c55e_100%)]"></div>
            <div className="container mx-auto flex flex-col text-center justify-center items-center   ">
                <h1 className="text-5xl text-black font-bold text-center">
                    <span className="text-emerald-500">&lt;</span>
                    Pass<span className="text-emerald-500">OP</span><span className="text-emerald-500">/&gt;</span>
                </h1>
                <p className='text-black'>
                    Your own password manager
                </p>
                <div className="text-white flex flex-col max-w-4xl w-full ">
                    <input
                        type="text"
                        placeholder="Enter website URL"
                        className="max-w-4xl mx-auto w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-black mb-6 mt-6"
                    />
                    <div className="flex gap-6">
                        <input
                            type="text"
                            placeholder="Enter Username"
                            className=" px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent  text-black transition-all duration-200 w-1/2"
                        />
                        <div className="relative w-1/2">
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="w-full px-4 py-2 pr-12 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                            />

                            <button
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2"
                            >
                                <span onClick={()=>showpassword()}>

                                <img
                                    src="/eye.svg"
                                    alt="Show Password"
                                    className="w-5 h-5 cursor-pointer"
                                    />
                                    </span>
                            </button>
                        </div>


                    </div>
                    <div className="password border-green-400 text-black mt-5 flex justify-center">
                        <button className="group flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-300/50 hover:-translate-y-1">
                            <lord-icon
                                src="https://cdn.lordicon.com/gzqofmcx.json"
                                trigger="hover"
                                colors="primary:#ffffff"
                                style={{ width: "28px", height: "28px" }}
                            ></lord-icon>

                            <span>Add Password</span>
                        </button>

                    </div>
                </div>

            </div>


        </>
    )
}

export default Managermy
