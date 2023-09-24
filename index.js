console.log('welcome to spotify')

//initialize the variables

let songIndex = 0;
let audioElement = new Audio('faded.mp3');
let masterPlay = document.querySelector("#masterPlay")
let myProgressBar = document.querySelector("#myProgressBar")
let gif = document.querySelector("#gif")
let masterSongName = document.querySelector("#masterSongName")
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [

{songName:"Faded - Alan Walker", songPath:"faded.mp3", coverPath:"faded.png"},
{songName:"Clandestina - JVSTIN", songPath:"clandestina.mp3", coverPath:"clandestina.jpg"},
{songName:"Love Nwantiti - CKay", songPath:"love nwantiti.mp3", coverPath:"love nwantiti.jpg"},
{songName:"Unstoppable - Sia", songPath:"unstoppable.mp3", coverPath:"unstoppable.jpg"},
{songName:"Fearless - Lost Sky", songPath:"fearless.mp3", coverPath:"fearless.jpg"},
{songName:"Sunroof - Nicky Youre", songPath:"sunroof.mp3", coverPath:"sunroof.jpg"},
{songName:"Believer - ID", songPath:"believer.mp3", coverPath:"believer.jpg"},

]

songItems.forEach((element,i)=>{
console.log(element,i);
element.getElementsByTagName('img')[0].src = songs[i].coverPath;
element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})


//audioElement.play();

//handle play/pause click

masterPlay.addEventListener('click', ()=>{

if (audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
}
else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;

}
})


// listen to events
audioElement.addEventListener('timeupdate', ()=>{

console.log('timeupdate');

//update seekbar
let progress;
progress = (audioElement.currentTime / audioElement.duration)*100;
console.log(progress);
myProgressBar.value = progress

})

myProgressBar.addEventListener('change', ()=>{

audioElement.currentTime = myProgressBar.value * audioElement.duration / 100


})

const makeAllPlays = ()=>{

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

element.addEventListener('click', (e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = songs[songIndex].songPath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

})

document.querySelector("#next").addEventListener('click' , ()=>{

if(songIndex>=6){
    songIndex = 0;
}
else{
    songIndex +=1;
}
audioElement.src = songs[songIndex].songPath;
masterSongName.innerText = songs[songIndex].songName;   
audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');


})

document.querySelector("#previous").addEventListener('click' , ()=>{

    if(songIndex<=0){
        songIndex = 6;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = songs[songIndex].songPath;
    masterSongName.innerText = songs[songIndex].songName;    
    audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    
    })