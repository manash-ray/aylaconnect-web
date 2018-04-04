var projectUrl="http://www.kriticalhealth.com/kriticalhealthcore/";

var projectWebUrl="http://www.kriticalhealth.com";

var imageUrlPrefix="http://www.kriticalhealth.com/kriticalhealthcore/sweb/pictureRest/viewPicture/";

var facebook_login_url="kriticalhealthcore/sweb/userRest/facebookLogin";

var google_login_url="kriticalhealthcore/sweb/userRest/googleLogin";
// facebook app client id 



var facebook_client_id = "243598162723919"; // production client id

// google app client id



var google_client_id = "941724708350-vjv94d2li1c8dd7o8efbnmvu88lnjf70.apps.googleusercontent.com"; // production client id


var data_site_key="6Lf9bw8UAAAAADRAZJRKWTYyzohLIJcW6_CTkw83"; // for production

var secret_key="6Lf9bw8UAAAAAGKE3ovdur0xFFjCp2n23P_-2fIP";  // for production

function getPictureUrl(id,type,pictureName){

	return   'http://s3-ap-southeast-1.amazonaws.com/kriticalhealthprod/'+type+'/'+ id+'_'+pictureName; // production
}

function getPictureUrlWithExtension(id,type,pictureName, extension){
	return   'http://s3-ap-southeast-1.amazonaws.com/kriticalhealthprod/'+type+'/'+ id+'_'+extension+'_'+pictureName; // local
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
	/*var date = new Date();
	date.setUTCDate(utcDate.getDate());
	date.setUTCHours(utcDate.getHours());
	date.setUTCMonth(utcDate.getMonth());
	date.setUTCMinutes(utcDate.getMinutes());
	date.setUTCSeconds(utcDate.getSeconds());
	date.setUTCMilliseconds(utcDate.getMilliseconds());*/
	return utcDate;
	
}

// convert local to utc date method

function convertLocalToUTC(date) {
	var date=new Date( date.getTime() + (date.getTimezoneOffset() * 60000));
	return date;
} 



