'use client'
import React from 'react'
import { useRef, useState, useEffect } from 'react'
const Managermy = () => {

    const ref = useRef();
    const [passwords, setPasswords] = useState([]);
    const [showpasswordid, setShowpasswordid] = useState(false);
    const [form, setform] = useState(
        {
            site: "",
            username: "",
            password: ""
        }
    );




    const showpassword = () => {
        //   alert("showing password")
        console.log(ref.current.src);

        if (ref.current.src.includes("eyecross.svg")) {
            ref.current.src = "eye.svg";
        } else {
            ref.current.src = "eyecross.svg"
        }

    }

    useEffect(() => {
        const data = localStorage.getItem("passwords")
        if (data) {
            setPasswords(JSON.parse(data))
        }
    }, []);


    const savepassword = () => {
        // alert(form.password)
        // alert(form.username)
        // alert(form.site)
        console.log(form);

        const updatePasswords = [...passwords, form]
        setPasswords(updatePasswords)
        console.log([...passwords, form]);




        localStorage.setItem(
            "passwords",
            JSON.stringify(updatePasswords)
        )

        setform({ site: "", username: "", password: "" })

        alert("Your password has been saved")

    };

    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    };

    return (
        <>

            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#22c55e_100%)]"></div>
            <div className="animate-fade-in-up container mx-auto flex flex-col text-center justify-center items-center   ">
                <h1 className="text-5xl text-black font-bold text-center">
                    <span className="text-emerald-500">&lt;</span>
                    Pass<span className="text-emerald-500">OP</span><span className="text-emerald-500">/&gt;</span>
                </h1>
                <p className='text-black'>
                    Your own password manager
                </p>
                <div className="text-white flex flex-col max-w-4xl w-full ">
                    <input
                        onChange={handlechange}
                        value={form.site}
                        type="text"
                        name='site'
                        placeholder="Enter website URL"
                        className="max-w-4xl mx-auto w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-black mb-6 mt-6"
                    />
                    <div className="flex gap-6">
                        <input
                            onChange={handlechange}
                            value={form.username}
                            type="text"
                            name='username'
                            placeholder="Enter Username"
                            className=" px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent  text-black transition-all duration-200 w-1/2"
                        />
                        <div className="relative w-1/2">
                            <input
                                name='password'
                                onChange={handlechange}
                                value={form.password}
                                type={showpasswordid ? "text" : "password"}
                                placeholder="Enter Password"
                                className="w-full px-4 py-2 pr-12 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                            />

                            <button
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2"
                            >
                                <span onClick={() => showpassword()}>

                                    <img ref={ref}
                                        src="/eye.svg"
                                        alt="Show Password"
                                        className="w-5 h-5 cursor-pointer"
                                    />
                                </span>
                            </button>
                        </div>


                    </div>
                    <div className="password border-green-400 text-black mt-5 flex justify-center">
                        <button onClick={() => { savepassword() }} className="group flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-300/50 hover:-translate-y-1">
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
                <div className="passwords text-black font-bold   w-[75%] max-h-full mt-5 mb-5">
                    <h2 className="mb-5 font-bold text-3xl animate-fade-in-up">
                        Your Passwords
                    </h2>

                    <div className="overflow-y-auto h-[250px]  rounded-lg shadow ">
                        {passwords.length === 0 && <div>Nothing to show Add Passwords </div>}
                        {passwords.length != 0 &&

                            <table className="w-full sticky top-0 z-10">
                                <thead className="bg-green-700 sticky top-0 z-10 text-white">
                                    <tr>
                                        <th className="text-center px-6 py-3 ">Site</th>
                                        <th className="text-center px-6 py-3 ">Username</th>
                                        <th className="text-center px-6 py-3 ">Password</th>
                                        <th className="text-center px-6 py-3 ">Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {passwords.map((item, index) => {

                                        return (
                                            <tr key={index} className="border-b hover:bg-gray-100">
                                                <td className="px-6 py-4"><a href={item.site} target='_blank'>{item.site}</a></td>
                                                <td className="px-6 py-4">{item.username}</td>
                                                <td className="px-6 py-4">{item.password}</td>
                                                <td className="px-6 py-4 text-center">
                                                    <button className="bg-blue-500 text-white px-3 py-1 rounded">
                                                        Edit
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>}
                    </div>
                </div>

            </div>


        </>
    )
}

export default Managermy 
