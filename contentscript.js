 //code for obtaining course by scanning the table
 var table = document.getElementsByTagName("table")[2];
 var id = table.children[0].children[1].children[2].innerHTML;
 
 //code for getting course from ID.NO 
  var course = id[4]+id[5];
  var n;
 
if(course=="1A"||course=="5A")//B.Tech
{
 n=8;
 }
else if (course=="1D"||course=="5D")//M.Tech
 {
 n=7;
 }
else if (course=="1E"||course=="5E")//M.B.A
{
n=8;
}
else if (course=="1F"||course=="5F")//M.C.A
{
n=8;
}
  

//code for obtaining marks by scanning the table
var table = document.getElementsByClassName("collapse")[0];

var rows = table.getElementsByTagName("tr").length;

if(rows==8) //check for fourth year, because of only 7 subjects
{
	n=7;
}

var marks = new Array();

 for(var i=0;i<n;i++) 
   marks[i] = table.children[0].children[i+1].children[5].innerHTML;
 
 var total=0;
 for(var i=0;i<n;i++)
   total += Number(marks[i]);

 //code for checking the result (P or F)
var pass = true;
var table = document.getElementsByClassName("collapse")[0];

 for(var i=0;i<n;i++) 
 {
   if( table.children[0].children[i+1].children[7].innerHTML == 'F')
   {
      pass = false;  
	  break;
   }
 }   
   
   
 //code to send the data to background.js
var message= course+"$"+total+"$"+pass;

chrome.runtime.sendMessage(message);
