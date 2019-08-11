// alert("hello");
var cardsContact = document.getElementsByClassName("des-card");

var cardDiv = document.getElementsByClassName("Cards-div")[0];

let widthParent = cardDiv.width;
let widthCards = cards[0].width;
let group=0;
let noOfCards;

let leftButtonContact = document.getElementsByClassName("arrow-left-contact")[0];
let rightButtonContact = document.getElementsByClassName("arrow-right-contact")[0];
rightButtonContact.addEventListener("click",nextContact);
leftButtonContact.addEventListener("click",backContact);
// console.log(noOfCards);

// for(var i=0 ; i < cards.length ; i++){
//     if(i > noOfCards){
//         cards[0].style.display = "none";
//     }
// }

let widthScreen = window.innerWidth;
console.log(widthScreen);

function displayAll(){
    for(var i=0 ; i < cardsContact.length ; i++){
        cardsContact[i].style.display = "flex";
    }
    group =1;
    noOfCards = 8;
}

function nextContact(){
    console.log("clicked");
    rightButtonContact.removeEventListener("click",nextContact);
    setTimeout(function(){
        rightButtonContact.addEventListener("click",nextContact);        
    },450);
    if(group < noOfGroups){
        group = group+1;
        for(var i=0 ; i < cardsContact.length ; i++){
            if(i >= (group-1)*noOfCards & i < ((group-1)*noOfCards + noOfCards)){
                console.log(i);
                setTimeout(()=>{
                    card.style.display = "flex";
                },201);
                let card = cardsContact[i];
                setTimeout((i)=>{
                    card.style.opacity = "1";
                },450);                   
            }else{         
                document.getElementsByClassName("Cards-div")[0].style.transform = "scale(0)";
                let card = cardsContact[i];
                setTimeout(function(){
                card.style.display = "none";            
                document.getElementsByClassName("Cards-div")[0].style.transform = "scale(1)";
                },200);
            }
        }
    }else{
        // console.log("shake");
        for(var i=0 ; i < cardsContact.length ; i++){
            cardsContact[i].style.animation = "shake 0.5s";
        }
        setTimeout(()=>{
            for(var i=0 ; i < cardsContact.length ; i++){
                cardsContact[i].style.animation = null;
            }
        },500);     
    }
    console.log(group);
}

function backContact(){

    if(group > 1){
        group = group - 1;
        for(var i=0 ; i < cardsContact.length ; i++){
            if(i >= (group-1)*noOfCards & i < ((group-1)*noOfCards + noOfCards)){
                console.log(i);
                setTimeout(()=>{
                    card.style.display = "flex";
                },201);
                let card = cardsContact[i];
                setTimeout((i)=>{
                    card.style.opacity = "1";
                },450);
            }else{
                document.getElementsByClassName("Cards-div")[0].style.transform = "scale(0)";
                let card = cardsContact[i];
                setTimeout(function(){
                card.style.display = "none";            
                document.getElementsByClassName("Cards-div")[0].style.transform = "scale(1)";
                },200);
            }
        }
    }else{
        for(var i=0 ; i < cardsContact.length ; i++){
            cardsContact[i].style.animation = "shake 0.5s";
        }
        setTimeout(()=>{
            for(var i=0 ; i < cardsContact.length ; i++){
                cardsContact[i].style.animation = null;
            }
        },500);  
    }
 
    console.log(group);
}

function divideToGroups(){
    if(widthScreen > 966){
        displayAll();
        noOfCards = 4;
        group = 1;
        noOfGroups = Math.ceil(cardsContact.length/noOfCards);
        console.log(noOfGroups);
        for(var i=0 ; i < cardsContact.length ; i++){
            if(i >= noOfCards ){
                cardsContact[i].style.display = "none";
                // cardsContact[i].style.opacity = "0";
            }
        }
    }
    
    if(widthScreen < 700){
        displayAll();
        noOfCards = 2;
        group = 1;
        noOfGroups = Math.ceil(cardsContact.length/noOfCards);
        console.log(noOfGroups);
        for(var i=0 ; i < cardsContact.length ; i++){
            if(i >= noOfCards ){
                cardsContact[i].style.display = "none";
            }
        }
    }
    
    if(widthScreen < 500){
        displayAll();
        noOfCards = 1;
        group = 1;
        noOfGroups = Math.ceil(cardsContact.length/noOfCards);
        console.log(noOfGroups);
        for(var i=0 ; i < cardsContact.length ; i++){
            if(i >= noOfCards ){
                cardsContact[i].style.display = "none";
            }
        }
    }
}

window.addEventListener("resize",()=> {
    divideToGroups();
});

divideToGroups();