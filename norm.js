function clickFunction(val){
  
     
    if(val.checked){
    document.getElementById(val.id).style.opacity='1';
    }
    else{ 
    document.getElementById(val.id).style.opacity='.5';
    }
}

window.onload = function(){
for(var i of document.querySelectorAll('[type=checkbox]')) { i.checked = false; }
}