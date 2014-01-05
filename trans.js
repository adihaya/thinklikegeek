// Here's a little copy-able template for the database template:
var dbexampletemplate= {
    'index':["title (h1)","onepage #1 content", "onepage #2 content", "onepage #3 content", "youtube video url id only "]
};
//This is the database
var db= {
    //Screen Recording On Macs, without extra software
    1:["Screen record (audio/video) in your Mac, without new software","<h1>No new software, no plugins, just your Mac</h1><p>For this method, all you need is a Mac with OS X 10.6.8 Snow Leopard, or later. Although this is not required, make sure to download all software updates, and update QuickTime Player to the latest version. This method shows you a built-in screen recording capability, that can record a video of your screen for an unlimited amount of time, and also records audio microphone input at the same time. It then outputs a hi-quality video. Ready? Scroll down!</p>","<h1>The Method</h1><p>The method is essentially very short and simple. First, open QuickTime player. If you can't find it, click the spotlight (magnifying glass) icon in your menu bar on the Mac, type Quicktime, and then click Quicktime Player. Second, click the File menu in your menu bar, and click New Screen Recording (or use keyboard shortcut: control+command+N). Now click the red button in the center of the popup window. After clicking, it should tell you to click the screen for a fullscreen recording, or drag a part of the screen to record a section of the screen. Do one of these. If you dragged, clck Start Recording to begin. If you clicked, the fullscreen recording has already begun. <b>Click the round, stop button in your menu bar to stop the screen recording.</b>Scroll down for a quick recap of what you learned!</p>","<h1>Recap</h1><p>You've just learned how to screen record, using a built-in feature in your Mac. This feature is embedded in QuickTime Player. It is the New Screen Recording option in the File menu. Using this, you can easily and efficiently record your screen, for any purpose, and it will output a video (MPEG-4) of the recorded screen, in addition to audio that ws heard during the recording.","Cl62VOCBlPg"],
    
    //
    2:['Proof that <em>i</em> cannot exist','<h1>Why not?</h1><p>Well, the reason the math constant <em>i</em> cannot exist, is based on some basic properties of squaring and multiplication. When you square something, you multiply it by itself. Now, when multiplying a positive number by itself, it outputs a positive result. When multiplying a negative number by itself, it still outputs a positive result. To have a negative result, you must multiply a positive number, by a negative number. But in squaring, you multiply "n" by itself, not "-n time +n", because -n would have to be equal to +n. But... (<b>scroll down</b>)</p>','<h1>All Guesses Are Wrong</h1><p>You might have thought it is equal to 0. But this is very obviously false, because 0 squared is 0, not -1. After all this, you would have given up, by saying it is equal to Infinity. My question to you, then, would be "What is Infinity?". All of us have random definitions of Infinity, some say it is our largest number, some say it is any number, I really do not know. But <em>i</em> cannot be equal to Infinity, because Infinity squared, should not be -1.</p>', '<h1>Recap</h1><p>Again, this is just some very basic, on-the-surface proof, that "i" (sqrt(-1)) cannot exist. This also proves that all negative numbers do not have square roots. We used basic multiplication/squaring properties to discover this. This proves that <em>i</em> is indeed imaginary, and does not show a value.','JMPSjGyInWA'] 
};
function loadTitle() {
var titleobj=document.getElementById("titlehead"); console.log(titleobj);
var reqindexed=parseInt(location.href.substring(location.href.indexOf("?")+1,location.href.length));
console.log(reqindexed); 
var atitle=db[reqindexed][0]; console.log(atitle);
document.getElementById("titlehead").innerHTML='<h1>Think•Like•Geek<br><br class="clearfix"><!--Configured by trans.js--> '+atitle+"</h1><audio style='display:none;' preload='auto' loop='true' autoplay='true' src='background.mp3' controls><p>If you are reading this, it is because your browser does not support the audio element.</p></audio>";
console.log("done");
};


function loadpg1() {
var pg1obj=document.getElementById("onepg1"); console.log(pg1obj);
var reqindexed=parseInt(location.href.substring(location.href.indexOf("?")+1,location.href.length));
console.log(reqindexed); 
var atitle=db[reqindexed][1]; console.log(atitle);
document.getElementById("onepg1").innerHTML='<!--Configured by trans.js-->'+atitle;
console.log("done p1");
};

function loadpg2() {
var pg2obj=document.getElementById("onepg2"); console.log(pg2obj);
var reqindexed=parseInt(location.href.substring(location.href.indexOf("?")+1,location.href.length));
console.log(reqindexed); 
var atitle=db[reqindexed][2]; console.log(atitle);
document.getElementById("onepg2").innerHTML='<!--Configured by trans.js-->'+atitle;
console.log("done p2");
};
function loadpg3() {
var pg3obj=document.getElementById("onepg3"); console.log(pg3obj);
var reqindexed=parseInt(location.href.substring(location.href.indexOf("?")+1,location.href.length));
console.log(reqindexed); 
var atitle=db[reqindexed][3]; console.log(atitle);
    //atitle+='<!-- AddThis Button BEGIN --><div class="addthis_toolbox addthis_default_style addthis_32x32_style"><a class="addthis_button_preferred_1"></a><a class="addthis_button_preferred_2"></a><a class="addthis_button_preferred_3"></a><a class="addthis_button_preferred_4"></a><a class="addthis_button_compact"></a><a class="addthis_counter addthis_bubble_style"></a></div><script type="text/javascript">var addthis_config = {"data_track_addressbar":true};</script><script type="text/javascript" src="http://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-52c87df4294d52c6"></script><!-- AddThis Button END -->';
document.getElementById("onepg3").innerHTML='<!--Configured by trans.js-->'+atitle;
console.log("done p3");
};
function loadvidpreview() {
    var vidobj=document.getElementById("fusion_ad"); console.log(vidobj);
var reqindexed=parseInt(location.href.substring(location.href.indexOf("?")+1,location.href.length));
console.log(reqindexed); 
var btitle=db[reqindexed][4]; console.log(btitle);
var atitle="https://www.youtube-nocookie.com/embed/"+btitle+"?rel=0&theme=light&autoplay=1&siteref=thinklikegeek.com&showinfo=0&enablejsapi=1&origin=www.thinklikegeek.com&cc_load_policy=1"
var code='<span class="fusionentire"><a href="'+atitle+'" title="Watch the video!" target="_top"><img src="playbtn.png" class="fusionimg" alt="Watch Now!" border="0" height="100" width="130"></a><a href="'+atitle+'" class="fusiontext" title="Watch the video!" target="_top">Watch the Tutorial Video!</a></span><script src="https://apis.google.com/js/platform.js"></script><div class="g-ytsubscribe" data-channel="UCAWTbOwMPT6lyooPXB5N4RA"></div>';
document.getElementById("fusion_ad").innerHTML='<!--Configured by trans.js-->'+code;
console.log("done vid");
}

function loadContent() {
    loadTitle();
    loadpg1();
    loadpg2();
    loadpg3();
    loadvidpreview();
    window.innerHeight=window.availHeight; window.innerWidth=window.availWidth;
};
loadContent();