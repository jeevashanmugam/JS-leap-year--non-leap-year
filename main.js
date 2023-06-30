let month = parseInt(prompt("Enter the month"));
let year = parseInt(prompt("Enter the year"));


if((month==1)||(month==3)||(month==5)||(month==7)
||(month==8)||(month==10)||(month==12)){
console.log(month + " month have 31 day's");
}

else if ((month==4)||(month==6)||(month==9)||(month==11)){
console.log("This month have 30 day's");
}

else if(month==2){
				if((year%4==0)&&(year%100!=0)||(year%400==0)){
 		         console.log(year +" this a leap year");
             console.log(month + " month have 29 day's");
 		    }
 		    else {
 		         console.log(year +" this a non-leap year")
             console.log(month + " month have 28 day's");
 		    }
}

else {
console.log("Invalid months/year")
}


								/* using switch case*/
                
switch(true){
  case((month==1)||(month==3)||(month==5)||(month==7)
        ||(month==8)||(month==10)||(month==12)):
    console.log(month + " month have 31 day's");
    break;
    
    case((month==4)||(month==6)||(month==9)||(month==11)):
    console.log("This month have 30 day's");
    break;
    
    case(month==2):
        if((year%4==0)&&(year%100!=0)||(year%400==0)){
              console.log(year +" this a leap year");
             console.log(month + " month have 29 day's");
         }
         else {
              console.log(year +" this a non-leap year")
             console.log(month + " month have 28 day's");
         }
        break;
    default:
    console.log("Invalid months/year");

} 
