document.getElementById("the-img").onclick = function() {

    EXIF.getData(this, function() {

        myData = this;

        console.log(myData.exifdata);
    });
}



alert("hello");