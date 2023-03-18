// // Function called whenever user tab on any box
// function myfunc() {

//     // Setting DOM to all boxes or input field
//     var b1, b2, b3, b4, b5, b6, b7, b8, b9;
//     b1 = document.getElementById("b1").value;
//     b2 = document.getElementById("b2").value;
//     b3 = document.getElementById("b3").value;
//     b4 = document.getElementById("b4").value;
//     b5 = document.getElementById("b5").value;
//     b6 = document.getElementById("b6").value;
//     b7 = document.getElementById("b7").value;
//     b8 = document.getElementById("b8").value;
//     b9 = document.getElementById("b9").value;

//     // Checking if Player X won or not and after
//     // that disabled all the other fields
//     if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
//         b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
//         document.getElementById('print')
//             .innerHTML = "Player X won";
//         document.getElementById("b4").disabled = true;
//         document.getElementById("b5").disabled = true;
//         document.getElementById("b6").disabled = true;
//         document.getElementById("b7").disabled = true;
//         document.getElementById("b8").disabled = true;
//         document.getElementById("b9").disabled = true;
//         window.alert('Player X won');
//     }
//     else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
//         b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
//         document.getElementById('print')
//             .innerHTML = "Player X won";
//         document.getElementById("b2").disabled = true;
//         document.getElementById("b3").disabled = true;
//         document.getElementById("b5").disabled = true;
//         document.getElementById("b6").disabled = true;
//         document.getElementById("b8").disabled = true;
//         document.getElementById("b9").disabled = true;

//         window.alert('Player X won');
//     }
//     else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
//         b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
//         document.getElementById('print')
//             .innerHTML = "Player X won";
//         document.getElementById("b1").disabled = true;
//         document.getElementById("b2").disabled = true;
//         document.getElementById("b3").disabled = true;
//         document.getElementById("b4").disabled = true;
//         document.getElementById("b5").disabled = true;
//         document.getElementById("b6").disabled = true;
//         window.alert('Player X won');
//     }
//     else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
//         b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
//         document.getElementById('print')
//             .innerHTML = "Player X won";
//         document.getElementById("b1").disabled = true;
//         document.getElementById("b2").disabled = true;
//         document.getElementById("b4").disabled = true;
//         document.getElementById("b5").disabled = true;
//         document.getElementById("b7").disabled = true;
//         document.getElementById("b8").disabled = true;
//         window.alert('Player X won');
//     }
//     else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
//         b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
//         document.getElementById('print')
//             .innerHTML = "Player X won";
//         document.getElementById("b2").disabled = true;
//         document.getElementById("b3").disabled = true;
//         document.getElementById("b4").disabled = true;
//         document.getElementById("b6").disabled = true;
//         document.getElementById("b7").disabled = true;
//         document.getElementById("b8").disabled = true;
//         window.alert('Player X won');
//     }
//     else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
//         b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
//         document.getElementById('print')
//             .innerHTML = "Player X won";
//         document.getElementById("b1").disabled = true;
//         document.getElementById("b2").disabled = true;
//         document.getElementById("b4").disabled = true;
//         document.getElementById("b6").disabled = true;
//         document.getElementById("b8").disabled = true;
//         document.getElementById("b9").disabled = true;
//         window.alert('Player X won');
//     }
//     else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
//         b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
//         document.getElementById('print')
//             .innerHTML = "Player X won";
//         document.getElementById("b1").disabled = true;
//         document.getElementById("b3").disabled = true;
//         document.getElementById("b4").disabled = true;
//         document.getElementById("b6").disabled = true;
//         document.getElementById("b7").disabled = true;
//         document.getElementById("b9").disabled = true;
//         window.alert('Player X won');
//     }
//     else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
//         b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
//         document.getElementById('print')
//             .innerHTML = "Player X won";
//         document.getElementById("b1").disabled = true;
//         document.getElementById("b2").disabled = true;
//         document.getElementById("b3").disabled = true;
//         document.getElementById("b7").disabled = true;
//         document.getElementById("b8").disabled = true;
//         document.getElementById("b9").disabled = true;
//         window.alert('Player X won');
//     }

