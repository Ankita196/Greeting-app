import React from 'react';
import './style.css';

let curDate = new Date();
curDate = curDate.getHours();

let greeting = '';
let quote=''
let todayDate = new Date().toISOString().slice(0, 10);
var dateObj = new Date();
var h = dateObj.toLocaleTimeString();

var weekday = dateObj.toLocaleString('default', { weekday: 'long' });
if (curDate >= 1 && curDate < 12) {
  greeting = 'Good Morning';
} else if (curDate >= 12 && curDate < 19) {
  greeting = 'Good AfterNoon';
} else {
  greeting = 'Good Night';
}
if(weekday=="Monday"){
  quote="Uth ja sunday khtm ho gya"
}else if(weekday=='Sunday'){
  quote="aaj to holiday hai"
}else if(weekday=='Tuesday'){
  quote="aaj to Riya ki class hai"
}else if(weekday=='Wednesday'){
  quote="chlo adha week khtm ho jayega aaj"
}else if(weekday=='Thursday'){
  quote="Aaj bhi Riya ki class hai"
}else if(weekday=='Friday'){
  quote="finally weekend hone me ek din baki hai"
}else{
  quote="Aj krle kl to holiday hi hai"
}


export default function App() {
  return (
    <div>
      <h1>Hello Dear ,It's  {weekday}</h1>
      <h1>{quote}</h1>
      <h1>Todays  Date :{todayDate}</h1>
     <h8>refresh kr agar current time dekhna hai to</h8>
      <h1>{h}</h1>
    </div>
  );
}
