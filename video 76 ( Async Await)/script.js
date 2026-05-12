// async function getData() {
//     return new Promise((resolve, reject) => {
//         //simulate getting data fromm server
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

// async function getData() {
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let data = await x.json()
//     console.log(data);

//     console.log(x);
//     return 455;
// }

async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',

        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),

        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    let data = await x.json();
    return data;
}

// await ko async funciton k andar hi use kiya ja sakta hai
async function main() {
    //   await  setTimeout(() => {
    console.log('loading moudles');
    // }, 2200);

    // await setTimeout(() => {
    console.log('do something ese');
    // }, 3700);

    // setTimeout(() => {
    console.log('load data');
    // }, 900);


    let data = await getData()

    // data.then(()=>{
    //     console.log(data)
    //     console.log('process data');
    //     console.log('task 2');
    // })

    console.log(data)
    console.log('process data');
    console.log('task 2');
}

main()