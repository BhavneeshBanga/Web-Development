import fs from "fs/promises"

let a = await fs.readFile("bhavi.txt")
let b = await fs.appendFile("bhavi.txt", "\n\nthis is amazing promise\n")
console.log(a.toString(), b);
