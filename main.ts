radio.onReceivedNumber(function (receivedNumber) {
    serial.writeValue("# fente", receivedNumber)
    led.toggle(0, 0)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Go")
    basic.pause(100)
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    control.reset()
})
radio.setGroup(1)
basic.showIcon(IconNames.Yes)
