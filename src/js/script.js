//var onlineusers = document.getElementsByClassName('online').length;
//document.getElementById("users").getElementsByTagName("span")[0].innerHTML = onlineusers;


//var tabs = document.getElementById("tabs").children[0];
// require('./timers');
// require('../scss/bootstrap.min.css');
// require('../scss/bootstrap-theme.min.css');
// require('../scss/style.scss');
//
var $ = require('jquery');
 function change(node){
    var tab = node.parentNode.children;
     for (var i=0; i<tab.length; i++){
         if(tab[i].classList.contains("act")){
             tab[i].classList.toggle("act");
         }
     }
     node.classList.toggle("act");
}

function removetab (node){
    if(node.parentNode.classList.contains("act")){
        change(node.parentNode.parentNode.firstElementChild);
    }
    node.parentNode.remove();
}

document.onclick = function(event){
    var target = event.target;

    if(target.tagName == "LI"){
        change(target);
    }
    if(target.classList.contains("close")){
        removetab(target);
    }
}

var message = document.getElementById("message");
var  charsnumber =  document.getElementById("chars");
var  lettersnumber =  document.getElementById("letters");
var  whitespacesnumber =  document.getElementById("whitespaces");
var  punctuationnumber =  document.getElementById("punctuation");

 function counters(){

    charsnumber.innerHTML = message.value.length;
    lettersnumber.innerHTML = message.value.split(/\w/).length-1;
    whitespacesnumber.innerHTML = message.value.split(/\s/).length-1;
    punctuationnumber.innerHTML = message.value.split(/[\W_]/).length-message.value.split(/\s/).length;

};
message.oninput = counters;


/*{

    //console.log(message.value.length);
    //console.log(message.value.split(/\s/).length-1);
    //console.log(message.value.split(/\w/));
    //console.log(message.value.split(/[\W_]/).length-message.value.split(/\s/).length);
}*/
function changestyle (node, style){
    message.classList.toggle(style);
    node.classList.toggle("pressed");
}
var tools = document.getElementById("tools");
tools.onclick = function (event) {

    var target = event.target;
    if(target.classList.contains("bold")){
        changestyle(target,"bold");
    }
    if(target.classList.contains("italic")){
        changestyle(target,"italic");
    }
    if(target.classList.contains("underline")){
        changestyle(target,"underline");
    }
}
$(function(){
    // код jQuery

  //number of online users
    var onlineusers = $('.online').length;
    $("#users span:first-child").text(onlineusers);
  // var tabs = $("#tabs ul");
    //console.log(tabs);

    //
/*
    function counters(){

        $("char").text(message.value.length);
        $("letters").text(message.value.split(/\w/).length-1);
        $("whitespaces").text(message.value.split(/\s/).length-1);
        $("punctuation").text(message.value.split(/[\W_]/).length-message.value.split(/\s/).length);
        };
    $("message").oninput = counters;
    */
});
