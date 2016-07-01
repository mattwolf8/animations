  (function twoBits(){
    // dom caching
    var box = document.getElementById('box');
    var message = document.getElementById('message');
    var title = document.getElementById('title');
    var ask = document.getElementById('ask');
    var coinHolder = document.getElementById('coin-holder');
    var quarterBack = document.getElementById('quarter-back');
    var quarterFront = document.getElementById('quarter-front');

    // onClick Initialized styles
    var initialStyles = function(){
      coinHolder.classList.add('active');
      coinHolder.style.animationPlayState= 'initial';
      quarterFront.classList.remove('final');
      quarterBack.classList.remove('final');
      ask.classList.remove('final');
      ask.innerHTML = 'spinning...';
    };

    // Randomizer Machine
    var randomizerMachine = function() {
      // Randomizer Variable
      var randomnumber = Math.floor(Math.random()*2);
      // Randomizer Function
      if (randomnumber === 0){
        landHeads();
      } else if (randomnumber === 1){
          landTails();
        }
      ask.classList.add('final');
    };

    // if Heads  |   0
    var landHeads = function(){
      quarterFront.classList.add('final');
      coinHolder.classList.remove('active');
      ask.innerHTML = 'Heads';
    };

    // if Tails  |  1
    var landTails = function(){
      quarterBack.classList.add('final');
      coinHolder.classList.remove('active');
      ask.innerHTML = 'Tails';
    };

    // Event on Click
    var runQuery =function(){
      initialStyles();
      setTimeout(randomizerMachine,2000);
    };

    // Event Handler
    box.addEventListener('click', runQuery);


  }());