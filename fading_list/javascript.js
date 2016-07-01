(function fadingList(){
  console.log('connected!');
  // Dom Caching
  var ticker = document.querySelectorAll('#ticker li');
  var ul = document.getElementById('ticker');

  // Initial a counter
  var inc = 0;

  // IIFE function with setTimeout
  var isPaused = false;

  // Remove active_class
  function removeClass () {
    for (i = 0; i < ticker.length; ++i) {
      ticker[i].classList.remove('active_class');
    }
  }

  // Add active_class
  function counting() {
    if(!isPaused){
    removeClass();
      for (var i = 1; i < ticker.length; i++) {
        if(inc < ticker.length){
          ticker[ inc ].classList.add('active_class');
          inc++ ;
        } else {
          inc = 1;
          ticker[ inc - 1 ].classList.add('active_class');
        }
        return;
      }// for-loop End
    } // ifPaused End
  } // counting End

  // IIFE for active_class rotating
  (function loopingFunction() {
      counting();
      setTimeout(loopingFunction, 6000);
  }());

  // PAUSE on Mouse Over
  function onMouseOver(){
    isPaused = true;
    console.log('mouse over paused');
  }

  // Resume on Mouse Out
  function onMouseOut(){
    isPaused = false;
    console.log('mouse out unpaused');
  }

  // Event Listener (mouseover)
  ul.addEventListener('mouseover', onMouseOver);

  // Event Listener (mouseover)
  ul.addEventListener('mouseout', onMouseOut);
}())
