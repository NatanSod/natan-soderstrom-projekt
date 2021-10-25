var theDiv = document.getElementById("page");
theDiv.innerHTML +=
  '<div class="backpop" id="backpop"><div class="popup" id="nosave"><p>Because of legal reasons I just want to make sure you want to save since it works by using Local Storage, which is similair to cookies. Don\'t worry, the website is only saving the current page and nothingelse, the only one at risk of getting sued is me, I have no idea how to acces this infor mation or if I even can, and I have no interest in accesing it.<br />(Note that if you\'re using an incognito tab the saved page will not persist through closing the browser.)</p><div class="centeritems"><p>Do you want to save?</p><input onclick="wantSave(\'Yes\');" type="submit" value="Yes." /><input onclick="wantSave(\'No\');" type="submit" value="No." /></div></div><div class="popup" id="noload"><p>You do not have a page saved.</p><div class="centeritems"><input onclick="closePop();" type="submit" value="Close." /></div></div></div>';

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

function wantSave(yn) {
  if (yn == "Yes") {
    save();
  }
  document.getElementById("nosave").classList.remove("visible");
  document.getElementById("backpop").classList.remove("visible");
}

function closePop() {
  document.getElementById("noload").classList.remove("visible");
  document.getElementById("backpop").classList.remove("visible");
}
