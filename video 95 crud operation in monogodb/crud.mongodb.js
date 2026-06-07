use("BhaviKaDb")

console.log(db);



// //create
// db.createCollection("courses")




// //update
// db.courses.insertMany([
//   {
//     name: "bhavibanga",
//     age: 20,
//     course: "Sigma Web Development",
//     kahani: "Amazing",
//     email: "bhavi@example.com",
//     city: "Bassi",
//     skills: ["HTML", "CSS", "JavaScript", "MongoDB"],
//     isEnrolled: true,
//     instructor: "Bhavneesh",
//     socialMedia: {
//       youtube: "BhaviCodes",
//       instagram: "@bhavibanga"
//     }
//   },
//   {
//     name: "rahul",
//     age: 22,
//     course: "Data Structures",
//     kahani: "Hardworking",
//     email: "rahul@example.com",
//     city: "Delhi",
//     skills: ["C++", "DSA", "Git"],
//     isEnrolled: true,
//     instructor: "Bhavneesh",
//     socialMedia: {
//       youtube: "RahulTech",
//       instagram: "@rahul"
//     }
//   },
//   {
//     name: "priya",
//     age: 19,
//     course: "Full Stack Development",
//     kahani: "Creative",
//     email: "priya@example.com",
//     city: "Mumbai",
//     skills: ["React", "Node.js", "MongoDB"],
//     isEnrolled: false,
//     instructor: "Bhavneesh",
//     socialMedia: {
//       youtube: "PriyaCodes",
//       instagram: "@priya"
//     }
//   },
//   {
//     name: "aman",
//     age: 21,
//     course: "Backend Development",
//     kahani: "Consistent",
//     email: "aman@example.com",
//     city: "Chandigarh",
//     skills: ["Express", "MongoDB", "Docker"],
//     isEnrolled: true,
//     instructor: "Bhavneesh",
//     socialMedia: {
//       youtube: "AmanDev",
//       instagram: "@aman"
//     }
//   },
//   {
//     name: "simran",
//     age: 23,
//     course: "Frontend Development",
//     kahani: "Fast Learner",
//     email: "simran@example.com",
//     city: "Ludhiana",
//     skills: ["HTML", "CSS", "React"],
//     isEnrolled: true,
//     instructor: "Bhavneesh",
//     socialMedia: {
//       youtube: "SimranUI",
//       instagram: "@simran"
//     }
//   }
// ])


// let b = db.courses.find({name : "bhavibanga"})
// console.log(b);



//update
// db.courses.updateOne(
//     { name: "bhavibanga" },
//     {
//         $set: {
//             age: 21,
            
//         }
//     }
    
// let result = db.courses.updateOne(
// { name: "bhavibanga" },
// {
//     $set: {
//         age: 210
//     }
// }
// )

// console.log(result)



// let ans = db.courses.updateMany(
    // { instructor: "Bhavneesh" },
    // {
    //     $set: {
    //         instructor: "Bhavi Sir"
    //     }
    // }
// )




let ans = db.courses.deleteOne({kahani:"Amazing"})
console.log(ans);
