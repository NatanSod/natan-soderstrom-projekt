window.addEventListener("resize", doResize);

var buttonstart = document.getElementById("buttonstart"),
  green = document.getElementById("buttongreen"),
  blue = document.getElementById("buttonblue"),
  red = document.getElementById("buttonred"),
  yellow = document.getElementById("buttonyellow"),
  purple = document.getElementById("buttonpurple"),
  special = document.getElementById("buttonspecial"),
  noone = document.getElementById("buttonnoone"),
  create = document.getElementById("buttoncreate"),
  buttonbegin = document.getElementById("buttonbegin"),
  textHolder = document.getElementById("textholder");

buttonstart.addEventListener("click", start);

green.addEventListener("click", function () {
  change1("green", 1, 2);
});
blue.addEventListener("click", function () {
  change1("blue", 2, 2);
});
red.addEventListener("click", function () {
  change1("red", 3, 2);
});
yellow.addEventListener("click", function () {
  change1("yellow", 4, 2);
});
purple.addEventListener("click", function () {
  change1("purple", 5, 2);
});

function change1(color, path, stage) {
  makeColor(color);
  pathTo(path);
  changeStage(stage);
}

special.addEventListener("click", function () {
  change2('i', 2, 4);
});
noone.addEventListener("click", function () {
  change2('n', 1, 4);
});

function change2(tint, path, stage) {
  makeTint(tint); 
  pathTo(path); 
  changeStage(stage);
}

create.addEventListener("click", function () {
  changeStage(6);
})

textHolder.addEventListener("click", nextPage)

var currentStep = 0,
  animateStep = 1;

var x = wid / 2,
  y = hig / 2;
var image = 1,
  turn = 2;
var begin = 0;
var bobo;

var canvas = document.getElementById("canvas");
var container = document.getElementById("container");
var canvasContainer = document.getElementById("canvascontainer");
var wid = canvas.clientWidth,
  hig = canvas.clientHeight;

var a = 0,
  b = 0,
  c = 0;
var color = "",
  tint = "",
  hasColor = 0,
  hasTint = 0;

function doResize() {
  var scale, origin;
  scale = Math.min(container.clientWidth / wid, container.clientHeight / hig);
  if (scale > 1) {
    scale = 1;
  }
  canvas.style.transform = "translate(-50%, -0%) " + "scale(" + scale + ")";
  canvasContainer.style.height = 648 * scale + "px";
}

doResize();

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
        moveTextBox(0);
        if (currentStep == 1) {
          nextPage();
        }
        currentStep++;
      } else if (stage == 3) {
        moveTextBox(1);
        if (currentStep == 100) {
          document
            .getElementById(part + "-" + path + "-" + (page - 1))
            .classList.remove("visible");
          page = 0;
          part = 2;
        }
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
        moveTextBox(0);
        if (currentStep == 1) {
          nextPage();
        }
        currentStep++;
      } else if (stage == 5) {
        moveTextBox(1);
        if (currentStep == 100) {
          document
            .getElementById(part + "-" + path + "-" + (page - 1))
            .classList.remove("visible");
          page = 0;
        }
        buttons3(0);
        currentStep++;
      } else if (stage == 6) {
        buttons3(1);
        moveBall();
        currentStep++;
      } else {
        canvas.style.backgroundColor = "#ffffff";
        if (currentStep > 100 && currentStep <= 200) {
          buttonbegin.style.left = "50%";
          buttonbegin.style.filter = "opacity(" + (currentStep - 100) + "%)";
        }
        if (currentStep == 200) {
          buttonbegin.href = "../path" + path + "/P0.html";
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
  if (stage != toStage) {
    stage = toStage;
    currentStep = 0;
  }
}

function moveTextBox(phace) {
  var rad;
  if (currentStep < 300 && phace == 0) {
    rad = Math.pow(currentStep - 300, 2) / 10 + hig / 4;
  } else if (currentStep < 300 && phace == 1) {
    rad = Math.pow(currentStep, 2) / 10 + hig / 4;
  }
  textHolder.style.top = hig / 2 - rad + "px";
}

var part = 1,
  path = 0,
  page = 0;

var currentPage;
var pages = [
  [2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 3, 2, 2, 1, 2],
];
function nextPage() {
  if (stage == 2 || stage == 4) {
    page++;
    if (page > 1 && pages[part - 1][path - 1] + 1 > page) {
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
      } else {
        changeStage(5);
      }
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
    buttonstart.style.top = Math.pow(currentStep, 2) / 10 + hig / 2 + "px";

    rad = Math.pow(currentStep - 100, 2) / 10 + 200;
  } else if (currentStep < 100 && phace == 1) {
    rad = Math.pow(currentStep, 2) / 10 + 200;
  }

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