//     // Checking of Player X finish
//     // Checking for Player 0 starts, Is player 0 won or
//     // not and after that disabled all the other fields
//     else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
//         b2 == '0') && (b3 == '0' || b3 == '0')) {
//         document.getElementById('print')
//             .innerHTML = "Player 0 won";
//         document.getElementById("b4").disabled = true;
//         document.getElementById("b5").disabled = true;
//         document.getElementById("b6").disabled = true;
//         document.getElementById("b7").disabled = true;
//         document.getElementById("b8").disabled = true;
//         document.getElementById("b9").disabled = true;
//         window.alert('Player 0 won');
//     }
//     else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
//         b4 == '0') && (b7 == '0' || b7 == '0')) {
//         document.getElementById('print')
//             .innerHTML = "Player 0 won";
//         document.getElementById("b2").disabled = true;
//         document.getElementById("b3").disabled = true;
//         document.getElementById("b5").disabled = true;
//         document.getElementById("b6").disabled = true;
//         document.getElementById("b8").disabled = true;
//         document.getElementById("b9").disabled = true;
//         window.alert('Player 0 won');
//     }
//     else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
//         b8 == '0') && (b9 == '0' || b9 == '0')) {
//         document.getElementById('print')
//             .innerHTML = "Player 0 won";
//         document.getElementById("b1").disabled = true;
//         document.getElementById("b2").disabled = true;
//         document.getElementById("b3").disabled = true;
//         document.getElementById("b4").disabled = true;
//         document.getElementById("b5").disabled = true;
//         document.getElementById("b6").disabled = true;
//         window.alert('Player 0 won');
//     }
//     else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
//         b6 == '0') && (b9 == '0' || b9 == '0')) {
//         document.getElementById('print')
//             .innerHTML = "Player 0 won";
//         document.getElementById("b1").disabled = true;
//         document.getElementById("b2").disabled = true;
//         document.getElementById("b4").disabled = true;
//         document.getElementById("b5").disabled = true;
//         document.getElementById("b7").disabled = true;
//         document.getElementById("b8").disabled = true;
//         window.alert('Player 0 won');
//     }
//     else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
//         b5 == '0') && (b9 == '0' || b9 == '0')) {
//         document.getElementById('print')
//             .innerHTML = "Player 0 won";
//         document.getElementById("b2").disabled = true;
//         document.getElementById("b3").disabled = true;
//         document.getElementById("b4").disabled = true;
//         document.getElementById("b6").disabled = true;
//         document.getElementById("b7").disabled = true;
//         document.getElementById("b8").disabled = true;
//         window.alert('Player 0 won');
//     }
//     else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
//         b5 == '0') && (b7 == '0' || b7 == '0')) {
//         document.getElementById('print')
//             .innerHTML = "Player 0 won";
//         document.getElementById("b1").disabled = true;
//         document.getElementById("b2").disabled = true;
//         document.getElementById("b4").disabled = true;
//         document.getElementById("b6").disabled = true;
//         document.getElementById("b8").disabled = true;
//         document.getElementById("b9").disabled = true;
//         window.alert('Player 0 won');
//     }
//     else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
//         b5 == '0') && (b8 == '0' || b8 == '0')) {
//         document.getElementById('print')
//             .innerHTML = "Player 0 won";
//         document.getElementById("b1").disabled = true;
//         document.getElementById("b3").disabled = true;
//         document.getElementById("b4").disabled = true;
//         document.getElementById("b6").disabled = true;
//         document.getElementById("b7").disabled = true;
//         document.getElementById("b9").disabled = true;
//         window.alert('Player 0 won');
//     }
//     else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
//         b5 == '0') && (b6 == '0' || b6 == '0')) {
//         document.getElementById('print')
//             .innerHTML = "Player 0 won";
//         document.getElementById("b1").disabled = true;
//         document.getElementById("b2").disabled = true;
//         document.getElementById("b3").disabled = true;
//         document.getElementById("b7").disabled = true;
//         document.getElementById("b8").disabled = true;
//         document.getElementById("b9").disabled = true;
//         window.alert('Player 0 won');
//     }

