var c = $("body");
var ul1 = $("<ul class1>");

var m;
var zmaina;
var taitl = {Komp:{ monitor:["samsung", "LG","biq"],
					Mouse:["defender", "optikal", "bla"],
					klava:["grem", "reged", "ppq"],
						LiFunct: function(bl){
				for (var i in zmaina){
					var li2 = $("<li>");
					li2.append(i);
					ul2.append(li2);
					m.append(ul2);
					ul1.append(m);	
		c.append(ul1); 										
								}	}		
			
		},
	Notebook:{ tachpad:["sdff", "dontN", "xzzzz"],
				matrix:["rgd", "red","red1"],
				noneN:["test", "test1", "test2"]
			},
	Tablet:{ Skrin:["sd1", "sd2", "sd3"],
			 heigt:["big", "smaal", "norm"],
			 vaga:["norma", "norma1", "norma2"]
			}
}; 
var GlobalFun = function(){
	for (var www in taitl){
		 m = $("<li class1>");				 
		zmaina = taitl[www]	;
			m.append(www) ;
			ul1.append(m);	
			
					
		//taitl.Komp.LiFunct(zmaina);
		var ul2 = $("<ul class2>");
		for (var i in zmaina){
					if (zmaina[i] instanceof Array){
						console.log(zmaina[i]);
					};
					var li2 = $("<li>");
					li2.append(i);
					ul2.append(li2);
					m.append(ul2);
					//ul1.append(m);	
					//c.append(ul1);
					 };
						
		
	};
	c.append(ul1);
};
GlobalFun(taitl);
 /*for (var b in taitl){


 }*/

