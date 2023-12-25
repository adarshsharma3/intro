console.log("aajao yrr swaagat hai");
let audio = new Audio("Satranga1.mp3");
// Audi.play();
let index = 1;
let openingnumb = 1;
let playbutton = document.getElementById("playbutton");
let pbar = document.getElementById("pBar");
let songaNameHigh = document.getElementById("SName");
let pikachu = document.getElementById("pikachu");

let songl = [
  { songName: "Satranga", filePath: "Satranga.mp3", coverPath: "sensei.jpeg" },
  {
    songName: "Tu-Hai-Kahan",
    filePath: "Satranga-2.mp3",
    coverPath: "sensei2.jpg",
  },
  {
    songName: "Pehle-Bhi-Main",
    filePath: "Satranga3.mp3",
    coverPath: "sensei3.jpeg",
  },
  { songName: "Kashmir", filePath: "Satranga4.mp3", coverPath: "sensei4.jpg" },
  {
    songName: "Saari-Duniya..",
    filePath: "Satranga5.mp3",
    coverPath: "sensei5.jpg",
  },
  
  {
    songName: "Channa-Mereya",
    filePath: "Satranga6.mp3",
    coverPath: "sensei6.jpg",
  },
  {
    songName: "Dance-Ka-Bhoot",
    filePath: "Satranga7.mp3",
    coverPath: "sensei7.jpg",
  },
  {
    songName: "Deva-Deva",
    filePath: "Satranga8.mp3",
    coverPath: "sensei8.jpg",
  },
  {
    songName: "Agar-Tum-Saath-Ho",
    filePath: "Satranga9.mp3",
    coverPath: "sensei9.jpg",
  },
  {
    songName: "Kabira.",
    filePath: "Satranga10.mp3",
    coverPath: "sensei10.jpg",
  }
];


//play handle


// **for main olay butoon*
playbutton.addEventListener("click", () => {
   let song1 = document.getElementById("1");
  //  if (openingnumb === 1) {
  //   song1.classList.remove("fa-play");
  //   song1.classList.add("fa-pause");
  //   openingnumb++;
  // }
  if (audio.paused || audio.currentTime <= 0) {
    audio.play();
    playbutton.classList.remove("fa-play");
    playbutton.classList.add("fa-pause");
    pikachu.style.opacity = 1;
    
    // if (openingnumb === 1) {
    //   song1.classList.remove("fa-play");
    //   song1.classList.add("fa-puase");
    //   openingnumb++;
    // }
    
  }
  
  else {
    audio.pause();
    playbutton.classList.add("fa-play");
    playbutton.classList.remove("fa-pause");
    pikachu.style.opacity = 0;
   
   
  }


});

//listening

audio.addEventListener("timeupdate", () => {
  console.log("time update kiya hai");

  progress = parseInt((audio.currentTime / audio.duration) * 100);
  console.log(progress);

  pbar.value = progress;
});

pbar.addEventListener("change", () => {
  audio.currentTime = (pbar.value * audio.duration) / 100;

  }
);
makeAllP = () => {
  Array.from(document.getElementsByClassName("songplay")).forEach((element) => {
    element.classList.remove("fa-pause");
    element.classList.add("fa-play");
  });
};


// ******when clicked on songs pause/play*******
Array.from(document.getElementsByClassName("songplay")).forEach((elements) => {
  elements.addEventListener("click", (ele) => {
   
if(!audio.paused && parseInt(ele.target.id)===index){
      audio.pause();
      playbutton.classList.add("fa-play");
      playbutton.classList.remove("fa-pause");
      makeAllP();
      pikachu.style.opacity=0;

}
else{
index = parseInt(ele.target.id);

    // if(audio.play && parseInt(ele.target.id)===index){
    //   audio.pause();
    //   playbutton.classList.add("fa-play");
    //   playbutton.classList.remove("fa-pause");
    //   makeAllP();
      
    // }
    // else{
    makeAllP();
    
    ele.target.classList.remove("fa-play");
    ele.target.classList.add("fa-pause");
    audio.src = `Satranga${index}.mp3`;
   // audio.currentTime = 0;      //**********
    audio.play();
    playbutton.classList.remove("fa-play");
    pikachu.style.opacity = 1;
    playbutton.classList.add("fa-pause");
    songaNameHigh.innerText = songl[index - 1].songName;
    // endProtect();
}
  });
});

