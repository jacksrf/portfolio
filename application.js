$(document).ready(function(){
    $('#name').fadeIn(3000).animate({letterSpacing: '35px'},2000, function(){
      $('#one').fadeIn(1000, function(){
        $('#two').fadeIn(1000,function(){
          $('#three').fadeIn(1000);
          });
        });
    });
});
