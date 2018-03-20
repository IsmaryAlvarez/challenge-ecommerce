import React,  { Component } from "react";
import ReactDOM from "react-dom";
import {catalog} from './../../../data/mock.json'

const App = ({ message }) => <div>{ message }</div>;

const ListItem = ({imageURL, name, currency, price}) =>
catalog.map((data) =>
<div className="producto">
 <img src={ data.imageURL } width="150px" height="150px" alt="placeholder+image"/>
  <p>{data.name}</p>
  <p>{data.currency}{data.price}</p>
  <button>Add to Cart</button>
</div>
);




ReactDOM.render(<ListItem/>, document.getElementById("Productos"));
ReactDOM.render(<App message="Product List" />, document.getElementById("app"));

