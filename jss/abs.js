 "use strict";//prevents the declaration of elemenys not initialisedb
 //debugger;
   function helloworld(){//all function are loaded at the compile time so is observed, hence is running in the console
   	alert("hello world");//global function
   } 
    console.log("hello world")
    var helloworld2=function(){//variable loaded only at execution 
    	alert("helloworld2");
    	    }
   
   var kaushik ="hello";//global variable
   function testing(){
   	var pp="bye"; //local variable
   	q=1;//global and may overide if earlier defined 
   } 	    
   var str="hello hello hello aman";
   console.log(str.length);
   console.log(str.split(","));
   console.log(str.replace("hello","bye"));
   var array =[1,2,3,4];
   console.log(array.toString());
   //toString applicable for all data type

   console.log(array.splice(0,2));//from position 0 delete 2 elements and return those  delete elemets
   console.log(array[0]);
    console.log(array.splice(0,0,2,3));//removing 0 elemets from 0 and inserting 2,3
    console.log(array.indexOf(3));//return the first index of the elements
    console.log(array.push(5));// pushing elements to the last of the array
 array.pop();
 var array2=[22,11,44,77];
 console.log(array.concat(array2));
for(var i=0;i<array.length;i++){
  console.log(array[i]);
}
var stt=[3,5,2,4,9];
for(var i=0;i<stt.length;i++){
    var key=stt[i];
    while(i>0&&stt[i-1]>stt[i]){
      var temp=stt[i];
      stt[i]=stt[i-1];
      stt[i-1]=temp;
      i--;
    }
}
 var cnt=0;
var st1="110101";
var st2="110000";
for(var i=0;i<st1.length;i++){
 if(st1[i]!=st2[i]){
  cnt++;
 }
}
console.log(cnt);
// json java script object notation
// can give some property of oop in the java script
//very imp can be used for data storage like login password
var myjson={name:"ankita"};
myjson.age=21;
myjson.proff="student";
console.log(myjson);
console.log(JSON.stringify(myjson));
