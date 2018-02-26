function prepareGallery(){
    if(!document.getElementById('gallery')) return false;
    if(!document.getElementsByTagName('a')) return false;
    var gallery = document.getElementById('gallery');
    var links = gallery.getElementsByTagName('a');
    for(var i = 0; i < links.length; i++){
        links[i].onclick = function(){
            showPic(this);
            return !showPic(this);
        };
    }
}

function showPic(whichPic){
    if(!document.getElementById('placeholder')) return false;
    var source = whichPic.getAttribute('href');
    var placeholder = document.getElementById('placeholder');
    placeholder.setAttribute('src',source);
    if(document.getElementById('description')){
        var text = whichPic.getAttribute('title')?whichPic.getAttribute('title'):'';
        var description = document.getElementById('description');
        if(description.firstChild.nodeType === 3){
            description.firstChild.nodeValue = text;
        }
    }
    return true;
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