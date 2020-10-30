//95번째줄 인풋에 입력하면 스톱월드 배열로 추가하는거 하는중.

//receive file from html and display
document.getElementById("input-file").addEventListener("change", handleFiles);

//remove selected word from the most list
document.getElementById("most-button").addEventListener("click", rmFromList("most-input"));

//remove selected word from the least list
document.getElementById("least-button").addEventListener("click",rmFromList("least-input"));


var stopWords = [];

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
    
    console.log(wordList);



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
    
    renewStopWord(inputID);
    
}


//renew stopWord array
function renewStopWord(inputID) {
    
    let word = document.getElementById(inputID).value;
    
    console.log(word);
    //stopWords.push(word);
    //console.log(stopWords);
}