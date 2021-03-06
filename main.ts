enum Pattern {
    //% block="circle"
    Circle,
    //% block="X"
    X
}



//% groups="['LED Matrix', 'Other']"
namespace leds {
    //% block: "turns on and off the leds in an spiral form"
    //% group='LED Matrix'
    export function spiral_led() {
        for (let index = 0; index < 2; index++) {
            let i, l = 0, k = 0, n = 5, m = 5;
            while (k < m && l < n) {
                for (i = l; i < n; ++i) {
                    led.toggle(k, i)
                    pause(100)

                }
                k += 1
                for (i = k; i < m; ++i) {
                    led.toggle(i, n - 1)
                    pause(100)

                }
                n += -1
                // print the last row from the remaining rows
                if (k < m) {
                    for (i = n - 1; i >= l; --i) {
                        led.toggle(m - 1, i)
                        pause(100)
                    }
                    m += -1
                }
                // print the first column from the remaining columns
                if (l < n) {
                    for (i = m - 1; i >= k; --i) {
                        led.toggle(i, l)
                        pause(100)

                    }
                    l += 1
                }
            }
        }

    }


    //% block: "blink || %n|times in a  %pattern|pattern"
    //% group='LED Matrix'
    //% n.min=0 n.max=10
    export function blink(n: number, pattern: Pattern) {
        let j=0;
        for (j=0;j<n;++j){

            if(pattern==Pattern.X){
            basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)}
            if (pattern == Pattern.Circle){
            basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)


            }

            basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)

        }
    
    }

    //% block: "Returns a random number between 0 and 5"
    //% group='Other'
    export function randomNumber(): number {
        return Math.random()*5;
    }


}
