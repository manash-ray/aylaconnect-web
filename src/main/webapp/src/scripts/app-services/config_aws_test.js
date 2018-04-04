var projectUrl="http://ec2-52-71-161-134.compute-1.amazonaws.com/khcore/";

var projectWebUrl="http://ec2-52-71-161-134.compute-1.amazonaws.com/khweb";

var imageUrlPrefix="http://ec2-52-71-161-134.compute-1.amazonaws.com/khcore/sweb/pictureRest/viewPicture/";

var facebook_login_url="khcore/sweb/userRest/facebookLogin";

var google_login_url="khcore/sweb/userRest/googleLogin";
// facebook app client id 

var data_site_key="6LdttBEUAAAAAOY9zsxnlnYRcAfNwhXTD_2hKfJu"; // aws test client id

var secret_key="6LdttBEUAAAAAJ6rWDr_iunwApsoOaEzDkJFAap5";  // aws test client id


var facebook_client_id = "1815399815338398"; // aws test client id







var google_client_id = "1071862463109-80n0amsjt4cuml6f11nnps4galgfnqot.apps.googleusercontent.com"; // aws test client id



function getPictureUrl(id,type,pictureName){
	
	return   'http://s3-ap-southeast-1.amazonaws.com/kriticalhealthtestaws/'+type+'/'+ id+'_'+pictureName;// aws test

}



function getPictureUrlWithExtension(id,type,pictureName, extension){
	return   'http://s3-ap-southeast-1.amazonaws.com/kriticalhealthtestaws/'+type+'/'+ id+'_'+extension+'_'+pictureName; 
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



