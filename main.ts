function startLoading () {
    basic.showLeds(`
        # . # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(50)
    basic.showLeds(`
        . # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # #
        . . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # #
        # . . . #
        . . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        . . . . #
        # # # # #
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        . # # # #
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # . # # #
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # . # #
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # . #
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # .
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . .
        # # # # #
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . .
        # . . . #
        # # # # #
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # #
        # . . . .
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # .
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # . #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(50)
    basic.showLeds(`
        # # . # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(50)
}
input.onButtonPressed(Button.A, function () {
    if (radioFreq == 0) {
        // If the radio frequency has not been set
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
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber === 1234) {
        if (users ^2 || users === 2) {
            radio.setGroup(0)
            radioFreq = 0
            radioFreqOption = 0
            users = 0
            return basic.showString("Freq full")
        } else {
            users+1
        }
    }
    if (receivedNumber === 123) radio.sendNumber(1234)
})
input.onButtonPressed(Button.B, function () {
    if (radioFreq == 0) {
        // If the radio frequency has not been set
        startLoading()
        radioFreq = radioFreqOption
        radio.setGroup(radioFreq)
        radio.sendNumber(123)
        return basic.showString("Set freq to: " + radioFreq.toString())
    }
    radio.sendString(letter)
    basic.pause(100)
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.clearScreen()
    letter = ""
})
let number = 0
let users = 0
let letter = ""
let alphabet: string[] = []
let radioFreq = 0
let radioFreqOption = 0
basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
basic.pause(1000)
basic.showString("Select Freq")
basic.pause(1000)
basic.showLeds(`
    . . # . .
    . . . # .
    # # # # #
    . . . # .
    . . # . .
    `)
basic.pause(1000)
basic.showString("Enter")
basic.pause(1000)
basic.clearScreen()
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
