import Navbar from "./components/Navbar";
import Managermy from "./components/Managermy";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <>
   <div >
    <Navbar></Navbar>
    <div className="min-h-[70vh]">


    <Managermy/>
    </div>
    <Footer/>
    </div></>
  );
}
