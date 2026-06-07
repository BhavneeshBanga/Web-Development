export default function Navbar() {
  return (
    <nav className="flex justify-between bg-[#7800ff] text-white py-3">
        <div className="log">
            <span className="font-bold text-xl mx-8">iTask</span>
        </div>
        <ul className="flex gap-8 mx-9">
            <li className="cursor-pointer hover:underline hover:font-bold transition-all duration-50">Home</li>
            <li className="cursor-pointer hover:underline hover:font-bold transition-all duration-50">Your Task</li>

        </ul>
    </nav>
  );
}