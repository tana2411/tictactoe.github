
let buttons = document.querySelectorAll(".cell")
let boardspace = ["", "", "", "", "", "", "", "", ""]
let result = document.getElementById('result')

let ai = "O";

let human = "X";
const winlist = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];



play()

function play() {

    for (let i = 0; i < buttons.length; i++) {

        let btn = buttons[i];

        btn.addEventListener("click", function clicked() {


            btn.innerHTML = human;
            count -= 1
            console.log(count)
            boardspace[i] = btn.innerHTML


            btn.removeEventListener('click', clicked, false);

            // console.log(boardspace)
            checkwin();
            if (!checkwin()) {
                aiturn();
            }








        });


    }

}
let count = 5
function aiturn() {

    if (count < 1) {

        checkwin()
    }
    else {
        if (!boardspace) {
            console.log('a')
        } else {
            let a = Math.floor(Math.random() * buttons.length)

            if ((boardspace[a] != 'X') && (boardspace[a] != 'O')) {
                buttons[a].innerText = ai;
                buttons[a].setAttribute('disabled', 'true')
                boardspace[a] = buttons[a].innerText;



            } else {
                aiturn()

            }
            checkwin()
        }
    }

}

function checkwin() {
    for (const condition of winlist) {
        let [a, b, c] = condition;
        if (boardspace[a] && (boardspace[a] == boardspace[b] && boardspace[a] == boardspace[c])) {


            if (boardspace[a] == human) {
                win();
                return true
            }
            else if (boardspace[a] == ai) {
                lose()
                return true
            }


        }
    }
    if (count < 1) { draw() }
}

// function play(id) {

//     buttons[id].innerHTML = human

//     boardspace[id] = buttons[id].innerHTML
//     console.log(boardspace)

// }

// function checkwin() {

//     if ((boardspace[0] == boardspace[1]) && (boardspace[0] == boardspace[2]) && (boardspace[0] != "")) {

//         if (boardspace[0] == human) { win(); }
//         else if (boardspace[0] == ai) { lose(); }

//         return true;
//     }
//     else if ((boardspace[2] == boardspace[4]) && (boardspace[2] == boardspace[6]) && (boardspace[2] != "")) {
//         if (boardspace[2] == human) { win(); }
//         else if (boardspace[2] == ai) { lose(); }
//         return true;
//     } else if ((boardspace[3] == boardspace[4]) && (boardspace[3] == boardspace[5]) && (boardspace[3] != "")) {
//         if (boardspace[3] == human) { win(); }
//         else if (boardspace[3] == ai) { lose(); }
//         return true;
//     } else if ((boardspace[6] == boardspace[7]) && (boardspace[6] == boardspace[8]) && (boardspace[6] != "")) {
//         if (boardspace[6] == human) { win(); }
//         else if (boardspace[6] == ai) { lose(); }
//         return true;
//     } else if ((boardspace[0] == boardspace[3]) && (boardspace[0] == boardspace[6]) && (boardspace[0] != "")) {
//         if (boardspace[0] == human) { win(); }
//         else if (boardspace[0] == ai) { lose(); }
//         return true;
//     } else if ((boardspace[1] == boardspace[4]) && (boardspace[4] == boardspace[7]) && (boardspace[4] != "")) {
//         if (boardspace[1] == human) { win(); }
//         else if (boardspace[1] == ai) { lose(); }
//         return true;
//     } else if ((boardspace[2] == boardspace[5]) && (boardspace[2] == boardspace[8]) && (boardspace[2] != "")) {
//         if (boardspace[2] == human) { win(); }
//         else if (boardspace[2] == ai) { lose(); }
//         return true;
//     } else if ((boardspace[0] == boardspace[4]) && (boardspace[0] == boardspace[8]) && (boardspace[0] != "")) {
//         if (boardspace[0] == human) { win(); }
//         else if (boardspace[0] == ai) { lose(); }
//         return true;
//     }
//     else if (count < 1) {
//         draw();
//     }

//     return false
// }
function win() {

    result.style.display = "block";
    result.innerHTML = "YOU WIN";
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute('disabled', 'disabled')
    }
    return
}
function lose() {
    result.style.display = "block"
    result.innerHTML = "YOU LOSE";
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute('disabled', 'disabled')
    }
    return
}
function restart() {
    window.location.reload()


}

function draw() {
    result.style.display = "block"
    result.innerHTML = "DRAW";

}


