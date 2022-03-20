let start = new Date().getTime();
const Shape = document.getElementById("shape");
const timeDisplay = document.getElementById('timePassed');
let bestTimeDisplay = document.getElementById('bestTime');
let storedTimesArr = [];

function getRandomColor(){
    let letters = '0123456789ABCDEF'.split('');
    let color = '#';

    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function shapeReappear(){
    
    //generate random size for shape metrics
    let top = Math.random() * 400;
    let left = Math.random() * 400;
    let width = (Math.random() * 150) + 100;
    let height = (Math.random() * 250) +50;
    
    if(Math.random() > 0.3){
        Shape.style.borderRadius = "50%"
    }else{
        Shape.style.borderRadius = "0";
    }
    
    //randomize color of shape
    Shape.style.backgroundColor = getRandomColor();
    
    //set the shape size to radom metrics
    Shape.style.top = top + "px";
    Shape.style.left = left + "px";
    Shape.style.width = width + "px";
    Shape.style.height = height + "px";

    Shape.style.display = "block";
    
    start = new Date().getTime();
}

function shapeAppearAfterRound(){
    setTimeout(shapeReappear, Math.random() * 2000);
}

shapeAppearAfterRound();

//purpose to store all times made inside an arry
//then iterate through the array to figure out
//best time to display
function findBestTime(){
    storedTimesArr.push(timePassed);
    console.log(storedTimesArr);
}

Shape.addEventListener("click", ()=>{
    Shape.style.display = "none";
    let end = new Date().getTime();
    let timePassed = (end - start) / 1000;
    
    timeDisplay.innerHTML = timePassed + "s";
 
    //findBestTime();
    shapeAppearAfterRound();
})
