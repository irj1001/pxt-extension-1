namespace leds {
    //% block
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



}