//     // Checking of Player 0 finish
//     // Here, Checking about Tie
//     else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
//         || b2 == '0') && (b3 == 'X' || b3 == '0') &&
//         (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
//             b5 == '0') && (b6 == 'X' || b6 == '0') &&
//         (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
//             b8 == '0') && (b9 == 'X' || b9 == '0')) {
//         document.getElementById('print')
//             .innerHTML = "Match Tie";
//         window.alert('Match Tie');
//     }
//     else {

//         // Here, Printing Result
//         if (flag == 1) {
//             document.getElementById('print')
//                 .innerHTML = "Player X Turn";
//         }
//         else {
//             document.getElementById('print')
//                 .innerHTML = "Player 0 Turn";
//         }
//     }
// }

// // Function to reset game
// function myfunc_2() {
//     location.reload();
//     document.getElementById('b1').value = '';
//     document.getElementById("b2").value = '';
//     document.getElementById("b3").value = '';
//     document.getElementById("b4").value = '';
//     document.getElementById("b5").value = '';
//     document.getElementById("b6").value = '';
//     document.getElementById("b7").value = '';
//     document.getElementById("b8").value = '';
//     document.getElementById("b9").value = '';

// }

// // Here onwards, functions check turn of the player
// // and put accordingly value X or 0
// flag = 1;
// function myfunc_3() {
//     if (flag == 1) {
//         document.getElementById("b1").value = "X";
//         document.getElementById("b1").disabled = true;
//         flag = 0;
//     }
//     else {
//         document.getElementById("b1").value = "0";
//         document.getElementById("b1").disabled = true;
//         flag = 1;
//     }
// }

// function myfunc_4() {
//     if (flag == 1) {
//         document.getElementById("b2").value = "X";
//         document.getElementById("b2").disabled = true;
//         flag = 0;
//     }
//     else {
//         document.getElementById("b2").value = "0";
//         document.getElementById("b2").disabled = true;
//         flag = 1;
//     }
// }

// function myfunc_5() {
//     if (flag == 1) {
//         document.getElementById("b3").value = "X";
//         document.getElementById("b3").disabled = true;
//         flag = 0;
//     }
//     else {
//         document.getElementById("b3").value = "0";
//         document.getElementById("b3").disabled = true;
//         flag = 1;
//     }
// }

// function myfunc_6() {
//     if (flag == 1) {
//         document.getElementById("b4").value = "X";
//         document.getElementById("b4").disabled = true;
//         flag = 0;
//     }
//     else {
//         document.getElementById("b4").value = "0";
//         document.getElementById("b4").disabled = true;
//         flag = 1;
//     }
// }

// function myfunc_7() {
//     if (flag == 1) {
//         document.getElementById("b5").value = "X";
//         document.getElementById("b5").disabled = true;
//         flag = 0;
//     }
//     else {
//         document.getElementById("b5").value = "0";
//         document.getElementById("b5").disabled = true;
//         flag = 1;
//     }
// }

// function myfunc_8() {
//     if (flag == 1) {
//         document.getElementById("b6").value = "X";
//         document.getElementById("b6").disabled = true;
//         flag = 0;
//     }
//     else {
//         document.getElementById("b6").value = "0";
//         document.getElementById("b6").disabled = true;
//         flag = 1;
//     }
// }

// function myfunc_9() {
//     if (flag == 1) {
//         document.getElementById("b7").value = "X";
//         document.getElementById("b7").disabled = true;
//         flag = 0;
//     }
//     else {
//         document.getElementById("b7").value = "0";
//         document.getElementById("b7").disabled = true;
//         flag = 1;
//     }
// }

// function myfunc_10() {
//     if (flag == 1) {
//         document.getElementById("b8").value = "X";
//         document.getElementById("b8").disabled = true;
//         flag = 0;
//     }
//     else {
//         document.getElementById("b8").value = "0";
//         document.getElementById("b8").disabled = true;
//         flag = 1;
//     }
// }

