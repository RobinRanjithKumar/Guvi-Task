// Access the display element
const display = document.getElementById('display');

// Callback hell pattern for countdown
setTimeout(function() {
    display.innerText = "10";
    setTimeout(function() {
        display.innerText = "9";
        setTimeout(function() {
            display.innerText = "8";
            setTimeout(function() {
                display.innerText = "7";
                setTimeout(function() {
                    display.innerText = "6";
                    setTimeout(function() {
                        display.innerText = "5";
                        setTimeout(function() {
                            display.innerText = "4";
                            setTimeout(function() {
                                display.innerText = "3";
                                setTimeout(function() {
                                    display.innerText = "2";
                                    setTimeout(function() {
                                        display.innerText = "1";
                                        setTimeout(function() {
                                            display.innerText = "Happy Independence Day!";
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);






















