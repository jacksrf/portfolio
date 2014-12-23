// $(document).ready(function(){
//   $('#developeHolder').hide();
//   $('#designHolder').hide();
//   $('#innovateHolder').hide();
//   $('#link1').click(function(){
//     $('#middle').ScrollTo(function(){
//       $('#developeHolder').fadeIn(2000, function(){
//         $('#designHolder').fadeIn(2000,function(){
//           $('#innovateHolder').fadeIn(2000);
//           });
//         });
//     });
//   })
// })

$(document).ready(function(){
    $('#name').fadeIn(3000).animate({letterSpacing: '35px'},2000, function(){
      $('#one').fadeIn(1000, function(){
        $('#two').fadeIn(1000,function(){
          $('#three').fadeIn(1000);
          });
        });
    });
});

// $("#aboutMe").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#elementtoScrollToID").offset().top
//     }, 2000);
// });

// $('#link1').click(function(){
//   $('#middle').ScrollTo(function(){
//     $('#developeHolder').fadeIn(2000, function(){
//       $('#designHolder').fadeIn(2000,function(){
//         $('#innovateHolder').fadeIn(2000);
//         });
//       });
//   });
// })
