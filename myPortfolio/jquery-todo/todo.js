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