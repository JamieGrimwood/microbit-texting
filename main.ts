input.onButtonPressed(Button.A, function () {
    if (radioFreq = 0) { //If the radio frequency has not been set
        radioFreqOption = radioFreqOption + 1
        return basic.showNumber(radioFreqOption)
    }
    if (!(letter)) {
        letter = alphabet[0]
        basic.showString(letter)
    } else {
        number = alphabet.indexOf(letter)
        letter = alphabet[number + 1]
        basic.showString(letter)
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    if (radioFreq = 0) { //If the radio frequency has not been set
        radioFreq = radioFreqOption
        radio.setGroup(radioFreq)
        return basic.showString("Set radio freq to: " + radioFreq.toString())
    }
    radio.sendString(letter)
    basic.pause(100)
    basic.clearScreen()
    letter = ""
})
let number = 0
let letter = ""
let alphabet: string[] = []
alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
]
let radioFreq = 0
let radioFreqOption = 0