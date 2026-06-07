// console.log('lets write javascript');
let currentSong = new Audio;
play = document.getElementById("play")
let songs;
let currFolder;
let originalSoundValue;  //its for volume button
async function getsongs(folder) {
    currFolder = folder;

    let a = await fetch(`https://bhavneeshbanga.github.io/Spotify/${folder}/tracklist.json`);
    songs = await a.json();

    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0];
    songUL.innerHTML = "";
    for (const song of songs) {
        songUL.innerHTML += `<li><img class="invert" src="img/music.svg" alt="">
                            <div class="info">
                                <div>${song.replaceAll("%20", " ")}</div>
                                <div>Bhavneesh</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img class="invert" src="img/playlibrary.svg" alt="">
                            </div></li>`;
    }

    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach((e) => {
        e.addEventListener("click", () => {
            playMusic(e.querySelector(".info").firstElementChild.innerHTML);
        });
    });

    return songs;
}


const playMusic = (track, pause = false) => {
    currentSong.src = `https://bhavneeshbanga.github.io/Spotify/${currFolder}/${encodeURIComponent(track)}`;

    if (!pause) {
        currentSong.play();
        play.src = "img/pause.svg";
    }

    document.querySelector(".songinfo").innerHTML = decodeURIComponent(track);
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
}


function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}


function getRandomInt(num) {
    return Math.floor(Math.random() * (num + 1));
}




async function displayAlbums() {
    let a = await fetch(`https://bhavneeshbanga.github.io/Spotify/songs.json`);
    let data = await a.json();

    let cardContainer = document.querySelector(".cardContainer");

    for (const folder of data.folders) {
        let res = await fetch(`https://bhavneeshbanga.github.io/Spotify/songs/${folder}/info.json`);
        let info = await res.json();

        cardContainer.innerHTML += `<div data-folder="${folder}" class="card">
                        <div class="play">
                            <svg xmlns="www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" fill="#1DB954" />
                                <path d="M10 8L16 12L10 16V8Z" fill="black" />
                            </svg>
                        </div>
                        <img src="https://bhavneeshbanga.github.io/Spotify/songs/${folder}/cover.jpg" alt="">
                        <h2>${info.title}</h2>
                        <p>${info.description}</p>
                    </div>`;
    }

    Array.from(document.querySelectorAll(".card")).forEach(card => {
        card.addEventListener("click", async (event) => {
            let folder = event.currentTarget.dataset.folder;
            songs = await getsongs(`songs/${folder}`);
            playMusic(songs[0]);
        });
    });
}

async function main() {
    await getsongs("songs/love")
    // console.log(songs);
    // console.log("songs length : ", songs.length);

    let n = getRandomInt(songs.length)
    playMusic(songs[n], true);



    //display all the albums on the page
    displayAlbums();





    play = document.getElementById("play")
    //attach an event listner to play, next and previos
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "img/pause.svg";
        } else {
            currentSong.pause();
            play.src = "img/play.svg"

        }
    })



    //lsiten for itme update event
    currentSong.addEventListener("timeupdate", () => {
        // console.log(currentSong.currentTime, currentSong.duration);
        document.querySelector(".songtime").innerHTML =
            `${formatTime(currentSong.currentTime)} / ${formatTime(currentSong.duration)}`;

        document.querySelector(".circle").style.left = ((currentSong.currentTime / currentSong.duration) * 100) + "%";
        let progress = (currentSong.currentTime / currentSong.duration) * 100;

        document.querySelector(".seekbar").style.background =
            `linear-gradient(to right,
        green ${progress}%,
        white ${progress}%)`;

    })




    //add an event listner to seekbar
    document.querySelector(".seekbar").addEventListener("click", e => {

        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;

        document.querySelector(".circle").style.left = (percent) + "%";

        currentSong.currentTime = (percent * (currentSong.duration)) / 100;

    })


    //addd an event listenr for hamburger touch icon
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
    })

    //addd an event listenr for close hamburger 
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%";
    })



    document.querySelector(".playprevsongbutton").addEventListener("click", () => {
        let currentTrack = decodeURIComponent(currentSong.src.split(`/${currFolder}/`)[1]);
        let index = songs.indexOf(currentTrack);
        if (index <= 0) index = songs.length;
        playMusic(songs[(index - 1) % songs.length]);
    });

    document.querySelector(".playnextsongbutton").addEventListener("click", () => {
        let currentTrack = decodeURIComponent(currentSong.src.split(`/${currFolder}/`)[1]);
        let index = songs.indexOf(currentTrack);
        playMusic(songs[(index + 1) % songs.length]);
    });



    //add an event listner to handle volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        // console.log(e, e.target, e.target.value);
        currentSong.volume = parseInt(e.target.value) / 100;

    })



    //add an event listner for mute the volume
    document.querySelector(".volume>img").addEventListener("click", e => {
        console.log(e.target.src);
        if (e.target.src.includes("img/volume.svg")) {
            console.log("yes");

            e.target.src = e.target.src.replace("img/volume.svg", "img/mute.svg")
            currentSong.volume = 0;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
            currentSong.pause();
            play.src = "img/play.svg"
        } else {
            currentSong.volume = 0.4;
            e.target.src = e.target.src.replace("img/mute.svg", "img/volume.svg")
            document.querySelector(".range").getElementsByTagName("input")[0].value = 40;
            currentSong.play();
            play.src = "img/pause.svg";


        }


    })

}


main()