document.getElementById("previous").addEventListener("click", () => {
  if (index === 1) {
    index = 10;
  } else {
    index = index - 1;
  }
  songaNameHigh.innerText = songl[index - 1].songName;
  audio.src = `Satranga${index}.mp3`;
  audio.currentTime = 0;
  audio.play();
  playbutton.classList.remove("fa-play");
  playbutton.classList.add("fa-pause");
  pikachu.style.opacity = 1;

  makeAllP();
  let plpa = document.getElementById(`${index}`);
  plpa.classList.add("fa-pause");
  plpa.classList.remove("fa-play");
  //   endProtect();
});
document.getElementById("succed").addEventListener("click", () => {
  if (index === 10) {
    index = 1;
  } else {
    index += 1;
  }
  songaNameHigh.innerText = songl[index - 1].songName;
  audio.src = `Satranga${index}.mp3`;
  audio.currentTime = 0;
  audio.play();
  playbutton.classList.remove("fa-play");
  playbutton.classList.add("fa-pause");
  makeAllP();
  let plpa = document.getElementById(`${index}`);
  plpa.classList.add("fa-pause");
  pikachu.style.opacity = 1;
  plpa.classList.remove("fa-play");
  // endProtect();
});




playbutton.addEventListener("click", () => {
  let song1 = document.getElementById("1");
if(audio.paused || audio.currentTime <= 0){
    Array.from(document.getElementsByClassName("songplay")).forEach((element) => {
      element.classList.remove("fa-pause");
      element.classList.add("fa-play");
    });
// ****************

// if (openingnumb === 1) {
//   song1.classList.remove("fa-play");
//   song1.classList.add("fa-pause");
//   openingnumb++;
// }
// ****************
  }
  
  
  else {
   
    Array.from(document.getElementsByClassName("songplay")).forEach(
      (element) => {
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
      }
    );

    let plpa = document.getElementById(`${index}`);
    plpa.classList.add("fa-pause");
    pikachu.style.opacity = 1;
    plpa.classList.remove("fa-play");
    // &&&&&&&&
    
    // **
  }
  console.log("openingnumb:", openingnumb);
  console.log("audio.src:", audio.src);
  if (openingnumb === 1 && audio.src === "file:///C:/tune/Satranga1.mp3") {
    song1.classList.remove("fa-play");
    song1.classList.add("fa-pause");
    openingnumb++;
  }
  
 
}
  //   endProtect();
);

/////////
//when the song end for next song to get played
audio.addEventListener("ended", () => {
  // This event will be triggered when the audio has finished playing
  if (index === 10) {
    index = 1;
  } else {
    index = index + 1;
  }
  audio.src = `Satranga${index}.mp3`;
  audio.play();

  makeAllP();
  let plpa = document.getElementById(`${index}`);
  plpa.classList.add("fa-pause");
  pikachu.style.opacity = 1;
  plpa.classList.remove("fa-play");

  songaNameHigh.innerText = songl[index - 1].songName;



});
// *************
document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowRight") {
    // Your code to handle the right arrow key press
    // For example, you can navigate to the next song or perform any other action
audio.currentTime=audio.currentTime + 10;


    event.preventDefault(); // This prevents the default behavior of scrolling when the right arrow key is pressed
  }
  if (event.code === "ArrowLeft") {
    // Your code to handle the right arrow key press
    // For example, you can navigate to the next song or perform any other action
audio.currentTime=audio.currentTime-10

;


    event.preventDefault(); // This prevents the default behavior of scrolling when the right arrow key is pressed
  }


});




// for spacebar
document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    // Your code to handle the spacebar press
if(audio.paused ||  audio.currentTime <= 0 ){
  audio.play();
  makeAllP();
  let plpa = document.getElementById(`${index}`);
  plpa.classList.add("fa-pause");
  pikachu.style.opacity = 1;
  plpa.classList.remove("fa-play");
  playbutton.classList.remove("fa-play");
  playbutton.classList.add("fa-pause");
}
else  {                
  audio.pause();   
  makeAllP();      
  playbutton.classList.remove("fa-pause");
  playbutton.classList.add("fa-play");
}
    event.preventDefault(); // This prevents the default behavior of scrolling down the page when spacebar is pressed
  }
});



















// Array.from(document.getElementsByClassName("songplay")).forEach((elements) => {
//   elements.addEventListener("click", (ele) => {
//     if(audio.play){
//       audio.pause();
//       playbutton.classList.add("fa-play");
//       playbutton.classList.remove("fa-pause");
//       makeAllP();
      
//     }
//     else{
//     makeAllP();
//     index = parseInt(ele.target.id);
//     ele.target.classList.remove("fa-play");
//     ele.target.classList.add("fa-pause");
//     audio.src = `Satranga${index}.mp3`;
//     audio.currentTime = 0;
//     audio.play();
//     playbutton.classList.remove("fa-play");
//     pikachu.style.opacity = 1;
//     playbutton.classList.add("fa-pause");
//     songaNameHigh.innerText = songl[index - 1].songName;
//     // endProtect();
//     }
//   });
// });



// Array.from(document.getElementsByClassName("songplay")).forEach((elements) => {
//   elements.addEventListener("click", (ele) => {
//     index = parseInt(ele.target.id);
//     if(!audio.paused && audio.src.endsWith("Satranga" + index + ".mp3")){
//       audio.pause();
//       playbutton.classList.add("fa-play");
//       playbutton.classList.remove("fa-pause");
//       makeAllP();
      
//     }
  
     
//   });
// });
