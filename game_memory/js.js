const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard,lockBoard = false;
var score = 0;
let btn = false;
const win = document.querySelector('#win');

const btnReset = document.getElementById('reset_btn');
btnReset.addEventListener('click', () =>{
   
    win.style.display = 'none';
    location.reload();
})

function flipCard(){
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.toggle('flip');
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;

        new Audio('click.wav').play();
        return;
        
    }

    new Audio('click.wav').play();
    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

function checkForMatch(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        new Audio('match.wav').play();
        disableCards();
        point();
        return;
    }

    unflipCards();
    return;
}

function point(){
    score = score + 1;
    console.log(score);

    if(score === 6){
        new Audio('win.wav').play();
        

        win.style.display = 'flex';
       
        return;
    }

    
}

function disableCards(){
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click',flipCard);

    resetBoard()
}

function unflipCards(){
    setTimeout(() =>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

       resetBoard()
    },1500);
}

function resetBoard(){
    [hasFlippedCard,lockBoard] = [false,false];
    [firstCard,secondCard] = [null,null]
}

(function shuffle(){
    cards.forEach((card) =>{
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    })
})();

cards.forEach((card) =>{
    card.addEventListener('click', flipCard)
})