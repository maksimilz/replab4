document.addEventListener("DOMContentLoaded", function() {
    ymaps.ready(init);
    function init() {
        var myMap = new ymaps.Map("map", {
            center: [43.115143, 131.885341],
            zoom: 16
        });
        var myPlacemark = new ymaps.Placemark([43.115143, 131.885341], {
            hintContent: 'Premier Basic Professional'
        });
        myMap.geoObjects.add(myPlacemark);
    }

    var modal = document.getElementById("callback-modal");
    var btn = document.getElementById("callback-btn");
    var contactUsText = document.getElementById("contact-us-text");
    var span = document.getElementsByClassName("close-btn")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    contactUsText.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
