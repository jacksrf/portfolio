var videoSource = ['typing1.mp4','CoffeeCup.mp4']

var videoCount = videoSource.length;

function videoPlay(videoNum) {
  document.getElementById("bgvid").setAttribute("src",videoSource[videoNum]);
  document.getElementById("bgvid").load();
  document.getElementById("bgvid").play();
    }

document.getElementById('bgvid').addEventListener('ended',myHandler,false);
function myHandler() {
    i++;
      if(i == (videoCount-1)){
          i = 0;
          videoPlay(i);
          } else{
            videoPlay(i);
          }
       }
