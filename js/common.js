// JavaScript Document

/**
* @name		:clearTxt
* @author	:Nice
* @dependent:文本清空
*/
function clearTxt(e,hintID){   
    var target=document.getElementById(e);
    if (target.addEventListener) {
    	target.addEventListener('focus',function(){
    		document.getElementById(hintID).style.display='none';
    	},false);
    	target.addEventListener('blur',function(){
    		if (target.value=='') {
    			document.getElementById(hintID).style.display='block';
    		} else{
    			return false;
    		};
    	},false);
    } else{
    	target.attachEvent("on" + 'focus',function(){
    		document.getElementById(hintID).style.display='none';
    	});

    	target.attachEvent("on" + 'blur',function(){
    		if (target.value=='') {
    			document.getElementById(hintID).style.display='block';
    		} else{
    			return false;
    		};
    	}); 
    };
}
/* @end **/