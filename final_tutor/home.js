

var myCarts= [];
//only when have more than 1
var totalPayable=0;

function addToCart(exPrice, exProductName){
    var myQuantity= document.getElementById("Quantity").value
    var price = exPrice;
    var productName = exProductName;
    var totalPrice = parseInt(myQuantity) * price; 
    var item = productName + " x" + myQuantity + " $" + totalPrice;
    
    //only when have more than 1
    totalPayable= totalPayable + totalPrice;

    myCarts.push(item);


    //display it:

    document.getElementById("my_shopping_cart").innerHTML=""
    for (var a =0 ; a< myCarts.length; a++){
        var currItem=myCarts[a] + "<br>";
        var currResult= document.getElementById("my_shopping_cart").innerHTML;

        document.getElementById("my_shopping_cart").innerHTML= currResult + currItem;
    }

    // display total payable: 
    document.getElementById("totalPayable").value = totalPayable;


}

function payNow(){
    var grandTotal= document.getElementById("totalPayable").value;
    var inputAmount = document.getElementById("inputAmount").value;

    grandTotal=parseInt(grandTotal);
    inputAmount=parseInt(inputAmount);

    if(inputAmount>=grandTotal){
        var change= inputAmount - grandTotal
        document.getElementById("changeGiven").value=change;
    }
    else{
        alert("unable to pay");
    }
}