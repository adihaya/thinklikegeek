function pushto() {
var redirto=parseInt(location.href.substring(location.href.indexOf("?")+1,location.href.length));
console.log('redirto: '+redirto);
var addrto='file:///Users/aditya/AdityaRamabadran/Ruby/ThinkLikeGeek%20Domain/course.html?'+redirto;
window.location.replace(addrto);
};
pushto();