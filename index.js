  
function time(){  
   let  date = new Date();
   let hh=date.getHours();
   let mm=date.getMinutes();
   let ss=date.getSeconds();
   let sess="AM";

   if(hh==0){
       hh=12;
   }
   if(hh>12){
       hh=hh-12;
       sess="PM";
   }
   if(ss==0){
       ss=1;     
   }
   if(mm==0 ){
       mm=1;
   }
 
   let colon=" :"
   document.getElementById('hours').innerHTML=hh + colon;
   document.getElementById('minutes').innerHTML=mm + colon;
   document.getElementById('seconds').innerHTML=ss + colon;
   document.getElementById('session').innerHTML=sess;
}
 

setInterval(time,1000);
   

   
  

