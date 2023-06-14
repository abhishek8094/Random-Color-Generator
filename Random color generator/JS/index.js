const getColor= ()=>{
    //Hex Code 
    const randomNumber=Math.floor(Math.random()*16777215) 
    const randomCode="#" + randomNumber.toString(16);
    document.body.style.backgroundColor=randomCode;
    document.getElementById("color-code").innerText=randomCode;

    // if I click the click Me then it will be  copy  to myclipboard
         navigator.clipboard.writeText(randomCode)
}

//Event call
document.getElementById("btn").addEventListener(
"click",
getColor
)

// intial call
getColor();