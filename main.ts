/**
 * 1 = KAMEN
 * 
 * 2 = NUZKY
 * 
 * 3 = PAPIR
 */
input.onButtonPressed(Button.A, function () {
    basic.showString("P1")
    player1 = randint(1, 3)
    if (player1 == 1) {
        basic.showString("KAMEN")
    }
    if (player1 == 2) {
        basic.showString("NUZKY")
    }
    if (player1 == 3) {
        basic.showString("PAPIR")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("P2")
    player2 = randint(1, 3)
    if (player2 == 1) {
        basic.showString("KAMEN")
    }
    if (player2 == 2) {
        basic.showString("NUZKY")
    }
    if (player2 == 3) {
        basic.showString("PAPIR")
    }
    Generate()
})
function Generate () {
    if (player1 == 1 && player2 == 2) {
        basic.showString("P1 WIN")
    }
    if (player1 == 2 && player2 == 3) {
        basic.showString("P1 WIN")
    }
    if (player1 == 3 && player2 == 1) {
        basic.showString("P1 WIN")
    }
    if (player1 == player2) {
        basic.showString("DRAW")
    }
    basic.showString("P2 WIN")
}
let player2 = 0
let player1 = 0
player1 = 0
player2 = 0
