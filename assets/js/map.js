//England Map//

//Locations//



//Inisialising Map//
//Obtained from google and Google Maps topic page//

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: {
            lat: 52.35551,
            lng: -1.17431
        }
    });

    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

    var locations = [{
        name: "London",
        lat: 51.50735,
        lng: -0.12775,
        descrption: "The capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city."
    }, {
        name: "Bath",
        lat: 51.38106,
        lng: -2.35901,
        descrption: "Bath is the largest city in the county of Somerset, England, known for and named after its Roman-built baths. In 2011, the population was 88,859. Bath is in the valley of the River Avon, 97 miles west of London and 11 miles southeast of Bristol. The city became a World Heritage site in 1987."
    }, {
        name: "Cornwall",
        lat: 50.26604,
        lng: -5.05271,
        descrption: "Cornwall is a county on England’s rugged southwestern tip. It forms a peninsula encompassing wild moorland and hundreds of sandy beaches, culminating at the promontory Land’s End. The south coast, dubbed the Cornish Riviera, is home to picturesque harbour villages such as Fowey and Falmouth. The north coast is lined with towering cliffs and seaside resorts like Newquay, known for surfing."

    }, {
        name: "York",
        lat: 53.95996,
        lng: -1.08729,
        descrption: "York is a walled city in northeast England that was founded by the ancient Romans. Its huge 13th-century Gothic cathedral, York Minster, has medieval stained glass and 2 functioning bell towers. The City Walls form a walkway on both sides of the River Ouse. The Monk Bar gate houses an exhibition tracing the life of 15th-century Plantagenet King Richard III."
    }, 



];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });

    
}