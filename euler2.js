
var previous = 0;
var current = 1;
var next;

   for(i = 1; i < 100; i++){
        next = current + previous;
        previous = current;
        current = next; 
        if(current % 2 === 0 && current < 4000000) {
        console.log(current);
        }
   }
