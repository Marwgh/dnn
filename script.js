window.addEventListener("load", videoButtons);

let vid = document.querySelector("#tb_video");
let videoScreen = document.querySelector("#videoScreen");
let blackB = document.querySelector("#blackB");
let playButton = document.querySelector("#playButton");
let closeVideoButton = document.querySelector("#closeVideoButton");


function videoButtons() {
    playButton.addEventListener("click", video);
    document.addEventListener("keydown", keyStroked);
    /* vid.addEventListener("mouseover", playVideo);
    vid.addEventListener("mouseout", pauseVideo);*/
}

function playVideo() {
    console.log("playvideo");
    vid.play();
}

function pauseVideo() {
    console.log("pausevideo");
    vid.pause();
}

function stopVideo() {
    console.log("stopvideo");
    vid.pause();
    vid.currentTime = 0;
}

function keyStroked(e) {
    console.log("Key pressed" + e.key + "(no." + e.which + ")");
    let volume = vid.volume;

    if (e.which == 83) {
        stopVideo();
    } else if (e.which == 32) {
        if (vid.paused ==false) {
            playVideo();
        } else {
            pauseVideo();
        }
    }  else if (e.which == 77) {
        if (vid.muted == true) {
            vid.muted = false;
        } else {
            vid.muted = true;
        }
    } else if (e.which == 39) {
        vid.currentTime += 5;
    } else if (e.which == 37) {
        vid.currentTime -= 5;
    } else if (e.which == 38) {
        volume += 0.1;
        if (volume > 1) {
            volume = 1
        }
        console.log("vol:" + volume);
    } else if (e.which == 40) {
        volume -= 0.1;
        if (volume < 0) {
            volume = 0
        }
        console.log("vol:" + volume);
    }

    vid.volume = volume;
}

function video() {
    console.log("video");
    videoScreen.style.visibility = "visible";
    blackB.style.visibility = "visible";
    blackB.classList.add("relax");
    closeVideoButton.addEventListener("click", closeVideo);
}

function closeVideo() {
    console.log("closevideo");
    videoScreen.style.visibility = "hidden";
    blackB.style.visibility = "hidden";
    blackB.classList.remove("relax");
    closeVideoButton.removeEventListener("click", closeVideo);
    vid.pause();
    vid.currentTime = 0;
}
