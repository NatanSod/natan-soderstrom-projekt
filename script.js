var theDiv = document.getElementById("page");
if (theDiv.classList != "0/create") {
  theDiv.innerHTML +=
    '<div class="backpop" id="backpop">' +
    '<div class="popup" id="nosave">' +
      '<p class="poptext">' +
        'Because of legal reasons I just want to make sure you want to save ' +
        'since it works by using Local Storage, which is similair to cookies. ' +
        'Don\'t worry, the website is only saving the current page and nothing ' +
        'else, the only one at risk of getting sued is me, I have no idea how ' +
        'to access this information or if I even can, and I have no interest in ' +
        'accessing it.' +
      '</p>' +
      '<p class="incase centeritems">' +
        '(Note that if you\'re using an incognito tab the ' +
        'saved page will not persist through closing the browser.)' +
      '</p>' +
      '<div class="centeritems">' +
        '<p class="poptext">Do you want to save?</p>' +
        '<input id="Yes" type="submit" value="Yes." />' +
        '<input id="No" type="submit" value="No." />' +
      '</div>' +
    '</div>' +
    '<div class="popup" id="noload">' +
      '<p class="poptext centeritems">You do not have a page saved.</p>' +
      '<div class="centeritems">' +
        '<input id="close" type="submit" value="Close." />' +
      '</div>' +
    '</div>' +
  '</div>';
}

var Save = document.getElementById("saveP");
Save.addEventListener("click", savePage);
var Load = document.getElementById("loadP");
Load.addEventListener("click", load);

var Yes = document.getElementById("Yes");
Yes.addEventListener("click", yes);
var No = document.getElementById("No");
No.addEventListener("click", no);
var Close = document.getElementById("close");
Close.addEventListener("click", closePop);

function savePage() {
  if (!localStorage.getItem("savepage")) {
    document.getElementById("nosave").classList.add("visible");
    document.getElementById("backpop").classList.add("visible");
  } else {
    save();
  }
}

function save() {
  localStorage.setItem("savepage", document.getElementById("page").className);
}

function load() {
  if (!localStorage.getItem("savepage")) {
    document.getElementById("noload").classList.add("visible");
    document.getElementById("backpop").classList.add("visible");
  } else {
    var savepage = localStorage.getItem("savepage");
    document.getElementById("loadP").href = "../path" + savepage + ".html";
  }
}

function yes () {
  save();
  
  document.getElementById("nosave").classList.remove("visible");
  document.getElementById("backpop").classList.remove("visible");
}
function no () {
  document.getElementById("nosave").classList.remove("visible");
  document.getElementById("backpop").classList.remove("visible");
}

function closePop() {
  document.getElementById("noload").classList.remove("visible");
  document.getElementById("backpop").classList.remove("visible");
}
