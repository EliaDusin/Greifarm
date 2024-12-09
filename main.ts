input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Arm.change(LedSpriteProperty.X, -1)
    basic.pause(100)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    for (let index = 0; index < 3; index++) {
        Arm.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    for (let index = 0; index < 3; index++) {
        Arm.change(LedSpriteProperty.Y, -1)
        basic.pause(500)
    }
    basic.pause(500)
    Stofftier.delete()
    Stofftier = game.createSprite(randint(0, 4), 4)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Arm.change(LedSpriteProperty.X, 1)
    basic.pause(100)
})
let Arm: game.LedSprite = null
let Stofftier: game.LedSprite = null
Stofftier = game.createSprite(randint(0, 4), 4)
Arm = game.createSprite(2, 0)
let Time = 0
basic.forever(function () {
    if (Arm.get(LedSpriteProperty.Y) == 3) {
        if (Arm.get(LedSpriteProperty.X) == Stofftier.get(LedSpriteProperty.X)) {
            if (randint(0, 20) == 0) {
                for (let index = 0; index < 4; index++) {
                    basic.pause(500)
                    Stofftier.change(LedSpriteProperty.Y, -1)
                }
                basic.pause(500)
                Arm.delete()
                Stofftier.delete()
                basic.showString("Congratulations!")
            }
        }
    }
    basic.pause(1000)
})
basic.forever(function () {
    for (let index = 0; index < 30; index++) {
        basic.pause(1000)
        Time += 1
    }
    Arm.delete()
    Stofftier.delete()
    basic.showString("Time´s up!")
})
