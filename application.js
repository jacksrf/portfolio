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

$(document).ready(function(){
  $('#link1').click(function(){
    $('#middle').ScrollTo();
  })
})

$(document).ready(function(){
  $('#link2').click(function(){
    $('#projects').ScrollTo();
  })
})

$(document).ready(function(){
  $('#link3').click(function(){
    $('#connect').ScrollTo();
  })
})

$(document).ready(function() {
// Tooltip only Text
$('.masterTooltip').hover(function(){
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
        .text(title)
        .appendTo('body')
        .fadeIn(10000);
}, function() {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
}).mousemove(function(e) {
        var mousex = e.pageX + 20; //Get X coordinates
        var mousey = e.pageY + 10; //Get Y coordinates
        $('.tooltip')
        .css({ top: mousey, left: mousex })
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
