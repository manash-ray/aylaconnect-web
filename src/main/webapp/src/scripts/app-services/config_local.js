var projectUrl="http://localhost:9082/praveshikacore/";

var projectWebUrl="http://localhost:9082/praveshikaweb";

var imageUrlPrefix="http://localhost:9082/praveshikacore/sweb/pictureRest/viewPicture/";

var facebook_login_url="praveshikacore/sweb/userRest/facebookLogin";

var google_login_url="praveshikacore/sweb/userRest/googleLogin";

var data_site_key="6LemUw8UAAAAACB0bKOYWeTVC3s1Nq2hptmEYhEt"; // for local 

var secret_key="6LdhUw8UAAAAAGqCmDYM6NDQOokjj-0G_sCrR57A";  // for local

// facebook app client id 




var facebook_client_id = "1683939325267637";  // local client id

//var facebook_client_id = "347167528952952"; // demo client id

//var facebook_client_id = "1815399815338398"; // aws test client id

//var facebook_client_id = "243598162723919"; // production client id

// google app client id

var google_client_id = "104308484136-2gnn4jbtcfk0rbpogbtra77905littrm.apps.googleusercontent.com";  // local client id

//var google_client_id = "747757134716-ispom8lt0a4fi9odr6dokjcjmucp3b82.apps.googleusercontent.com"; // demo client id

//var google_client_id = "1071862463109-80n0amsjt4cuml6f11nnps4galgfnqot.apps.googleusercontent.com"; // aws test client id

//var google_client_id = "941724708350-vjv94d2li1c8dd7o8efbnmvu88lnjf70.apps.googleusercontent.com"; // production client id

function getPictureUrl(id,type,pictureName){
	return   'https://s3-ap-southeast-1.amazonaws.com/krithealth1/'+type+'/'+ id+'_'+pictureName; // local
	//return   'https://s3-ap-southeast-1.amazonaws.com/kriticalhealthtest/'+type+'/'+ id+'_'+pictureName; // demo
	//return   'https://s3-ap-southeast-1.amazonaws.com/kriticalhealthtestaws/'+type+'/'+ id+'_'+pictureName;// aws test
	//return   'https://s3-ap-southeast-1.amazonaws.com/kriticalhealthprod/'+type+'/'+ id+'_'+pictureName; // production
}
function getPictureUrlWithExtension(id,type,pictureName, extension){
	return   'https://s3-ap-southeast-1.amazonaws.com/krithealth1/'+type+'/'+ id+'_'+extension+'_'+pictureName; // local
	//return   'https://s3-ap-southeast-1.amazonaws.com/kriticalhealthtest/'+type+'/'+ id+'_'+pictureName; // demo
	//return   'https://s3-ap-southeast-1.amazonaws.com/kriticalhealthtestaws/'+type+'/'+ id+'_'+pictureName;// aws test
	//return   'https://s3-ap-southeast-1.amazonaws.com/kriticalhealthprod/'+type+'/'+ id+'_'+pictureName; // production
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



/*function url(id,type,pictureName){
	
	return   projectUrl
	+ 'sweb/pictureRest/viewPicture/'
	+ id+'/'+type+'/'+pictureName;
	
	
}*/
