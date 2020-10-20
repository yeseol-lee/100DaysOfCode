function findNemo(sentence) {

    var sliced = sentence.split(' ');
    var count = 1;

    var Nemois = sliced.some(function (slice) {
        if (slice === "Nemo") {
            console.log("I found Nemo at " + count + "!");

            return true;

        }
        count++;
    })

    if (Nemois === false) {

        console.log("I can't find Nemo :(");
    }
}
