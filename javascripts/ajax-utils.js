(function (global) {

//set up a namespace for our utility
var ajaxUtils = {};

//returns an HTTP request object
function getRequestObject() {
if(window.XMLHttpRequest){
return(new XMLHttpRequest());
}
else if(window.ActiveXObject){
return (new ActiveXObject("Microsoft.XMLHTTP"));
}
else
{
global.alert("Ajax is not supported");
return(null);
}
}

var request = getRequestObject();
var myHandler = null;

//makes an Ajax GET request to 
ajaxUtils.sendGetRequest = 
function(requestUrl, responseHandler, isJsonResponse) {
	
myHandler = responseHandler;
request.onreadystatechange = function() {
handleResponse(request, responseHandler, isJsonResponse);
};
request.open("GET", requestUrl, true);
request.send(); //for POST only
}

function handleResponse(request, responseHandler, isJsonResponse) {
if((request.readyState == 4) && (request.status == 200)){
	if(isJsonResponse == undefined){
		isJsonResponse = true;
	}
	if (isJsonResponse) {
		responseHandler(JSON.parse(request.responseText));
	}
	else{
		responseHandler(request.responseText);
	}
}
}

global.$ajaxUtils = ajaxUtils;

})(window);
