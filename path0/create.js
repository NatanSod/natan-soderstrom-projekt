var currentStep = 0,
  animateStep = 1;

var x = wid / 2,
  y = hig / 2;
var image = 1,
  turn = 2;
var begin = 0;
var bobo;
var wid = 864,
  hig = 648;
var canvas = document.getElementById("canvas");
var a = 0,
  b = 0,
  c = 0;
var color = "",
  tint = "",
  hasColor = 0,
  hasTint = 0;

function start() {
  canvas = document.getElementById("canvas");
  stage = 1;
  currentStep = 0;
  if (begin == 0) {
    begin = 1;
    bobo = setInterval(function () {
      if (stage == 1) {
        buttons1(0);
        currentStep++;
      } else if (stage == 2) {
        buttons1(1);
        if (currentStep < 100) {
          document.getElementById("ballwhite").style.filter =
            "opacity(" + currentStep + "%)";
        } else {
          document.getElementById("ballwhite").style.filter =
            "opacity(" + (200 - currentStep) + "%)";
          hasColor = 1;
        }
        moveTextBall(0);
        if (currentStep == 300) {
          nextPage();
        }
        currentStep++;
      } else if (stage == 3) {
        moveTextBall(1);
        buttons2(0);
        currentStep++;
      } else if (stage == 4) {
        buttons2(1);
        if (currentStep < 100) {
          document.getElementById("ballwhite").style.filter =
            "opacity(" + currentStep + "%)";
        } else {
          document.getElementById("ballwhite").style.filter =
            "opacity(" + (200 - currentStep) + "%)";
          hasTint = 1;
        }
        moveTextBall(0);
        if (currentStep == 300) {
          nextPage();
        }
        currentStep++;
      } else if (stage == 5) {
        moveTextBall(1);
        buttons3(0);
        currentStep++;
      } else if (stage == 6) {
        buttons3(1);
        moveBall();
        currentStep++;
      } else {
        canvas.style.backgroundColor = "#ffffff";
        if (currentStep > 100 && currentStep <= 200) {
          var buttonbegin = document.getElementById("buttonbegin");
          buttonbegin.style.left = "50%";
          buttonbegin.style.filter = "opacity(" + (currentStep - 100) + "%)";
        }
        if (currentStep == 200) {
          document.getElementById("buttonbegin").href = "../path" + path + "/P0.html";
        }
        currentStep++;
      }
      animate();
    }, 10);
  } else {
    begin = 0;
    clearInterval(bobo);
  }
}

var stage = 0;
function changeStage(toStage) {
  stage = toStage;
  currentStep = 0;
}

function moveTextBall(phace) {
  var textBall = document.getElementById("textholder");
  var rad;
  if (currentStep < 300 && phace == 0) {
    rad = Math.pow(currentStep - 300, 2) / 10 + hig / 4;
  } else if (currentStep < 300 && phace == 1) {
    rad = Math.pow(currentStep, 2) / 10 + hig / 4;
  }
  textBall.style.top = hig / 2 - rad + "px";
}

var part = 1,
  path = 0,
  page = 0;

