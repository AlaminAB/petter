let play = document.querySelector(".play-button img")
let push = document.querySelector(".push-button img")
let video = document.querySelector("#myVideo");


play.addEventListener("click", function () {
  video.play();
  play.classList.add("d-none");
  push.classList.add("d-block");
});


push.addEventListener("click", function () {
  video.pause();
  push.classList.remove("d-block");
  play.classList.remove("d-none");
});

var $video = $('#myVideo');

$video.on('mouseover', show);
$video.on('mouseleave', hide);

function show() {
  $(this).attr('controls', '');
}

function hide() {
  var isPlaying = false;
  if (!$('#myVideo').get(0).paused) {
    isPlaying = true;
  }
  if (!isPlaying) {
    $(this).removeAttr('controls');
  }
}