let NumberofDrum =document.querySelectorAll(".drum").length;

// this for button audio detection
for(let i=0;i<NumberofDrum;i++){

document.querySelectorAll("button")[i].addEventListener("click", function() {

    let element =this.innerHTML;
    eventlistener(element);
    adderPressed(element);

})}


// audio detection using keypress

document.addEventListener("keypress", function(event) {
    
    eventlistener(event.key);
    adderPressed(event.key)

})

function adderPressed(key){
    
   let addcss = document.querySelector("."+key);
   addcss.classList.add("pressed");

setTimeout(function (){
    addcss.classList.remove("pressed")}, 100);
}


function eventlistener(chars){
    
    switch(chars){
        case "w":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
            
        case "s":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;    
        case "d":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break; 
        case "j":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
                
        case "k":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;    
        case "l":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;    
                
    default:
        console.log();
    
    }
}
