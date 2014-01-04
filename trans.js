// Here's a little copy-able template for the database template:
var dbexampletemplate= {
    'index':["title (h1)","onepage #1 content", "onepage #2 content", "onepage #3 content"]
};
//This is the database
var db= {
    1:["Screen record (audio/video) in your Mac, without new software","blah","blah","blah"]
};
function loadTitle() {
var titleobj=document.getElementById("titlehead"); console.log(titleobj);
var reqindexed=parseInt(location.href.substring(location.href.indexOf("?")+1,location.href.length));
console.log(reqindexed); 
var atitle=db[reqindexed][0]; console.log(atitle);
document.getElementById("titlehead").innerHTML='<h1>Think•Like•Geek<br><br class="clearfix"><!--Configured by trans.js--> '+atitle+"</h1><audio style='display:none;' preload='auto' loop='true' autoplay='true' src='background.mp3' controls><p>If you are reading this, it is because your browser does not support the audio element.</p></audio>";
console.log("done");
};
loadTitle();