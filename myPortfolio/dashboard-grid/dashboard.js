

window.onload = function() {

  let x = document.getElementById('geo');

 navigator.geolocation.getCurrentPosition(showPosition);
  function showPosition(position) {
      x.innerHTML = "<strong> Your latitude: </strong>" + position.coords.latitude + 
      "<br><strong>Your longitude: </strong>" + position.coords.longitude; 
    }

  }

  $(document).ready(function(){

    let list = $('ol');
    let newListForm = $('#newListForm');
    
    $(newListForm).submit(function(event){
    let text = $('input[type=text]').val();
        event.preventDefault();
        $(list).append('<li>' + text + '</li>')
        });
    
        list.on('click', 'li', function() {
            let $this = $(this);
            console.log(this);
            $(this).remove();
          });
    
    });
    
    
      


