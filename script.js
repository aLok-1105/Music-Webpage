let songIndex = 0 ;
let audioElement = new Audio('Barish.mp3') ; 
let masterPlayBtn = document.getElementById('mainPlayBtn') ; 
let playBtn = document.getElementsByClassName('play') ; 
let progress = document.getElementById('progressBar') ; 
let next = document.getElementById('next') ; 
let previous = document.getElementById('previous') ; 
let songIcon = document.getElementById('songIcon') ;



let songItems = Array.from(document.getElementsByClassName('songBox'))

let songs = [
    {songName: "Barish" , filePath:"0.mp3" , coverPath:"Baarish" },
    {songName: "Thoda Thoda" , filePath:"1.mp3" , coverPath:"Thoda Thoda" },
    {songName: "Dil Ko Karar Aaya" , filePath:"2.mp3" , coverPath:"Dil Ko" },
    {songName: "Badrsaat Ki Dhun" , filePath:"3.mp3" , coverPath:"Badrsaat" },
    {songName: "Dil Galti Kar Baitha Hai" , filePath:"4.mp3" , coverPath:"Dil Galti" },
]


//console.log(progress);
//progress.value=0
let songDisplay = songIcon ; 

// playBtn.addEventListener('click' , ()=> {
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         playBtn.src= 'pause.png' ;
//     }
//     else{
//         audioElement.pause()
//         playBtn.src= 'play.png' ;
//     }
// })

audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progressBar = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    progress.value = progressBar;
    
})

progress.addEventListener('click', ()=>{
    audioElement.currentTime = progress.value * audioElement.duration/100;
})

// const makeAllPlays = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//     })
// }


//next and previous button
previous.addEventListener('click' , () =>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex}.mp3`;
    audioElement.currentTime = 0 ; 
    audioElement.play();
    mainPlayBtn.src= 'pause.png' ;
    songDisplay = songs[songIndex].coverPath ; 
    songIcon.src= `${songDisplay}.jpg` ;
    

})

next.addEventListener('click' , () =>{
    if(songIndex >= 4){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex}.mp3`;
    audioElement.currentTime = 0 ; 
    audioElement.play();
    songDisplay = songs[songIndex].coverPath ; 
    console.log(songDisplay)
    songIcon.src= `${songDisplay}.jpg` ;
    songIcon.style.transition = 0.6;
    mainPlayBtn.src= 'pause.png' ;
    
    

})

//Play and pause button
masterPlayBtn.addEventListener('click' , ()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        mainPlayBtn.src= 'pause.png' ;
        //songIcon.src= `${songDisplay}.jpg` ;
        songIcon.style.opacity=1 ;

    }
    else{
        audioElement.pause()
        mainPlayBtn.src= 'play.png' ;
        songIcon.style.opacity=0.5 ;
    }
})
