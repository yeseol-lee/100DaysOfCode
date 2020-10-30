//wordList를 글로벌 배열으로 만들어서 수정한 것이 글로벌에 저장될 수 있도록.

//receive file from html and display
document.getElementById("input-file").addEventListener("change", handleFiles);

//remove selected word from the most list
document.getElementById("most-button").addEventListener("click", function () {
    rmFromList("most-input");
});

//remove selected word from the least list
document.getElementById("least-button").addEventListener("click", function () {
    rmFromList("least-input");
});


var stopWords = [];
var wordList = [];

function handleFiles(event) {
    let text;
    const content = document.getElementById("content");


    //read file and save to variable text to string.
    var fr = new FileReader();
    fr.onload = function (e) {

        text = e.target.result;

        //remove line breaks and carriage returns and replace with a <br>
        text = text.replace(/(?:\r\n|\r|\n)/g, '<br>');
        write(text);

        getDocStats(text);
    }
    fr.readAsText(event.target.files[0]);

}

//function write text into content div.
function write(string) {
    content.innerHTML = string;
}


//search the Doc Stats 아직 수정덜됨
function getDocStats(fileContent) {

    var docLength = document.getElementById("docLength");
    var wordCount = document.getElementById("wordCount");
    var charCount = document.getElementById("charCount");

    let lowerText = fileContent.toLowerCase();
    let wordArray = lowerText.match(/\b\S+\b/g);
    let wordDictionary = {};

    //write length, wordcound, charcount
    getBasicDocStats(fileContent, wordArray);

    //Count every word in the wordArray
    for (let word in wordArray) {
        let wordValue = wordArray[word];
        if (wordDictionary[wordValue] > 0) {
            wordDictionary[wordValue] += 1;
        } else {
            wordDictionary[wordValue] = 1;
        }
    }

    //sort the array
    let wordList = sortProperties(wordDictionary);

    //get top 10 and least 5 words
    let top10 = wordList.slice(0, 10);
    let least10 = wordList.slice(-10, length.wordList);


    //Write the values to the page
    ULTemplate(top10, document.getElementById("mostUsed"));
    ULTemplate(least10, document.getElementById("leastUsed"));



}

//make list template
function ULTemplate(items, element) {
    let rowTemplate = document.getElementById('template-ul-items');
    let templateHTML = rowTemplate.innerHTML;
    let resultsHTML = "";

    for (i = 0; i < items.length - 1; i++) {
        resultsHTML += templateHTML.replace('{{val}}', items[i][0] + " : " + items[i][1] + " time(s)");
    }

    element.innerHTML = resultsHTML;

}

function getBasicDocStats(text, wordArray) {

    docLength.innerText = "Document Length(including spaces) : " + text.length;
    wordCount.innerText = "Word Count: " + wordArray.length;

    //remove spaces from text string
    text = text.replace(/ /g, "");

    charCount.innerText = "Number of Characters(without spaces) : " + text.length;
}

//sort object in order of number
function sortProperties(obj) {
    //first convert the object to an array
    let rtnArray = Object.entries(obj);

    //Sort the array
    rtnArray.sort(function (first, second) {
        return second[1] - first[1];
    });

    return rtnArray;
}

function rmFromList(inputID) {

    //stopWords array
    renewStopWord(inputID);

}


//renew stopWord array
function renewStopWord(inputID) {

    let word = document.getElementById(inputID).value;
    document.getElementById(inputID).value = "";

    stopWords.push(word);
}
