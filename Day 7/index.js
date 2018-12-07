
//to get value of html element
//document.getElementById("firstNumber").value;
//document.getElementById("secondNumber").value;


//to display value
//document.getElementById("result").value="";

function calculate(){
    var a;
    var b;
    var add;
    var op;

    a = parseInt(document.getElementById("firstNumber").value);
    b = parseInt(document.getElementById("secondNumber").value);
    op = document.getElementById("operator").value;
    if(op=="+"){
         add = a + b;
    }
    else if(op=="-"){
         add = a - b;
    }
    else if(op=="*"){
        add = a * b
   }

   else if(op=="/"){
        add = a / b;
    }
    document.getElementById("result").value = add;
}

 
var greet;

if(greet=="morning"){
    console.log("This is Morning")
}
else if(greet=="afternoon"){
    console.log("This is Afternoon")
}
else if(greet=="evening"){
    console.log("This is Evening")
}

else{
    console.log("Night Time")
}



var greetings = ["Morning","Afternoon","Evening",];
console.log(greetings);
console.log(greetings.length);
console.log(greetings[1]);

var primeNumber = [1,3,5,7,9,11,13];
var step = 0;
while( step < primeNumber.length){
    console.log(primeNumber[step]);
    step = step + 1;
    
}


var numbers = [1,2,3,4,5,6,7,8,9,10];
//if even number -> "Even Number"
// -> "Not even Number"

// while + if else

step = 0;
while(step<numbers.length){
    var isEven = numbers[step] % 2;

    if(isEven ==0 ) {
        console.log(numbers[step] + " " + "is even number");
    }
    else{
        console.log(numbers[step] + " " + "is not even number");
    }

    step = step + 1;
}


var numbers2= [1,2,3,4,5,6,7,8,9,10]

for (var aa = 0; aa < numbers2.length; aa++){

    var isEven2 = numbers2[aa] % 2;

    if(isEven2 == 0){ 
    console.log(numbers2[aa] + " " + "is an even number");
    } 
    else{
        console.log(numbers2[aa] + " " + "is an odd number");
    }

}       


var collections = [];
console.log(collections);
collections.push ("Test");
console.log(collections);
collections.push("Test2");
console.log(collections);


var myCollections =[ ];
function addMe(){
    var myText= document.getElementById("my_text").value;

    myCollections.push(myText);
    document.getElementById("myResult").innerHTML=""; //add in later
    for(var ab = 0; ab < myCollections.length; ab++){
        var currValue = myCollections[ab] + "<br>";
        var currResultValue = document.getElementById("myResult").innerHTML

        document.getElementById("myResult").innerHTML=currResultValue + currValue;
    }

}