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

var menuClicks = 2;
var link2Clicks = 2;

$(document).ready(function(){
  if($(window).width() > 768){
    $('#name').fadeIn(1000).animate({
        letterSpacing: '35px'
      },2000, function(){
      $('#one').fadeIn(1000, function(){
        $('#two').fadeIn(1000,function(){
          $('#three').fadeIn(1000);
          });
        });
    });
  } else if($(window).width() < 320){
    $('#name').fadeIn(1000).animate({
        letterSpacing: '1px'
    },2000, function(){
      $('#one').fadeIn(1000, function(){
        $('#two').fadeIn(1000,function(){
          $('#three').fadeIn(1000);
          });
        });
    });
  } else {
    $('#name').fadeIn(1000).animate({
        letterSpacing: '10px'
    },2000, function(){
      $('#one').fadeIn(1000, function(){
        $('#two').fadeIn(1000,function(){
          $('#three').fadeIn(1000);
          });
        });
    });
  }
});

$(document).ready(function(){
  $('a#link1').click(function(){
    $('#middle').ScrollTo();
  })
})

// $(document).ready(function(){
//   $('#link2').click(function(){
//     $('#projects').ScrollTo();
//   })
// })

$(document).ready(function(){
  $('a#link3').click(function(){
    console.log("connect clicked")
    $('#connect').ScrollTo();
  })
})

$(document).ready(function(){
  $('#menuButton').click(function(){
    console.log("menu clicked");
    if (menuClicks % 2 === 0) {
      console.log("1")
      // $('#dropDown').css("visibility","visible")
      $('#dropDown').slideDown(1000)
    } else {
      console.log("2")
      // $('#dropDown').css("visibility","hidden")
      $('#dropDown').slideUp(1000)
      $('#projectLinks').slideUp(1000)
      if (link2Clicks % 2 !== 0) {
        $('#projectLinks').slideUp(100)
        $('#dropDown').removeClass('active')
        $('a#link1').removeClass('active')
        $('a#link3').removeClass('active2')
        $('a#link4').removeClass('active')
        $('a#link2').removeClass('active3')
        $('#dropDown').css('padding-top', '14px')
      }
      link2Clicks += 1;
      console.log("link2Clicks =" + link2Clicks)
    }
    menuClicks += 1;
    console.log("menuClicks =" + menuClicks)
  })
})

$(document).ready(function(){
  $('a#link2').click(function(){
    console.log("link2 clicked");
    if (link2Clicks % 2 === 0) {
      console.log("1")
      // $('#dropDown').css("visibility","visible")
      $('#dropDown').addClass('active')
      $('a#link1').addClass('active')
      $('a#link3').addClass('active2')
      $('a#link4').addClass('active')
      $('a#link2').addClass('active3')
      $('#dropDown').css('padding-top', '8px')
      $('#projectLinks').slideDown(1000)
    } else {
      console.log("2")
      // $('#dropDown').css("visibility","hidden")
      $('#projectLinks').slideUp(100)
      $('#dropDown').removeClass('active')
      $('a#link1').removeClass('active')
      $('a#link3').removeClass('active2')
      $('a#link4').removeClass('active')
      $('a#link2').removeClass('active3')
      $('#dropDown').css('padding-top', '14px')
    }
    link2Clicks += 1;
    console.log("link2Clicks =" + link2Clicks)
  })
})

$(document).ready(function(){
  $('a#biglink2').click(function(){
    console.log("link2 clicked");
    if (link2Clicks % 2 === 0) {
      console.log("1")
      // $('#dropDown').css("visibility","visible")
      $('a#biglink1').fadeTo(1000, .1)
      $('a#biglink3').fadeTo(1000, .1)
      $('a#biglink4').fadeTo(1000, .1)
      $('#bigprojectLinks').fadeIn(1000)
    } else {
      console.log("2")
      // $('#dropDown').css("visibility","hidden")
      $('#bigprojectLinks').fadeOut(1000)
      $('a#biglink1').fadeTo(1000, 1)
      $('a#biglink3').fadeTo(1000, 1)
      $('a#biglink4').fadeTo(1000, 1)
    }
    link2Clicks += 1;
    console.log("link2Clicks =" + link2Clicks)
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
