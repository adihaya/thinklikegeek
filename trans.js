var bareurl="http://dummyimage.com/700/e3e3e3&text="
var imgca='<li><a href="'
var imgcb='"><img src="'
var imgcc='"></a></li>'

// Here's a little copy-able template for the database template:
var dbexampletemplate= {
    'index':["title (h1)","onepage #1 content", "onepage #2 content", "onepage #3 content", "youtube video url id only "]
};
//This is the database
var db= {
    //Screen Recording On Macs, without extra software
    1:["Screen record (audio/video) in your Mac, without new software","<h1>No new software, no plugins, just your Mac</h1><p>For this method, all you need is a Mac with OS X 10.6.8 Snow Leopard, or later. Although this is not required, make sure to download all software updates, and update QuickTime Player to the latest version. This method shows you a built-in screen recording capability, that can record a video of your screen for an unlimited amount of time, and also records audio microphone input at the same time. It then outputs a hi-quality video. Ready? Scroll down!</p>","<h1>The Method</h1><p>The method is essentially very short and simple. First, open QuickTime player. If you can't find it, click the spotlight (magnifying glass) icon in your menu bar on the Mac, type Quicktime, and then click Quicktime Player. Second, click the File menu in your menu bar, and click New Screen Recording (or use keyboard shortcut: control+command+N). Now click the red button in the center of the popup window. After clicking, it should tell you to click the screen for a fullscreen recording, or drag a part of the screen to record a section of the screen. Do one of these. If you dragged, clck Start Recording to begin. If you clicked, the fullscreen recording has already begun. <b>Click the round, stop button in your menu bar to stop the screen recording.</b>Scroll down for a quick recap of what you learned!</p>","<h1>Recap</h1><p>You've just learned how to screen record, using a built-in feature in your Mac. This feature is embedded in QuickTime Player. It is the New Screen Recording option in the File menu. Using this, you can easily and efficiently record your screen, for any purpose, and it will output a video (MPEG-4) of the recorded screen, in addition to audio that ws heard during the recording.","Cl62VOCBlPg"],
    
    //
    2:['Proof that <em>i</em> cannot exist','<h1>Why not?</h1><p>Well, the reason the math constant <em>i</em> cannot exist, is based on some basic properties of squaring and multiplication. When you square something, you multiply it by itself. Now, when multiplying a positive number by itself, it outputs a positive result. When multiplying a negative number by itself, it still outputs a positive result. To have a negative result, you must multiply a positive number, by a negative number. But in squaring, you multiply "n" by itself, not "-n time +n", because -n would have to be equal to +n. But... (<b>scroll down</b>)</p>','<h1>All Guesses Are Wrong</h1><p>You might have thought it is equal to 0. But this is very obviously false, because 0 squared is 0, not -1. After all this, you would have given up, by saying it is equal to Infinity. My question to you, then, would be "What is Infinity?". All of us have random definitions of Infinity, some say it is our largest number, some say it is any number, I really do not know. But <em>i</em> cannot be equal to Infinity, because Infinity squared, should not be -1.</p>', '<h1>Recap</h1><p>Again, this is just some very basic, on-the-surface proof, that "i" (sqrt(-1)) cannot exist. This also proves that all negative numbers do not have square roots. We used basic multiplication/squaring properties to discover this. This proves that <em>i</em> is indeed imaginary, and does not show a value.','JMPSjGyInWA'],
   3:['Easily redirect www.domain.com to your domain','<h1>At A Glance</h1><p> Have you ever been wondering about the easiest way to quickly and effortlessly redirect www subdomains (aka http://www.yourdomain.com) to just your domain (http://yourdomain.com)? Well, there is s a super easy way to do it. This method involves using a new (free) Tumblr&trade; blog, where you replace the blog theme HTML with redirector javascript, and connect a subdomain of your domain to Tumblr. Sounds long, but it is really simple. Find out more by scrolling down:</p>','<h1>How: Step One</h1><p>The method is very simple. First, create or login into your Tumblr.com account. Then, create a new blog (by clicking the down arrow next to the default blog, and clicking the new button) titled <i>redirector</i>, and make the url something like yourdomain-redirect.tumblr.com (if your domain is called yourdomain.com). Next, make sure you are inside your blog editing page. Click the customize button below your blog title (right side of page). Under your blog theme (probably Default or Optica), click Edit HTML. Copy everything on <a href="data:text/txt,<!DOCTYPE html> <html> <head><script>window.location.replace("http://thinklikegeek.com");</script></head> <body><script>window.location.replace("http://thinklikegeek.com");</script></body> </html>">This Page</a> and replace everything in the Edit HTML window, with what you copied. Now Save. Scroll down to find the last step: </p>','<h1>Last Step</h1><p>Now, go to your domain registrar for your domain, and add a CNAME value for www.yourdomain,  equal to domains.tumblr.com. Go back to tumblr, and click the gear (Settings) icon, and choose your Redirector blog on the right side. On the right side of the username section, click the pencil icon. Type http://www.yourdomain.com (replace yourdomain with your domain). Click the test domain button. If there are errors, fix them until you see a green checkmark. Save, and wait for up to 2 days, for the changes to work. www.yourdomain.com will now successfully redirect to yourdomain.com! </p>','dvDQlkLVZUA'] 
};
function loadTitle() {
var titleobj=document.getElementById("titlehead"); console.log(titleobj);
var reqindexed=parseInt(location.href.substring(location.href.indexOf("?")+1,location.href.length));
console.log(reqindexed); 
var atitle=db[reqindexed][0]; console.log(atitle);
document.getElementById("titlehead").innerHTML='<h1>Think•Like•Geek<br><br class="clearfix"><!--Configured by trans.js--> '+atitle+"</h1><audio style='display:none;' preload='auto' loop='true' autoplay='true' src='background.mp3' controls><p>If you are reading this, it is because your browser does not support the audio element.</p></audio>";
console.log("done");
console.log("TitleTag:"); console.log(document.getElementsByTagName("title")); document.getElementsByTagName("title")[0].innerHTML='Think•Like•Geek: '+atitle;


document.getElementById("descript").content="A course on ThinkLikeGeek, about this:  "+atitle+". Powered by the online, free course system, ThinkLikeGeek.";
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
var mtitle=db[reqindexed][3]; atitle=mtitle+'<!-- AddThis Follow BEGIN --><p><br />Connect with ThinkLikeGeek!</p><div class="addthis_toolbox addthis_32x32_style addthis_default_style"><a class="addthis_button_facebook_follow" addthis:userid="pages/Thinklikegeek/683293708360074"></a><a class="addthis_button_twitter_follow" addthis:userid="aressays"></a><a class="addthis_button_rss_follow" addthis:userid="thinklikegeek.com"></a></div><script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-52c87df4294d52c6"></script><!-- AddThis Follow END -->';console.log(atitle);
    //atitle+='<!-- AddThis Button BEGIN --><div class="addthis_toolbox addthis_default_style addthis_32x32_style"><a class="addthis_button_preferred_1"></a><a class="addthis_button_preferred_2"></a><a class="addthis_button_preferred_3"></a><a class="addthis_button_preferred_4"></a><a class="addthis_button_compact"></a><a class="addthis_counter addthis_bubble_style"></a></div><script type="text/javascript">var addthis_config = {"data_track_addressbar":true};</script><script type="text/javascript" src="http://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-52c87df4294d52c6"></script><!-- AddThis Button END -->';*/
document.getElementById("onepg3").innerHTML='<!--Configured by trans.js-->'+atitle;
console.log("done p3");
};
function loadvidpreview() {
    var vidobj=document.getElementById("fusion_ad"); console.log(vidobj);
var reqindexed=parseInt(location.href.substring(location.href.indexOf("?")+1,location.href.length));
console.log(reqindexed); 
var btitle=db[reqindexed][4]; console.log(btitle);
var atitle="https://www.youtube-nocookie.com/embed/"+btitle+"?rel=0&theme=light&autoplay=1&siteref=thinklikegeek.com&showinfo=0&enablejsapi=1&origin=www.thinklikegeek.com&cc_load_policy=1"
var code='<span class="fusionentire"><a href="'+atitle+'" title="Watch the video!" target="_top"><img src="data:image/png;base64,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" class="fusionimg" alt="Watch Now!" border="0" height="100" width="130"></a><a href="'+atitle+'" class="fusiontext" title="Watch the video!" target="_top">Watch the Tutorial Video!</a></span><script src="https://apis.google.com/js/platform.js"></script><div class="g-ytsubscribe" data-channel="UCAWTbOwMPT6lyooPXB5N4RA"></div>';
document.getElementById("fusion_ad").innerHTML='<!--Configured by trans.js-->'+code;
console.log("done vid");
}
function getsize(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
function loadgrid() {
    var bareurl="http://www.dummyimage.com/700/e3e3e3&text=";
var imgca='<li><a href="';
var imgcb='"><img alt="alt" src="';
var imgcc='"></img></a></li>';
//console.log("dblength: "+getsize(db).toString);
var innb='';
    var ii=1;
    for (var i=1; i<getsize(db)+1; i++) {
        var dbtitle=db[ii][0];
        innb+=(imgca+"../sc.html?"+ii.toString())+(imgcb+bareurl+db[ii][0]+imgcc);
        console.log("dbt: "+dbtitle.toString+"  innb: "+innb)
        ii=ii+1;
    }
    console.log(innb)
    //var inn=innb;
    inn="<!--configured by trans-->"+innb
    //document.getElementById("grid").innerHTML=inn;
    document.getElementById("maingrid").innerHTML=inn;
    return db
}
function loadkeeper() {
    window.onbeforeunload = function(){
        return "Aww, are you sure you want to leave the ThinkLikeGeek course? It's really fun! " ;
      };
}
function loadContent() {
    loadTitle();
    loadpg1();
    loadpg2();
    loadpg3(); loadvidpreview();
    loadgrid(); loadkeeper();
    loadvidpreview();
    window.innerHeight=window.availHeight; window.innerWidth=window.availWidth;
};
loadContent(); 
