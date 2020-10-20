// =에서 바로 다른 연산자 눌렀을 때 버그있음

var screen = 0;

var sum = 0;

var rememberSign = undefined;

var is_first_typing = false;

//use if operator is clicked in succeession
var operator = false;

var number = document.getElementsByClassName("number");

var calc = document.getElementsByClassName("calc");

//print value of screen
function printscreen() {

    document.getElementById("outcome").innerHTML = screen;

}

// calculate depending on operator =-*/
function calcByOperator(operator) {

    switch (operator) {

        case 'plus':
            sum += screen;
            break;

        case 'minus':
            sum -= screen;
            break;

        case 'times':
            sum *= screen;
            sum = sum.toFixed(3);
            break;

        case 'divide':
            sum /= screen;
            sum = sum.toFixed(3);
            break;

    }
}


// if number is clicked
for (let i = 0; i < number.length; i++) {

    number[i].addEventListener("click", function () {

        if (is_first_typing) {

            screen = 0;
            is_first_typing = false;
        }

        let num = Number(number[i].value);
        screen = screen * 10 + num;
        printscreen();
        operator = false;


    });
}

// if operator + - * / is clicked
for (let i = 0; i < calc.length; i++) {

    calc[i].addEventListener("click", function () {

        //was the last click operator?
        if (operator == false) {

            //when first touched operator
            if (rememberSign == undefined) {

                rememberSign = calc[i].value;
                sum = screen;
                is_first_typing = true;
                operator = true;
                dot = false;
                //when sign valuable already has value
            } else {

                calcByOperator(rememberSign);
                screen = sum;

                printscreen();
                rememberSign = calc[i].value;

                is_first_typing = true;
                operator = true;
                dot = false;
            }

        } else {

            rememberSign = calc[i].value;

        }


    });
}

// if operator = is clicked
document.getElementById("equal").addEventListener("click", function () {

    calcByOperator(rememberSign);
    screen = sum;
    printscreen();
    is_first_typing = true;
    dot = false;

})

// if AC is clicked
document.getElementById("ac").addEventListener("click", function () {

    screen = 0;

    sum = 0;

    rememberSign = undefined;
    is_first_typing = false;
    printscreen();
    dot = false;
})

// if CE is clicked
document.getElementById("ce").addEventListener("click", function () {

    screen /= 10;
    screen = Math.floor(screen);
    printscreen();
    dot = false;
})