var currentPage;
var pages = [
  [2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
function nextPage() {
  page++;
  if (page > 1 && pages[part - 1][path - 1] + 1 >= page) {
    document
      .getElementById(part + "-" + path + "-" + (page - 1))
      .classList.remove("visible");
  }
  if (pages[part - 1][path - 1] >= page) {
    document
      .getElementById(part + "-" + path + "-" + page)
      .classList.add("visible");
  } else if (pages[part - 1][path - 1] < page) {
    if (part == 1) {
      changeStage(3);
      page = 0;
      part = 2;
    } else {
      changeStage(5);
    }
  }
}

function pathTo(newPath) {
  if (part == 1 && stage == 1) {
    path = newPath;
  } else if (part == 2 && stage == 3) {
    path = path * 2 - 2 + newPath;
  }
}

function buttons1(phace) {
  var rad;
  if (currentStep < 100 && phace == 0) {
    var startb = document.getElementById("buttonstart");
    startb.style.top = Math.pow(currentStep, 2) / 10 + hig / 2 + "px";

    rad = Math.pow(currentStep - 100, 2) / 10 + 200;
  } else if (currentStep < 100 && phace == 1) {
    rad = Math.pow(currentStep, 2) / 10 + 200;
  }

  var green = document.getElementById("buttongreen");
  var blue = document.getElementById("buttonblue");
  var red = document.getElementById("buttonred");
  var yellow = document.getElementById("buttonyellow");
  var purple = document.getElementById("buttonpurple");

  green.style.top = -getCircleSinPos(5, 0, rad) + hig / 2 + "px";
  green.style.left = -getCircleCosPos(5, 0, rad) + wid / 2 + "px";
  blue.style.top = -getCircleSinPos(5, 1, rad) + hig / 2 + "px";
  blue.style.left = -getCircleCosPos(5, 1, rad) + wid / 2 + "px";
  red.style.top = -getCircleSinPos(5, 2, rad) + hig / 2 + "px";
  red.style.left = -getCircleCosPos(5, 2, rad) + wid / 2 + "px";
  yellow.style.top = -getCircleSinPos(5, 3, rad) + hig / 2 + "px";
  yellow.style.left = -getCircleCosPos(5, 3, rad) + wid / 2 + "px";
  purple.style.top = -getCircleSinPos(5, 4, rad) + hig / 2 + "px";
  purple.style.left = -getCircleCosPos(5, 4, rad) + wid / 2 + "px";
}

function buttons2(phace) {
  var special = document.getElementById("buttonspecial");
  var noone = document.getElementById("buttonnoone");
  var rad;

  if (currentStep < 100 && phace == 0) {
    rad = Math.pow(currentStep - 100, 2) / 10 + 200;
  } else if (currentStep < 100 && phace == 1) {
    rad = Math.pow(currentStep, 2) / 10 + 200;
  }
  special.style.top = -getCircleSinPos(2, 0.5, rad) + hig / 2 + "px";
  special.style.left = getCircleCosPos(2, 0.5, rad) + wid / 2 + "px";
  noone.style.top = -getCircleSinPos(2, 1.5, rad) + hig / 2 + "px";
  noone.style.left = getCircleCosPos(2, 1.5, rad) + wid / 2 + "px";
}

function buttons3(phace) {
  var create = document.getElementById("buttoncreate");
  var rad;

  if (currentStep < 100 && phace == 0) {
    rad = Math.pow(currentStep - 100, 2) / 10 + 200;
  } else if (currentStep < 100 && phace == 1) {
    rad = Math.pow(currentStep, 2) / 10 + 200;
  }
  create.style.top = rad + hig / 2 + "px";
  create.style.left = "50%";
}

function getCircleSinPos(segments, Nr, rad) {
  var result = Math.sin(((Math.PI * 2) / segments) * Nr + Math.PI / 2) * rad;
  return result;
}
function getCircleCosPos(segments, Nr, rad) {
  var result = Math.cos(((Math.PI * 2) / segments) * Nr + Math.PI / 2) * rad;
  return result;
}

function moveBall() {
  if (currentStep < 645) {
    if (c < 600) {
      c++;
    }

    b = Math.pow(currentStep, 2) / 2 / 16000;

    y = (Math.sin(b * Math.PI) * c) / 3 + hig / 2;
    x = (Math.cos(b * Math.PI) * c) / 3 + wid / 2;
  } else if (currentStep < 1000) {
    b = (Math.pow(currentStep, 2) - Math.pow(645, 2)) / 2 / 16000;
    y = (-b * c * Math.PI) / 3 + hig / 2;
    x = -c / 3 + wid / 2;
  } else if (currentStep == 1000 || (b * c * Math.PI) / 3 < hig / 2) {
    b = (Math.pow(currentStep, 2) - Math.pow(1000, 2)) / 2 / 16000;
    y = (b * c * Math.PI) / 3;
    x = wid / 2;
  } else {
    changeStage(7);
    y = -1000;
    x = -2000;
  }

  var theBall = document.getElementById("ball");
  theBall.style.left = x + "px";
  theBall.style.top = y + "px";
}

function animate() {
  var theBall = document.getElementById("ball");
  if (image == 3) {
    image = 1;

    if (turn == 5) {
      turn = 1;
    }

    theBall.classList.remove("r1");
    theBall.classList.remove("r2");
    theBall.classList.remove("r3");
    theBall.classList.remove("r4");
    theBall.classList.add("r" + turn);
    turn++;
  }
  if (hasColor == 0) {
    theBall.src = "../images/ball" + image + ".png";
  } else if (hasColor == 1 && hasTint == 0) {
    theBall.src = "../images/ball" + color + image + ".png";
  } else if (hasColor == 1 && hasTint == 1) {
    theBall.src = "../images/ball" + color + tint + image + ".png";
  }
  if (animateStep % 7 == 0) {
    image++;
  }
  animateStep++;
}

function makeColor(theColor) {
  color = theColor;
}

function makeTint(theTint) {
  tint = theTint;
}