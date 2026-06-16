"use client"
import { redirect } from 'next/dist/server/api-utils'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'






const Shorten = () => {
    const [url, setUrl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState(false)

    const generate = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };
        try {

            const res = await fetch("/api/generate", requestOptions)

            const result = await res.json();
            setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);

            setUrl("")
            setshorturl("")
            console.log(result),
                alert(result.message)
        }
        catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='mx-auto max-w-lg bg-purple-100 p-8 my-16 flex flex-col gap-4'>
            <div>
                <h1 className='font-bold text-2xl'>
                    Generate Your shor URLs
                </h1>
                <div className=' flex flex-col gap-2'>
                    <input type="text"
                        value={url}
                        className='p-4 focus:outline-purple-300'

                        placeholder='Enter your URL'
                        onChange={e => { setUrl(e.target.value) }} />

                    <input type="text"
                        value={shorturl}
                        className='p-4 focus:outline-purple-300'
                        placeholder='Enter your preferred shor URL text'
                        onChange={e => { setshorturl(e.target.value) }} />
                    <button onClick={() => generate()}
                        className='bg-purple-800 p-4 rounded-2xl text-white font-bold text-xl my-3'>
                        Generate
                    </button>
                </div>
            </div>
            
            {generated && <><span>YOUR link:</span>
            
            
            <code><Link target="_blank" href={generated}>{generated}</Link></code> 
            </>}
        </div>
    )
}


export default Shorten;
