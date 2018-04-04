google.load('visualization', '1', {packages:['orgchart']});


function getExtension(filename) {
    var parts = filename.split('.');
    return parts[parts.length - 1];
}

function isImage(filename) {
    var ext = getExtension(filename);
    switch (ext.toLowerCase()) {
    case 'jpg':
    case 'gif':
    case 'bmp':
    case 'png':
        //etc
        return true;
    }
    return false;
}

function isVideo(filename) {
    var ext = getExtension(filename);
    switch (ext.toLowerCase()) {
    case 'm4v':
    case 'avi':
    case 'mpg':
    case 'mp4':
        // etc
        return true;
    }
    return false;
}


  function bytesToSize(bytes,maxSizeInMb) {
	 if(bytes< maxSizeInMb*(1024*1024))
		 {
		 return true;
		 }
	 else{
		 return false;
	 }
	   
	};
	
	 
    function getSingleSetting(singleSetting,isFriend) {
    	
    	
    	
		if ( singleSetting.settingValue == "PUBLIC") {
			return true;
		} 
		else if (singleSetting.settingValue == "PRIVATE") {
			return false;
		} 
   	
		else if ( singleSetting.settingValue == "NETWORK" && isFriend) {
			return true;;
		} 
		
    	
      }
    
    
    function convertToString(month,year,day){
    	
    	
    	month=month==undefined? "" : month;
    	year=year==undefined? "" : year;
    	day=day==undefined? "" : day;
    	
    	
   

    	
    
    		var dateString=month +" "+ day+" ,"+ year;
    
    
     
    	  
    	  
    	 
    		  return dateString;
    		  
    	  
    	
    	
    	
    	
    }
    
    	

