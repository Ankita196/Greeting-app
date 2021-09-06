import React from "react";
import "./style.css";

let curDate = new Date();
curDate=curDate.getHours();
let greeting=''

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
      <h1>{greeting}</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
