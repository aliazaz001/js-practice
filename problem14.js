//Using a month number (1-12), determine which season that month falls in (Winter, Summer, Monsoon, etc.).
let month=11;
if(month===12||month===1){
    console.log("winter");
}
else  if (month===2||month===3){
    console.log("Spring");
}
else  if (month===4||month===5){
    console.log("Summer");
}
else  if (month===6||month===7){
    console.log("Moonsoon");
}
else  if (month===8||month===9){
    console.log("Autunm");
}
else  if (month===10||month===11){
    console.log("Late Atumn");
}

else{
    console.log("invalid month ");
}