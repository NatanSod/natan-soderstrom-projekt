function savePage() {
    if (! localStorage.getItem('savepage')) {
        document.getElementById('nosave').classList.add('visible');
        document.getElementById('backpop').classList.add('visible');
    } else {
        save();
    }
} 

function save() {
    localStorage.setItem('savepage', document.getElementById('page').className);
}

function load() {
    if (! localStorage.getItem('savepage')) {
        document.getElementById('noload').classList.add('visible');
        document.getElementById('backpop').classList.add('visible');
    } else {
        var savepage = localStorage.getItem('savepage');
        document.getElementById('loadP').href = savepage;
    }
}

function wantSave(yn) {
    if (yn == 'Yes') {
        save();
    }
    document.getElementById('nosave').classList.remove('visible');
    document.getElementById('backpop').classList.remove('visible');

}

function closePop() {
    document.getElementById('noload').classList.remove('visible');
    document.getElementById('backpop').classList.remove('visible');
}