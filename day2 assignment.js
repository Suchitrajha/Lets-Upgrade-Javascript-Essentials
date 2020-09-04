//q1 : program to search for a prticular chracter in a string

let str ="Hello World";
let str1 =str.charAt(6);
console.log(str1);

// output got = W


//qn2.program to convert minutes to seconds

function convertMinutestoSeconds(minutes)
{
  return Math.floor(minutes * 60);
}
let minutesToSeconds =convertMinutestoSeconds(2);
console.log(minutesToSeconds);

// output got = 120



//qn5. print an array in reverse order

let array =[0,1,2,3,4,5,6,7];
let array1 = array.reverse();
console.log(array1)

// output got = [7,6,5,4,3,2,1,0]


// q3 :program to search an element in a array of string
let array3=["arc","mar","car"];
let num=prompt("enter element to search","<name goes here>");
let i=0,count=0;
for(i=0;i<array3.length;i++){
if(array3[i]==num){
       count++
}
}
if(count==1){
    console.log("found "+num);
}
else{
    console.log("not found");
}

   

// output = as user on giving input "car" output showed = found car
// as user on giving input "ghost"  output showed = not found

     
//qn 4 :Program to display only elements containing 'a' in them from array

let x=prompt("enter size");
let a = new Array();
for( i=0;i<x;i++)
{
    a[i]=prompt("enter the string");
}
for(i=0;i<x;i++){
    for( var j=0;j<a[i].length;j++){
        if(a[i][j]=='a'){
            console.log(a[i]);
        }
    }
}

// output= as user gave size =3
// then gave : array, apple ,bus
// output showed was : array , apple