// function myfunc_11() {
//     if (flag == 1) {
//         document.getElementById("b9").value = "X";
//         document.getElementById("b9").disabled = true;
//         flag = 0;
//     }
//     else {
//         document.getElementById("b9").value = "0";
//         document.getElementById("b9").disabled = true;
//         flag = 1;
//     }
// }





// var b1, b2, b3, b4, b5, b6, b7, b8, b9;
// b1 = document.getElementById("b1").value;
// b2 = document.getElementById("b2").value;
// b3 = document.getElementById("b3").value;
// b4 = document.getElementById("b4").value;
// b5 = document.getElementById("b5").value;
// b6 = document.getElementById("b6").value;
// b7 = document.getElementById("b7").value;
// b8 = document.getElementById("b8").value;
// b9 = document.getElementById("b9").value;


// function myfunc_1() {
//     document.getElementById("b1").value = "X";
//     document.getElementById("b1").disabled = true;
// }
// function myfunc_2() {
//     document.getElementById("b2").value = "X";
//     document.getElementById("b2").disabled = true;
// }
// function myfunc_3() {
//     document.getElementById("b3").value = "X";
//     document.getElementById("b3").disabled = true;
// }
// function myfunc_4() {
//     document.getElementById("b4").value = "X";
//     document.getElementById("b4").disabled = true;
// }
// function myfunc_5() {
//     document.getElementById("b5").value = "X";
//     document.getElementById("b5").disabled = true;
// }
// function myfunc_6() {
//     document.getElementById("b6").value = "X";
//     document.getElementById("b6").disabled = true;
// }
// function myfunc_7() {
//     document.getElementById("b7").value = "X";
//     document.getElementById("b7").disabled = true;
// }
// function myfunc_8() {
//     document.getElementById("b8").value = "X";
//     document.getElementById("b8").disabled = true;
// }
// function myfunc_9() {
//     document.getElementById("b9").value = "X";
//     document.getElementById("b9").disabled = true;
// }

// fu



// var origBoard;
// const huPlayer = 'X';
// const aiPlayer = 'O';
// const tracking = [0, 1, 2, 3, 4, 5, 6, 7, 8]
// const winlist = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],

// ]

// const cells = document.querySelectorAll('.cell');
// const X = "X";
// const O = "O";
// let next = true;
// cells.forEach(cell => {
//     cell.onclick = () => {

//         let player = next ? X : O;
//         cell.classList.add("disabled");
//         cell.innerHTML = player;
//         swap();
//     }
// })

// function swap() {
//     next = !next;
// }












// startGame();






// function startGame() {
//     origBoard = Array.from(Array(9).keys())
//     console.log(origBoard)
//     for (var i = 0; i < cells.length; i++) {
//         cells[i].innerText = '';
//         cells[i].style.removeProperty('background-color');
//         cells[i].addEventListener('click', turnClick, false);


//     }
// }

// function turnClick(square) {
//     console.log(square.target.id);
//     turn(square.target.id, huPlayer)
// }
// function turn(squareId, player) {
//     origBoard[squareId] = player;
//     document.getElementById(squareId).innerText = player


// }

// function check() {
//     for (const condition of winlist) {
//         let [a, b, c] = condition;
//         if (squareId[a] && (squareId[a] == squareId[b] && squareId[a] == squareId[c])) {
//             return [a, b, c];
//         }
//     }
// }

// function checkTie() {
//     if (emptySquares().length == 0) {
//         for (var i = 0; i < cells.length; i++) {
//             cells[i].style.backgroundColor = "green";
//             cells[i].removeEventListener('click', turnClick, false);
//         }
//         declareWinner("Tie Game!")
//         return true;
//     }
//     return false;
// }
// function emptySquares() {
//     return origBoard.filter(s => Math.random('number'));
// }

// function bestSpot(id) {
//     let a = origBoard
//     return emptySquares()[];
// }

