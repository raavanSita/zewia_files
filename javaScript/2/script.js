
for (i = 2014; i <= 2050; i++) {
   let date = new Date(i, 0, 1);
   if (date.getDay() === 0) {
      var r = r + ","+ date.getFullYear();
   }
   
}
function alt() {
   document.getElementById('ans').innerHTML =  r;
}
