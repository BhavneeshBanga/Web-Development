
import Image from "next/image";
import fs from 'fs/promises'

export default function Home() {
  const submitAction = async (e) => {
    "use server"
    console.log(e.get("name"), e.get("add"));
    fs.writeFile("Bhavi.md", `## name is ${e.get("name")} and address is ${e.get("add")}`)
    
  }
  
  return (
    <div>
      Form
      <form action={submitAction}>
        <div>
          <label htmlFor="name" className="text-white mx-4 py-6">
            name
          </label>
          <input name="name" id="name" className="text-white" type="text" />
        </div>
        <div>
          <label htmlFor="add" className="text-white mx-4 py-4">
            address
          </label>
          <input name="add" id="add" className="text-white" type="text" />
        </div>
        <button className="border border-white px-4"> Submit</button>
      </form>
    </div>
  );
}
