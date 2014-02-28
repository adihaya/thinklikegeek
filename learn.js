//Main App Functions
var canvas={
	ul=$("grid"),
	innerHTML=$("grid").innerHTML,
	temp1="<li><a href='../course.html?",
	temp2="'><img src='images/",
	temp3=".png'></a></li>",
	init=function() {
		var data=db;
		var params=data.length; var ii=0; var build="<!-- Built by learn.js (JS TLG) -->   "; var cb="";
		for (var i=0; i<params; i++) {
			cb=""; ii=i.toString(); cb+=(canvas.temp1+ii+canvas.temp2+ii+canvas.temp3); 
			build+=cb; console.log('For learnjs P'+ii);
			cb='';
		}
	}
};
// Start the main app logic.
requirejs(['../jquery', '../trans', '../angular'],
function   ($,        canvas,   sub) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
	canvas.init();
});
