console.log('lets write javascript');

async function getsongs() {
    
    let a = await fetch("http://10.143.181.14:5500/songs/")
    let response = await a.text();
    console.log(response);

    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")



    console.log("all the as are here ");
    


    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href)
        }
    }
    return songs;
    
}


async function main() {

    
    let songs = await  getsongs()
    console.log(songs);
    
    var song = new Audio(songs[1]);
    document.getElementById("playsongbutton").addEventListener("click", () => {
            song.play();
        });
    }


main()