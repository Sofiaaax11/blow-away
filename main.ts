let row = 0
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        if (input.soundLevel() == 128) {
            let col = 0
            row = randint(0, 4)
            row = 0
            if (led.point(col, row)) {
                led.unplot(col, row)
                led.plot(col + 1, row)
            }
        }
    }
})
