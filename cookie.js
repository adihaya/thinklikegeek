function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
    if (value!=="") { console.log("Created cookie on"+date.getTime()+",  with name '"+name+"', value '"+value+"', and set to expire in exactly "+days+" days. (TLG)"); }
}

function readCookie(name) {
    var date = new Date();
	var nameEQ = name + "=";
    console.log("Cookie read on"+date.getTime()+", with name "+name+". (TLG)");
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
    var date = new Date();
    console.log("Cookie with name "+name+" has been erased (TLG)");
	createCookie(name,"",-1);
}

var $cookies={
    erase:eraseCookie,
    read:readCookie,
    create:createCookie,
    new: createCookie
}
var date = new Date();
console.log("(TLG) Cookie functions stabilized: "); console.log($cookies);