// function checkWin(board, player) {
//     let plays = board.reduce((a, e, i) =>
//         (e === player) ? a.concat(i) : a, []);
//     let gameWon = null;
//     for (let [index, win] of winlist.entries()) {
//         if (win.every(elem => plays.indexOf(elem) > -1)) {
//             gameWon = { index: index, player: player };
//             break;
//         }
//     }
//     return gameWon;
// }


// function gameOver(gameWon) {
//     for (let index of winlist[gameWon.index]) {
//         document.getElementById(index).style.backgroundColor =
//             gameWon.player == huPlayer ? "blue" : "red";
//     }
//     for (var i = 0; i < cells.length; i++) {
//         cells[i].removeEventListener('click', turnClick, false);
//     }
//     declareWinner(gameWon.player == huPlayer ? "You win!" : "You lose.");
// }

// function declareWinner(who) {
//     document.querySelector(".endgame").style.display = "block";
//     document.querySelector(".endgame .text").innerText = who;
// }

// function emptySquares() {
//     return origBoard.filter(s => Math.random('number'));
// }

// function bestSpot(id) {
//     return emptySquares()[];
// }

// function checkTie() {
//     if (emptySquares().length == 0) {
//         for (var i = 0; i < cells.length; i++) {
//             cells[i].style.backgroundColor = "green";
//             cells[i].removeEventListener('click', turnClick, false);
//         }
//         declareWinner("Tie Game!")
//         return true;
//     }
//     return false;
// }





// const random = Math.floor(Math.random() * tracking.length);
// const computerindex = tracking[random];
// let c0 = document.getElementsByClassName('.c0')
// let c1 = document.getElementsByClassName('.c1').value
// let c2 = document.getElementsByClassName('.c2').value
// let c3 = document.getElementsByClassName('.c3').value
// let c4 = document.getElementsByClassName('.c4').value
// let c5 = document.getElementsByClassName('.c5').value
// let c6 = document.getElementsByClassName('.c6').value
// let c7 = document.getElementsByClassName('.c7').value
// let c8 = document.getElementsByClassName('.c8').value

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


// function checks() {
//     var x = Math.floor(Math.random() * boardspace.length);
//     console.log(x)
//     console.log(boardspace)

//     let aichoose = boardspace[x];
//     aichoose.innerHTML = ai;

// }
// checks();
// checkwinner();
// function main(btn) {

//     // changePlayer(btn)
// checkwinner()
// }

// function checkwinner() {
//     let roundwon = false;
//     for (let i = 0; i <= 7; i++) {
//         const winboard = winlist[i];
//         let a = [winboard[0], winboard[1], winboard[2]];


//         console.log(a)

//     }
// }


////////////////////////////////
// function handleCellClick(clickedCellEvent) {
//     const clickedCell = clickedCellEvent.target;
//     const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

//     if (boardspace[clickedCellIndex] !== "" || !gameActive) {
//         return;
//     }

//     handleCellPlayed(clickedCell, clickedCellIndex);
//     checkwinner();
// }











// function checkhorizontal() {
//     if (result(board[0], board[1], board[2], human)) {
//         console.log("won")

//     } else if (result(board[3], board[4], board[5], human)) { console.log("won") }

//     else if (result(board[6], board[7], board[8], human)) { console.log("won") }
// };

// function result(a) {
//     const results = a.every(element => {
//         if (element === a[0]) { return true }
//     })
//     return results;
// }
// function changePlayer(btn) {
//     if (currentplayer == "X") {
//         currentplayer = "O";
//     }
//     else {
//         currentplayer = "X";
//     }
// }

// checkhorizontal();

// function checkhorizontal() {
//     if (result(board[0], board[1], board[2], currentplayer)) {
//         console.log("won")

//     } else if (result(board[3], board[4], board[5], currentplayer)) { console.log("won") }

//     else if (result(board[6], board[7], board[8], currentplayer)) { console.log("won") }
// };
// function checkvertical() { };
// function checkdiagonal() { };

// function result(a) {
//     const results = a.every(element => {
//         if (element === a[0]) { return true }
//     })
//     return true;
// }