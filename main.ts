/*
basic.forever(function () {
    basic.showIcon(IconNames.Duck)
    input.onButtonPressed(Button.A, function () {
        if (input.buttonIsPressed(Button.B)) {
            basic.showString("Yes")
        }
        basic.showString("No")
    })
})
*/

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let letter = ""

radio.setGroup(69)

radio.onReceivedString(function(receivedString: string) {
    basic.showString(receivedString)
})

input.onButtonPressed(Button.A, function () {
    if (!letter) {
        letter = alphabet[0]
        basic.showString(letter)
    } else {
        let number = alphabet.indexOf(letter)
        letter = alphabet[number+1]
        basic.showString(letter)
    }
})

input.onButtonPressed(Button.B, function () {
    radio.sendString(letter)
    basic.pause(100)
    basic.clearScreen()
    letter = ""
})