import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { handle } = await params;

  const client = await clientPromise;
  const db = client.db("bittree");
  const collection = db.collection("links");

  const user = await collection.findOne({ handle });

  if (!user) {
    return notFound();
  }
return (
  <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

    {/* Blurred Background */}
    <div
      className="absolute inset-0 bg-cover bg-center blur-2xl scale-110"
      style={{
        backgroundImage: `url(${user.pic})`,
      }}
    />

    {/* Dark Overlay */}
    {/* <div className="absolute inset-0 bg-black/60" /> */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/70" />

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center px-4">

      <img
        src={user.pic}
        alt={user.handle}
        className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-lg"
      />

      <h1 className="mt-4 text-3xl font-bold text-white">
        @{user.handle}
      </h1>
      <p className="text-gray-400 mt-2 max-w-130">
        {/* Welcome to my BitTree 🚀 */}
        {user.desc}
      </p>

      <div className="w-full max-w-xl mt-10 flex flex-col gap-4">
        {user.links.map((item, index) => (
          <a
  key={index}
  href={item.link}
  target="_blank"
  rel="noopener noreferrer"
  className="
    w-full
    bg-white/10
    backdrop-blur-lg
    border border-white/20
    rounded-2xl
    px-6 py-4
    text-center
    text-white
    font-semibold
    shadow-lg
    transition-all duration-300
    hover:bg-white/20
    hover:scale-105
    hover:shadow-2xl
  "
>
  {item.linktext}
</a>
        ))}
      </div>

    </div>
  </div>
);
}