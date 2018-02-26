function addLoadEvent(func){
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

function getNewContent(){
    var request = getHttpObject();
    if(request){
        request.open("GET","example.txt",true);
        request.onreadystatechange = function(){
            if(request.readyState===4){
                var para = document.createElement('p');
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById('new').appendChild(para);
            }
        };
        request.send(null);
    }else{
        alert("Sorry,your browser doesn\'t support XMLHttpRequest");
    }
}

var btn = document.getElementById('btn');
btn.onclick = getNewContent;