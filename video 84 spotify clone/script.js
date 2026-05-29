// console.log('lets write javascript');
let currentSong = new Audio;
play = document.getElementById("play")


async function getsongs() {

    let a = await fetch("http://10.143.181.14:5500/songs/")
    let response = await a.text();
    // console.log(response);

    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")



    // console.log("all the as are here ");



    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split('/songs/')[1])
        }
    }
    return songs;

}


const playMusic = (track, pause = false) => {
    currentSong.src = ("/songs/" + track);
    if (!pause) {
        currentSong.play()
        play.src = "pause.svg"
    }

    console.log(document.querySelector(".songinfo"));

    document.querySelector(".songinfo").innerHTML = decodeURI(track)
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
}


function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}


function getRandomInt(num) {
    return Math.floor(Math.random() * (num + 1));
}


async function main() {
    let songs = await getsongs()
    // console.log(songs);
    // console.log("songs length : ", songs.length);

    let n = getRandomInt(songs.length)
    
    playMusic(songs[n], true);





    //show all the songs in the playlist
    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]

    for (const song of songs) {

        songUL.innerHTML = songUL.innerHTML + `<li><img class="invert" src="music.svg" alt="">
                            <div class="info">
                                <div>${song.replaceAll("%20", " ")}</div>
                                <div>Bhavneesh</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img class="invert" src="playlibrary.svg" alt="">
                            </div> </li>`
    }

    //attach an event listner to each song
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach((e) => {
        // console.log(e);
        e.addEventListener("click", element => {
            // console.log(e.querySelector(".info").firstElementChild.innerHTML);
            playMusic(e.querySelector(".info").firstElementChild.innerHTML);
        })
    })


    play = document.getElementById("play")
    //attach an event listner to play, next and previos
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "pause.svg";
        } else {
            currentSong.pause();
            play.src = "play.svg"

        }
    })



    //lsiten for itme update event
    currentSong.addEventListener("timeupdate", () => {
        // console.log(currentSong.currentTime, currentSong.duration);
        document.querySelector(".songtime").innerHTML =
            `${formatTime(currentSong.currentTime)} / ${formatTime(currentSong.duration)}`;

        document.querySelector(".circle").style.left = ((currentSong.currentTime / currentSong.duration) * 100) + "%";

    })




    //add an event listner to seekbar
    document.querySelector(".seekbar").addEventListener("click", e => {

        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;

        document.querySelector(".circle").style.left = (percent) + "%";

        currentSong.currentTime = (percent * (currentSong.duration)) / 100;

    })


    //addd an event listenr for hamburger touch icon
    document.querySelector(".hamburger").addEventListener("click" , ()=>{
        document.querySelector(".left").style.left = "0";
    })
    
    //addd an event listenr for close hamburger 
    document.querySelector(".close").addEventListener("click" , ()=>{
        document.querySelector(".left").style.left = "-120%";
    })








}


main()