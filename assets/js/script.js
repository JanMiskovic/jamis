function MM_goToURL() {  
	var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
	for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
}

function SelectAll() {
	for(var x=0;x<document.form.elements.length;x++) {
		var y=document.form.elements[x];
		if(y.name!='ALL') y.checked=document.form.ALL.checked;
	}
}

function MM_confirm(msg, url) {  
	if(confirm(msg)) location.replace(url);
}

function MM_openBrWindow(theURL,winName,features) { 
	window.open(theURL,winName,features);
}
