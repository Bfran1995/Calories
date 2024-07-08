const d = new Date(); // get current date
const hour = d.getHours(); // get current hour
const minute = d.getMinutes(); // get current minute
const second = d.getSeconds();
  if (hour < 12 && minute < 59)
    console.log(`good morning and the time is ${hour}:${minute}:${second}`);
  else if (hour < 16)
    console.log(`good afternoon and the time is  ${hour}:${minute}:${second}`);
  else if (hour < 24)
    console.log(`good evening and the time is  ${hour}:${minute}:${second}`);