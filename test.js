
	var b = $("<ul>");
	var c = $('body');
	
var array = ["sting", "string2", "string3"];
var array1 = ["sting", "string2", "string3"];
var array2 = ["sting", "string2", "string3"];
debugger;
var arr = { nema : array , name1 : array1, name2 : array2};

var i;
for ( i in arr){
	//var a = $("<li>");



//	a.append(arr[i]);
	//b.append(a);
//	c.append(b);
	if (Array.isArray(arr[i])){
		console.log("helo"+i);
		/*var ul2 = $("<ul>");
		var d;*/
		for (d=0; d<arr[i].length; d++){
				console.log("helo2"+i);
		};
	};
};




