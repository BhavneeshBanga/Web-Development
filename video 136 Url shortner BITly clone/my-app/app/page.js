import Image from "next/image";
import localFont from 'next/font/local'
import { Poppins } from "next/font/google";
import Link from "next/link";

const popping = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 font-bold justify-center items-center ">
          <p className={`text-3xl font-bold ${popping.className}`}>
            The best URL shortenr in the market
          </p>
          <p className="px-16 text-md text-center">
            we are the most straightforward URL shortner in the world. Most of the aurl SHORTNER WILL track you or ask you to give your detials for login. We understand your needs ahd hende we have created this url shortner
          </p>
           <div>
                    <Link href="/shorten"><button  className='font-bold text-white py-1 px-2 bg-purple-400 mx-2 rounded-lg'>Try Now</button></Link>
                    <Link href="/github"><button className='font-bold text-white py-1 px-2 bg-purple-400 mx-2 rounded-lg'>Github</button ></Link>
                </div>



        </div>
        <div className="flex justify-start  relative" >
          <Image alt="an image of a vector" src={"/vector.jpg"} fill={true}/>

        </div>
      </section>
    </main>
  );
}
