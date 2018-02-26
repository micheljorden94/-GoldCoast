function showPic(whichPic){
    var source = whichPic.getAttribute('href');
    var placeholder = document.getElementById('placeholder');
    placeholder.setAttribute('src',source);
    var text = whichPic.getAttribute('title');
    var description = document.getElementById('description');
    description.firstChild.nodeValue = text;
    return true;
}

function prepareGallery(){
    var gallery = document.getElementById('gallery');
    var links = gallery.getElementsByTagName('a');
    for(var i = 0; i < links.length; i++){
        links[i].onclick = function(){
            showPic(this);
            return !showPic(this);
        };
    }
}

function addEventLoad(func){
    var oldLoad = window.onload;
    if(typeof oldLoad !== 'function'){
        window.onload = func;
    }
    else{
        window.onload = function(){
            oldLoad();
            func();
        };
    }
}
addEventLoad(prepareGallery);