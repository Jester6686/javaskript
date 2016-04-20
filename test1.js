var c = $("body");
var ul1 = $("<ul>");

var zmaina;
var taitl = {Komp:{ monitor:["samsung", "LG","biq"],
					Mouse:["defender", "optikal", "bla"],
					klava:["grem", "reged", "ppq"],
					
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
		zmaina = taitl[www]	;
		var m = $("<li>").addClass(www);		 
		m.append(www) ;
		ul1.append(m);	
		
					var ul2 = $("<ul class2>");
				for (var i in zmaina){
					var li2 = $("<li>").addClass("sekondLi").attr('id',www);
					li2.append(i);
					ul2.append(li2);
					m.append(ul2);
									if (zmaina[i] instanceof Array){
									console.log(zmaina[i]);
									var zmaina2 = zmaina[i];
									var ul3 = $("<ul class3>");
									for (var i=0; i<zmaina2.length; i++){
										var li3 = $("<li>").addClass("thryLi").attr('id',zmaina2);

															
										li3.append(zmaina2[i]);
										ul3.append(li3);
										li2.append(ul3);
									};
															};

					//ul2.append(m);	
					//c.append(ul2); 
								}; //перший цикл
							};// другий цикл
							c.append(ul1);
							};// функція
GlobalFun(taitl);

$(document).ready(init);

function init(){
    $('.thryLi').hide();
    $('.sekondLi').hide();
}
/*
function hideDiv(){
    $('.thryLi').hide();
}
function showKomp(){
    $('#Komp').show();
}
$('.thryLi').click(function(){
				hideDiv();
							});*/
$('.Komp').click(function(){
			$( this ).parent().next().toggle();

                return false;

								});	

 /*for (var b in taitl){


 }*/
 /* if (Array.isArray(taitl.Komp[i])){
console.log(taitl.Komp[i]);
var k = taitl.Komp[i];
for (var g=0; g<k.length; g++){
var a = $("<li>");

a.append(k[g]);
b.append(a);
m.append(b);}
}
}*/
	/*LiFunct: function(bl){
				for (var i in zmaina){
					var li2 = $("<li>");
					li2.append(i);
					ul2.append(li2);
					m.append(ul2);
					ul1.append(m);	
		c.append(ul1); 										
								}	}	*/	
			
