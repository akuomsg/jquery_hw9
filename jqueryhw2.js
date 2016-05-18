$(document).ready(function(){
    $("#button-1").click(function(){
        $('#field-1').val('');
    });

    $("#button-2").click(function(){
        $('#field-2').val('');
    });

    $("#button-3").click(function(){
        $('#display').empty();
    });

    $("#animateHeader").click(function(){
      $("#header").animate({
                  left: '250px',
                  height: '+=150px',
                  width: '+=150px'
              }, function(){
                          $("#header").animate({
                  left: '0px',
                  height: '-=150px',
                  width: '-=150px'
              });

             });
    });

});
