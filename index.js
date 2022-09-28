let player = {
    name: "Viggy",
    chips:150
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
console.log(messageEl)

let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let v = Math.floor(Math.random()*13) + 1
    if(v === 1){
        return 11
    }else if(v>10){
        return 10
    }else{
        return v
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    if(sum < 21){
        message = "do you want to draw a new card ;)"
    }else if(sum === 21){
        message = "noice! you have a blackjack :)"
        hasBlackJack = true
    }else if(sum>21){
        message = "you are out :("
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    console.log("drawing a new card1")

    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        cards.push(card)
        sum += card
        console.log(cards)
        renderGame()
    }
    
}