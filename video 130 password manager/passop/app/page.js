import Navbar from "./components/Navbar";
import Managermy from "./components/Managermy";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div >
        <Navbar></Navbar>
        {/* <div className="min-h-[70vh] bg-red-700"> */}
        <div className="min-h-[70vh]">
          {/* <div className="min-h-screen"> */}


          <Managermy />
        </div>
        <Footer />
      </div></>
  );
}
