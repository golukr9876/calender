let x = document.getElementById("leftarrow");
let y = document.getElementById("rightarrow");

 const mydate = new Date();

let MonthNo = mydate.getMonth();
let presentYear = mydate.getFullYear();

if(MonthNo == 0 || MonthNo == 2 || MonthNo == 4 || MonthNo == 6 || MonthNo == 7 || MonthNo == 9 ||MonthNo == 11){
    nd = 31;
}
else if(MonthNo == 1){
   if(presentYear%4 == 0) nd = 29;
   else nd = 28;
}
else nd = 30;


//month name
monthname = document.getElementById("partMonth");
if(MonthNo == 0) monthname.innerHTML = "January";
else if(MonthNo == 1) monthname.innerHTML = "February";
else if(MonthNo == 2) monthname.innerHTML = "March";
else if(MonthNo == 3) monthname.innerHTML = "April";
else if(MonthNo == 4) monthname.innerHTML = "May";
else if(MonthNo == 5) monthname.innerHTML = "June";
else if(MonthNo == 6) monthname.innerHTML = "July";
else if(MonthNo == 7) monthname.innerHTML = "August";
else if(MonthNo == 8) monthname.innerHTML = "September";
else if(MonthNo == 9) monthname.innerHTML = "October";
else if(MonthNo == 10) monthname.innerHTML = "November";
else if(MonthNo == 11) monthname.innerHTML = "December";



date = mydate.getDate();
DayNo = mydate.getDay() + 1;

//for calculation of min

if(date>=7){
    date = date%7;
    if(date==0) min = DayNo+1;
    else if(date==1) min = DayNo;
    else if(date<7){
        min = DayNo-date+1;
        if(min<1) min = min+7;
    }
}
else if(date==1) min = DayNo;
else if(date<7){
    min = DayNo-date+1;
    if(min<1) min = min+7;
}

console.log("min",min);

//for max

max = min+nd-1;
if(max>35){
    n=42;
}
else n = 35;

let j = 1;




var presentMonth = "";


for(let i=1;i<=n;i++){
    
    if(i%7==0 || i%7 == 1){
        if(i>=min && i<=max){
            if(j==mydate.getDate()){
                presentMonth += `<div class="date hd cd" id="day${i}">${j}</div>`;
                j++;
            }
            else{
                presentMonth += `<div class="date hd" id="day${i}">${j}</div>`;
                j++;
            }
        }
        else presentMonth += `<div class="date hd" id="day${i}"></div>`;

    }
    else {
        if(i>=min && i<=max){
            if(j==mydate.getDate()){
                presentMonth += `<div class="date cd" id="day${i}">${j}</div>`;
                j++;
            }
            else{
                presentMonth += `<div class="date" id="day${i}">${j}</div>`;
                j++;
            }
           
        }
        else presentMonth += `<div class="date" id="day${i}"></div>`;
    }

}



let week = document.getElementsByClassName("week"); 
week[0].innerHTML = presentMonth;

var previousMonth = "";
x.addEventListener('click' , () => {

     //year 
    let year = document.getElementById("year");

    if(MonthNo == 0){ 
        presentYear = presentYear-1;
        MonthNo = 11;
        year.innerHTML = presentYear;
    }
    else MonthNo = MonthNo-1;



    if(MonthNo == 0 || MonthNo == 2 || MonthNo == 4 || MonthNo == 6 || MonthNo == 7 || MonthNo == 9 ||MonthNo == 11){
         nd = 31;
    }
   else if(MonthNo == 1){
        if(presentYear%4 == 0) nd = 29;
        else nd = 28;
   }
   else nd = 30;
    

   //month name
   monthname = document.getElementById("partMonth");
   if(MonthNo == 0) monthname.innerHTML = "January";
   else if(MonthNo == 1) monthname.innerHTML = "February";
   else if(MonthNo == 2) monthname.innerHTML = "March";
   else if(MonthNo == 3) monthname.innerHTML = "April";
   else if(MonthNo == 4) monthname.innerHTML = "May";
   else if(MonthNo == 5) monthname.innerHTML = "June";
   else if(MonthNo == 6) monthname.innerHTML = "July";
   else if(MonthNo == 7) monthname.innerHTML = "August";
   else if(MonthNo == 8) monthname.innerHTML = "September";
   else if(MonthNo == 9) monthname.innerHTML = "October";
   else if(MonthNo == 10) monthname.innerHTML = "November";
   else if(MonthNo == 11) monthname.innerHTML = "December";



   if(min==2){
        max = 35+min-1;
        min = max - nd + 1;
        n = 42;
       }           

   else if(min==3 && nd==31){
        max = 35+min-1;
        min = max - nd + 1;
        n = 42;
       }            

   else{
        if(min == 1) max = 35;
        else  max = 28+min-1;
        min = max - nd + 1;
        n = 35;
    }

      j = 1;
   for(let i=1;i<=n;i++){
    
    if(i%7==0 || i%7 == 1){
        if(i>=min && i<=max){
            if(j==mydate.getDate() && MonthNo==mydate.getMonth() && presentYear==mydate.getFullYear()){
                previousMonth += `<div class="date hd cd" id="day${i}">${j}</div>`;
                j++;
            }
            else{
                 previousMonth += `<div class="date hd" id="day${i}">${j}</div>`;
                 j++;
            }
        }
        else previousMonth += `<div class="date hd" id="day${i}"></div>`;

    }
    else {
        if(i>=min && i<=max){
           if(j==mydate.getDate() && MonthNo==mydate.getMonth() && presentYear==mydate.getFullYear()){
                previousMonth += `<div class="date cd" id="day${i}">${j}</div>`;
                j++;
           }
           else{
                previousMonth += `<div class="date" id="day${i}">${j}</div>`;
                j++;
           }
        }
        else previousMonth += `<div class="date" id="day${i}"></div>`;
    }


   }

  week[0].innerHTML = previousMonth;
    presentMonth = previousMonth;
    previousMonth="";

})







