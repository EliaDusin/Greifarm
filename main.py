def on_button_a():
    if led.point(2, 4):
        led.toggle(2, 4)
        led.toggle(1, 4)
    else:
        if led.point(3, 4):
            led.toggle(3, 4)
            led.toggle(2, 4)
        else:
            if led.point(1, 4):
                led.toggle(0, 4)
                led.toggle(1, 4)
            else:
                if led.point(4, 4):
                    led.toggle(4, 4)
                    led.toggle(3, 4)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_b():
    if led.point(1, 4):
        led.toggle(2, 4)
        led.toggle(1, 4)
    else:
        if led.point(2, 4):
            led.toggle(2, 4)
            led.toggle(3, 4)
        else:
            if led.point(0, 4):
                led.toggle(0, 4)
                led.toggle(1, 4)
            else:
                if led.point(3, 4):
                    led.toggle(3, 4)
                    led.toggle(4, 4)
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    """)