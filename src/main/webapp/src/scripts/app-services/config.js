var projectUrl="http://localhost:9082/aylaconnectcore/";

var projectWebUrl="http://localhost:9082/aylaconnectweb";

var imageUrlPrefix="";

var facebook_login_url="";

var google_login_url="";
// facebook app client id 

var data_site_key=""; // for local 

var secret_key="";  // for local







var facebook_client_id = "";  // local client id


var google_client_id = "";  // local client id



function getPictureUrl(id,type,pictureName){
	return   '';
	
}

function getPictureUrlWithExtension(id,type,pictureName, extension){
	return   '';
	
}

// to conver Capital letter to small
function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// convert utc to local date method

function convertUtcToLocalTime(date)
{
	var utcDate = new Date(date);
	var date = new Date();
	date.setUTCDate(utcDate.getDate());
	date.setUTCHours(utcDate.getHours());
	date.setUTCMonth(utcDate.getMonth());
	date.setUTCMinutes(utcDate.getMinutes());
	date.setUTCSeconds(utcDate.getSeconds());
	date.setUTCMilliseconds(utcDate.getMilliseconds());
	return date;
	
}

// convert local to utc date method

function convertLocalToUTC(date) {
	var date=new Date( date.getTime() + (date.getTimezoneOffset() * 60000));
	return date;
} 





