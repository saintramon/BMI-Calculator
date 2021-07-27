var kg = document.getElementById("kilograms")
var lbs = document.getElementById("pounds")
var btn = document.getElementById("btn")
var height = document.getElementsByClassName("height")




function pounds(){
 kg.style.left = "-300px"
 lbs.style.left = "0px"
 btn.style.left = "118px"

 function calcpounds(){
     var heightLbs = document.getElementById("heightLbs").nodeValue;
     var weightLbs = document.getElementById("weightLbs").nodeValue;

     let finalWeightlbs = weightLbs * 0.453592;
     let finalHeightlbs = heightLbs * 0.01;

     let finalBMILbs = finalWeightlbs / (finalHeightlbs)^2;

     if (finalBMILbs < 18.5){
         
     }

     

 }
}
function kilograms(){
    kg.style.left = "0px"
    lbs.style.left = "300px"
    btn.style.left = "0px"
}
    