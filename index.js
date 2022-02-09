

let root = document.getElementById('root');
let counter = 0;
const imgs = ['./images/babaSali.jpeg', './images/belzer.jpeg', './images/benIshHay.jpeg',
    './images/hida.jpeg', './images/lelover.jpeg', './images/rabby.jpeg', './images/rabbyDavid.jpeg',
    './images/ravBenssion.jpeg', './images/ravEliyahoo.jpeg', './images/ravFainstain.jpeg',
    './images/ravKadooree.jpeg', './images/ravMoshLevi.jpeg', './images/ravOvadia.jpeg',
    './images/ravOyerbach.jpeg', './images/ravYoram.jpeg']
const dubbleImgs = imgs.concat(imgs);
const divs = document.getElementsByClassName('newDiv');
const moves = document.getElementById('moves');
const matches = document.getElementById('matches');
let clickedCards = [];
let movesCounter = 0;
let matchesCounter = 0;

//building the board
function build() {
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 6; j++) {
            const div = document.createElement('div');
            div.className = 'newDiv';
            div.classList.add("hide");
            div.id = `div${counter}`;
            root.appendChild(div)
            counter++;;
        }
    }
}
build();


//puting random pictures in the cards
function randomImg() {
    const randonNums = [];
    do {
        const ran = Math.floor(Math.random() * 30);
        if (!randonNums.includes(ran)) {
            randonNums.push(ran)
        }
    } while (randonNums.length <= 29)

    for (let i = 0; i <= 29; i++) {
        const ran = randonNums[i];
        divs[i].style.backgroundImage = `url(${dubbleImgs[ran]})`
    }
    matches.innerHTML = `Matches: ${matchesCounter}`;
    moves.innerHTML = `Moves: ${movesCounter}`;
}
randomImg();

function newGame() {
    movesCounter = 0;
    matchesCounter = 0;
    clickedCards = [];
    // build();
    randomImg();
    [...divs].forEach((a) => a.classList.remove('pointerNone'));
    [...divs].forEach((a) => a.classList.add('hide'));
}


$('.newDiv').on('click', function (e) {

    let currentCard = e.currentTarget;
    currentCard.classList.add('pointerNone');
    currentCard.classList.remove("hide");


    if (clickedCards.length == 0) {
        clickedCards.push(e.currentTarget);
    }


    else if (clickedCards.length == 1) {
        movesCounter++;
        moves.innerHTML = `Moves: ${movesCounter}`;
        clickedCards.push(e.currentTarget);
        document.body.classList.add('pointerNone');
        setTimeout(() => { document.body.classList.remove('pointerNone') }, 2000)
        if (clickedCards[0].style.backgroundImage == clickedCards[1].style.backgroundImage) {
            matchesCounter++;
            matches.innerHTML = `Matches: ${matchesCounter}`;
            clickedCards = []
        } else {
            setTimeout(() => {
                clickedCards.forEach(a => {
                    a.classList.add('hide');
                    a.classList.remove('pointerNone')
                });
                clickedCards = []
            }, 2000)
        }
    }
}
)

