// abre e fecha cards - sistema 
const cardsArray = document.getElementsByClassName("cards-container")
let cardsOpen = [false, false, false, false, false, false];

for(let i = 0; i < cardsArray.length; i++){
    cardsArray[i].addEventListener("click", function AbreFechaCards(){
        const descCardsArray = document.getElementsByClassName("desc-cards-container")
        const arrowCardsArray = document.getElementsByClassName("arrow-cards")


        if(cardsOpen[i]){
            cardsOpen[i] = false;
            closeAllCards(descCardsArray, arrowCardsArray)

        }
        else if(!cardsOpen[i]){ // abre
            cardsOpen = [false, false, false, false, false, false];
            cardsOpen[i] = true;

            closeAllCards(descCardsArray, arrowCardsArray)
            
            descCardsArray[i].style.display = 'block'
            descCardsArray[i].style.height = '100%'
            arrowCardsArray[i].style.rotate = '90deg'
        }

        console.log(cardsOpen)
        
        
    })
}

function closeAllCards (cards, arrow, ){
    for(let i = 0; i < cards.length; i++){
        
        cards[i].style.display = 'none';
        arrow[i].style.rotate = '0deg';
    }
}

let lastPosition = 0;

document.addEventListener("scroll", function scrollHeader(){

    const nav = document.querySelector("nav")
    let actualPosition = window.scrollY

    if(actualPosition > lastPosition){
        nav.style.top = "-7em"
    }
    else{
        nav.style.top = "0"
    }

    lastPosition = actualPosition
})