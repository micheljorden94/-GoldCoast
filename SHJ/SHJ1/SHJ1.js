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

function insertAfter(newElement,oldElement){
    var parent = oldElement.parentNode;
    if(oldElement===parent.lastChild){
        parent.appendChild(newElement);
    }
    else{
        parent.insertBefore(newElement,oldElement.nextSibling);
    }
}

function prePlaceholder(){
    if(!document.getElementById('gallery'))return false;
    if(!document.createElement)return false;
    if(!document.createTextNode)return false;
    var placeholder = document.createElement('img');
    placeholder.setAttribute('src','../images/shjTV.jpg');
    placeholder.setAttribute('alt','浪漫满屋');
    placeholder.setAttribute('id','placeholder');
    var description = document.createElement('p');
    description.setAttribute('id','description');
    var txt = document.createTextNode('Choose a picture');
    description.appendChild(txt);
    var gallery = document.getElementById('gallery');
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
    /*var gallery = document.getElementById('gallery');
    gallery.parentNode.insertBefore(placeholder,gallery);    //insertBefore
    gallery.parentNode.insertBefore(description,gallery);*/
    /*document.body.appendChild(placeholder);
    document.body.appendChild(description);*/
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

addEventLoad(prePlaceholder);
addEventLoad(prepareGallery);



