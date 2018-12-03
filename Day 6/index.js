
function calculate(myLocation, myLocation2, myLocation3){

    var myName = "This is stackup, at" + " " + myLocation + " " + myLocation2
    
    console.log(myName);
}

calculate("Singapore","Outram");

function getMyFullName(){

    var firstNamee="Ash";
    var lastNamee="Ketchup";
    var fullName= firstNamee + " " + lastNamee;
    return fullName;   
}


function greet(firstName, lastName, bornYear ){
    var age = 2018 - bornYear
    var person = "Hello, " + firstName + " " + lastName + " " +  age; 
    console.log(person)
}

greet( "Michael", "Jordan" , 1993 )
greet( "Mauro", "Icardi" ,  1992)
greet( "Lionel", "Messi", 1991 )

function testMe(){
    alert(getMyFullName())
}