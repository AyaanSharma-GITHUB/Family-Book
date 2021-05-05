var images = ["images.jpg" ,"GRANDPA.png" , "GRANDMA.jpg" , "DAD.jpg" , "MOM.jpg" , "CHACHU.jpg" , "LIL BRO.jpg" , "BIG BRO.jpg"];

var names = ["" ,"GRANDPA" , "GRANDMA" , "DAD" , "MOM" , "CHACHU" , "LIL BRO" , "BIG BRO"];

var a = 0;
var i = 0;

function ns(){

    document.getElementById("mc").src=images[a];
  a++;
if (a == 8)
 {
   a=0;
 }

 document.getElementById("em").innerHTML=names[i];
  i++;
if (i == 8)
 {
   i=0;
 }

}