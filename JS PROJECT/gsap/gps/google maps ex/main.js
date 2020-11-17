function initMap() {
    //point locations
    //kyoto station
    var kyoto = {
        lat: 34.9856287,
        lng: 135.7546622
    };
    
    //Arashi-yama
    var arashi = {
        
        lat: 35.0094534,
        lng: 135.664579
    };


    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 12,
            center: kyoto
        });

    new google.maps.Marker({

        position: kyoto,
        map: map,
        label: "kyoto station"
    });

    new google.maps.Marker({

        position: arashi,
        map: map,
        label: "Arashiyama"
    });

}


