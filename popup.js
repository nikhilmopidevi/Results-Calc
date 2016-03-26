
//injecting contentscript into the page
chrome.tabs.executeScript({"file": "contentscript.js"});	


	var total= 0,percentage = 0;
	var course;
	var max;
    var pass;
	
    var redColor = "#E41724";
	
chrome.runtime.onMessage.addListener(function(response){

var message = response.split('$');

course = message[0];
total  = message[1];
pass   = message[2];

if(course=="1A"||course=="5A")//B.Tech
{
percentage = total/7.25; 
max = "/725";
 }
else if (course=="1D"||course=="5D")//M.Tech
 {
percentage = total/7.00; 
max = "/700";
 }
else if (course=="1E"||course=="5E")//M.B.A
{
percentage = total/7.50; 
max = "/750";
}
else if (course=="1F"||course=="5F")//M.C.A
{
percentage = total/8.00; 
max = "/800";
}
  
document.getElementById("total").innerHTML = total;
document.getElementById("max").innerHTML = max;
document.getElementById("percentage").innerHTML = percentage.toFixed(2)+"%";

//change color to red if result has at least one 'F'
if(pass === 'false')
{
 document.getElementById("total").style.color = redColor;
 document.getElementById("percentage").style.backgroundColor = redColor;
}
	 	 
});
	 

	 
