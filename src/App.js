import React from "react";
import "./style.css";

let curDate = new Date();
curDate=curDate.getHours();
let greeting=''
let today = new Date().toISOString().slice(0, 10)
var dateObj = new Date()
var weekday = dateObj.toLocaleString("default", { weekday: "long" })
if(curDate>= 1 && curDate < 12) {
greeting ="Good Morning"
}else if(curDate>=12 && curDate<19){
  greeting ="Good AfterNoon"
}else{
  greeting ="Good Night"
}

export default function App() {
  return (
    <div>
      <h1 >{greeting}{today}</h1>
     <h1>{weekday}</h1>
    </div>
  );
}
