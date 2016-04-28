$(document).ready(function(){

  $('form').submit(function() {
    //console.log(new Date(), 'submit clicked');
    var first_name,
        last_name,
        description,
        card_html;

    first_name = jQuery.trim($('#first-name').val());
    last_name = jQuery.trim($('#last-name').val());
    description = jQuery.trim($('#description').val());

    //console.log('first_name', first_name, 'last_name', last_name, 'description', description);
    if( first_name == '' ||
        last_name == '' ||
        description == ''
        ){
      alert('you have to fill form.');
      //console.log('something is blank');
      return false;
    }

    card_html = '<li class="card panel panel-info" id="' + new Date().getTime() + '">' +
                    '<div class="card-name panel-heading">' + first_name + ' ' + last_name + '</div>' +
                    '<div class="card-description panel-heading">' + description + '</div>' +
                '</li>';

    $('#first-name').val('');
    $('#last-name').val('');
    $('#description').val('');


    //console.log(card_html);

    $('ul#cards').append(card_html);

    return false;
  });


  $(document).on('click','li .card-name', function () {
    //console.log('clicked name', $(this).serialize());
    $(this).hide();
    $(this).siblings('.card-description').show();
  })

  $(document).on('click','li .card-description', function () {
    //console.log('clicked description', $(this).serialize());
    $(this).hide();
    $(this).siblings('.card-name').show();
  })


});
