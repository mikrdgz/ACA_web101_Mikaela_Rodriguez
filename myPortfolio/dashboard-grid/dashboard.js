window.onload = function() {

    let x = document.getElementById('geo');

   navigator.geolocation.getCurrentPosition(showPosition);
    function showPosition(position) {
        x.innerHTML = "<strong> Your latitude: </strong>" + position.coords.latitude + 
        "<br><strong>Your longitude: </strong>" + position.coords.longitude; 
      }

    }

const helloFunction = () => console.log('hi')




