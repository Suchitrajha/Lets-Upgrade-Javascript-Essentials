// q1 : code for ques 1 

function changeimage(){
    const ele=document.getElementsByClassName("base");
    const newurl="https://i2-prod.mirror.co.uk/incoming/article5189893.ece/ALTERNATES/s1200/Fashion-designer-using-sewing-machine.jpg";
    ele[0].src=newurl;

}

function changeimageagain(){
    const eles=document.getElementsByClassName("base");
    
    eles[0].src= "https://th.bing.com/th/id/OIP.0yx87-PDh_8mZ6d5IDkbwQHaEK?w=290&h=180&c=7&o=5&pid=1.7";
}

function realimage(){
    const element=document.getElementsByClassName("base");
    const newurl="https://th.bing.com/th/id/OIP.ZocUPYXu2eWRNnL2HqRpaQHaE8?w=219&h=180&c=7&o=5&pid=1.7";
    element[0].src=newurl;
   
}

// q2 : code for question 2

function copyinput(){
    const ele=document.getElementsByClassName("input");
    ele[1].value=ele[0].value;
    
}

// q3 : Code for question 3
 let weapons= [
     { 
        name:"sinchan",
        age:9,
        country:"japan",
        hobbies:[" playing ","dancing"],
    },
    
    {
     name:"hima",
     age:31,
     country:"india",
     hobbies:[" potpanting","gardening"],
    },
];



 weapons.forEach(myFunction);

 function myFunction(item, index) {
  for (let key in item) {
    console.log(item[key])
  }
 }

// q4 code for question 4

weapons.forEach(newfunc);
function newfunc(item,index){
    for(let check in item)
    {
        if(item.age<30 )
        console.log(item[check]);
    }
}
weapons.forEach(newfunccountry);
function newfunccountry(item,index){
    for(let check in item)
    {
        if(item.country=="india")
        console.log(item[check]);
    }
}






