 const audio = document.getElementById("audio1");
    const progressBar = document.getElementById("progressBar");
    const currentTimeDisplay = document.getElementById("currentTime");
    const durationDisplay = document.getElementById("duration");

    // Format time in MM:SS format
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secondsLeft = Math.floor(seconds % 60);
        return `${minutes}:${secondsLeft.toString().padStart(2, "0")}`;
    }

    // Play/Pause audio
    function playPauseAudio() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }

    // Rewind the audio by 5 seconds
    function rewindAudio() {
        audio.currentTime = Math.max(0, audio.currentTime - 5);
    }

    // Forward the audio by 5 seconds
    function forwardAudio() {
        audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
    }

    // Change the playback speed
    function changeSpeed() {
        const speed = parseFloat(document.getElementById("speedControl").value);
        audio.playbackRate = speed;
    }

    // Update the progress bar as the audio plays
    audio.ontimeupdate = () => {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progressPercent;
        currentTimeDisplay.textContent = formatTime(audio.currentTime);
    };

    // Update the duration display when metadata is loaded
    audio.onloadedmetadata = () => {
        durationDisplay.textContent = formatTime(audio.duration);
        progressBar.max = 100;
    };

    // Seek audio when the progress bar is clicked or dragged
    progressBar.oninput = () => {
        const seekTime = (progressBar.value / 100) * audio.duration;
        audio.currentTime = seekTime;
    };
