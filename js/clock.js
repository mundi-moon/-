const clock = document.querySelector("h2#clock");



// clock.innerText = "moonyoung";



function getClock(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
  
    // const second = (${date.getSeconds()}.padStart(2,"0"));

    clock.innerText = (`${hour}:${minutes}:${seconds}`);

    // clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    // clock2.innerText = (`${date.getHours()}시${date.getMinutes()}분${date.getSeconds()}초`);
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
   }

   getClock();
   setInterval(getClock, 1000);

//    setTimeout(sayHello, 3000);