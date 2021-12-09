document.getElementById('card').addEventListener("mousemove", function(e) {
    var $card = $(card)
    var $style = $(".hover");
    var left = e.offsetX;
    var top = e.offsetY;
    var h = $card.height();
    var w = $card.width();
    var leftpos = Math.abs(Math.floor(100 / w * left)-100);
    var toppos = Math.abs(Math.floor(100 / h * top)-100);
    var bg = `background-position: ${leftpos}% ${toppos}%;`
    var style = `.card.active:before { ${bg} }`
    card.classList.remove("active");
    card.classList.add("active");
    $style.html(style);
  })
    
  document.getElementById('card').onmouseout = function(){
    document.getElementById('card').classList.remove("active");
  };
  
  
  var hasAccel = false
  var shineX = 0
  var shineY = 0
  if (window.DeviceMotionEvent !== undefined) {
      hasAccel = true
  }
  window.addEventListener("devicemotion", function(event) {
    var $style = $(".hover");
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission()
          .then(permissionState => {
            if (permissionState === 'granted') {
              window.addEventListener('devicemotion', () => {});
            }
          })
          .catch(console.error);
    } else {
      // handle regular non iOS 13+ device
      console.log("asfhua")
      // var $card = $(this);
      var card = document.getElementById("card")
      console.log("card", card)
      var h = card.style.height;
      var w = card.style.width;
      console.log("h", h)
      console.log("w", w)
      var left = event.accelerationIncludingGravity.x * 10;
      var top = event.accelerationIncludingGravity.y * 10;
      console.log("left", left)
      console.log("top", top)
      var leftpos = w*(left/100)
      var toppos = h*(top/100)
      console.log("leftOffset", leftpos)
      console.log("topOffset", toppos)
      var bg = `background-position: ${leftpos}% ${toppos}%;`
      // var style = `.card.active:before { ${bg} }`
    }
  }, true);