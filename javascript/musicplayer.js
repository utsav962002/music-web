// music player java script

    const music = document.querySelector('audio');
    const img = document.querySelector("img")
    const play = document.getElementById("play");
    const artist = document.getElementById("artist");
    const title = document.getElementById("title");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    let progress = document.getElementById("progress");
    let total_currentTime = document.getElementById("current_time");
    let total_duration = document.getElementById("duration");   
    const progress_div = document.getElementById("progress_div");


    const songs = [
        {
            name: 1,
            title: "song1",
            artist: "art1",
            border: "-------------------"
        },
        {
            name: 2,
            title: "song2",
            artist: "art2",
            border: "-------------------"
        },
        {
            name: 3,
            title: "song3",
            artist: "art3",
            border: "-------------------"
        },
        {
            name: 4,
            title: "song4",
            artist: "art4",
            border: "-------------------"
        },
        {
            name: 5,
            title: "song5",
            artist: "art5",
            border: "-------------------"
        },
        {
            name: 6,
            title: "song6",
            artist: "art6",
            border: "-------------------"
        },
        
        
    ]

    let isPlaying = false;
    // for play
        const playMusic = () =>{
        isPlaying = true;
        music.play();
        play.classList.replace("fa-play", "fa-pause");
        img.classList.add("anime")
    };

    // for pause 
        const pauseMusic = () =>{
        isPlaying = false;
        music.pause();
        play.classList.replace("fa-pause", "fa-play");
        img.classList.remove("anime")
    };

    play.addEventListener('click',() => {
        if(isPlaying){
            pauseMusic();
        }else{
            playMusic();
        }


        // use this line if not use if else condition
            //  isPlaying ? pauseMusic() : playMusic();
    });

    
    // changing music data

    const loadsong = (songs) => {
        title.textContent = songs.name;
        artist.textContent = songs.artist;
        music.src = "music/" + songs.name + ".mp3";
        img.src = "images/" + songs.name + ".jpg";

    };



    // next prev button mate
    songindex = 0;
    // loadsong(songs[1]);

    const nextsong = () => {
        songindex = (songindex + 1) % songs.length;
        loadsong(songs[songindex]);
        playMusic();
    };

    const prevsong = () => {
        songindex = (songindex - 1 + songs.length) % songs.length;
        loadsong(songs[songindex]);
        playMusic();
    };

    // progress bar work

    music.addEventListener('timeupdate',(event) => {
        const {currentTime, duration} = event.srcElement;
        // console.log(currentTime);
        // console.log(duration);

        let progress_time = (currentTime / duration) * 100;
        progress.style.width = `${progress_time}%`;


        //music duration time 
        let min_duration = Math.floor(duration / 60);
        let sec_duration = Math.floor(duration % 60);
        // console.log(min_duration);
        // console.log(sec_duration);

        if(sec_duration < 10){
            sec_duration = `0${sec_duration}`
          }

          let tot_duration = `${min_duration}:${sec_duration}`;
          if(duration){
          total_duration.textContent = `${tot_duration}`;
          }


        //   current duration time

        let min_currentTime = Math.floor(currentTime / 60);
        let sec_currentTime = Math.floor(currentTime % 60);
        // console.log(min_duration);
        // console.log(sec_duration);

          
          if(sec_currentTime < 10){
            sec_currentTime = `0${sec_currentTime}`
          }
          let tot_currentTime = `${min_currentTime}:${sec_currentTime}`;
          total_currentTime.textContent = `${tot_currentTime}`;


        //   for stop photo rotate animetion when music stop

          
    });

    // progress bar onclick function
    progress_div.addEventListener('click',(event) =>{
        // console.log(event);
        const {duration} = music;

        let move_progress = (event.offsetX / event.srcElement.clientWidth) * duration;
        // console.log(duration)
        // console.log(move_progress);

        music.currentTime = move_progress;
    });


    // next music function
    music.addEventListener("ended", nextsong)




    next.addEventListener("click", nextsong);
    prev.addEventListener("click", prevsong);
    



// for music list

// var arr = document.getElementById("demo").innerHTML = songs[0].name + '<br />' + songs[0].title + " | " + songs[0].artist;

        // console.log(arr);

        // document.getElementById("demo").style.color = "blue";

        var i;
        var text = "";
        for (i = 0; i < songs.length; i++)
        {
            text += songs[i].name +'<br />'+ songs[i].title + " | " + songs[i].artist +'<br />' + songs[i].border + '<br />';
            document.getElementById("demo").innerHTML = text;
        }
