import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
const NAME = "MUHAMMAD AZEEM";
const DATE = new Date().toLocaleDateString();
const TIME = new Date().toLocaleTimeString();


const stylecss = {

}
let curdate = new Date();
curdate = curdate.getHours();
let show = " ";
if (curdate >= 1 && curdate <= 12) {
  show = "GOOD MORNING,  ";
  stylecss.color = "green";
} else if (curdate >= 12 && curdate < 19) {
  show = "GOOD AFTERNOON,  ";
  stylecss.color = "yellow";
} else {
  show = "GOOD NIGHT,  "
  stylecss.color = "blue";
}






ReactDOM.render(
  <>
    <h1 className="heading">My name is {NAME}. </h1>
    <p className="date">Current DATE is = {DATE}</p>
    <p className="time">Current Time is = {TIME}</p>
    <h1 className="heading1"><span style={stylecss}>{show}</span>"MUHAMMAD AZEEM"</h1>
  </>,
  document.getElementById("root")
);