//for next month
let NextMonth = "";


y.addEventListener('click' , () => {

    //year 
    let year = document.getElementById("year");
    if(MonthNo == 11){ 
    presentYear = presentYear+1;
    MonthNo = 0;
    year.innerHTML = presentYear;
    }
    else MonthNo = MonthNo+1;


    // no. of days in month
    if(MonthNo == 0 || MonthNo == 2 || MonthNo == 4 || MonthNo == 6 || MonthNo == 7 || MonthNo == 9 ||MonthNo == 11){
    nd = 31;
    }
    else if(MonthNo == 1){
    if(presentYear%4 == 0) nd = 29;
    else nd = 28;
    }
    else nd = 30;

    //month name
    monthname = document.getElementById("partMonth");
    if(MonthNo == 0) monthname.innerHTML = "January";
    else if(MonthNo == 1) monthname.innerHTML = "February";
    else if(MonthNo == 2) monthname.innerHTML = "March";
    else if(MonthNo == 3) monthname.innerHTML = "April";
    else if(MonthNo == 4) monthname.innerHTML = "May";
    else if(MonthNo == 5) monthname.innerHTML = "June";
    else if(MonthNo == 6) monthname.innerHTML = "July";
    else if(MonthNo == 7) monthname.innerHTML = "August";
    else if(MonthNo == 8) monthname.innerHTML = "September";
    else if(MonthNo == 9) monthname.innerHTML = "October";
    else if(MonthNo == 10) monthname.innerHTML = "November";
    else if(MonthNo == 11) monthname.innerHTML = "December";


    if(max==34 && nd>29){
        min = 7;
        max = nd+min-1;
        n = 42;
    } 
    else if(max==33 && nd==31){
        min = 6;
        max = min+nd-1;
        n = 42;
    }    
    else{
        if(max==35) min = 1;
        else if(max>35) min = max -34;
        else min = max-27;
        max = min+nd-1;
        n = 35;
    }

    j = 1;
    for(let i=1;i<=n;i++){

        if(i%7==0 || i%7 == 1){
            if(i>=min && i<=max){
                if(j==mydate.getDate() && MonthNo==mydate.getMonth() && presentYear==mydate.getFullYear()){
                    NextMonth += `<div class="date hd cd" id="day${i}">${j}</div>`;
                    j++;
                }
                else{
                    NextMonth += `<div class="date hd" id="day${i}">${j}</div>`;
                    j++;
                }
            }
            else NextMonth += `<div class="date hd" id="day${i}"></div>`;

        }
        else {
            if(i>=min && i<=max){
                if(j==mydate.getDate() && MonthNo==mydate.getMonth() && presentYear==mydate.getFullYear()){
                    NextMonth += `<div class="date cd" id="day${i}">${j}</div>`;
                    j++;
                }
                else{
                    NextMonth += `<div class="date" id="day${i}">${j}</div>`;
                    j++;
                }
            }
            else NextMonth += `<div class="date" id="day${i}"></div>`;
        }

    }


    week[0].innerHTML = NextMonth;
    presentMonth = NextMonth;
    NextMonth="";

})




