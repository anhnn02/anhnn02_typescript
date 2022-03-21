import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import '../output.css'
import App from './App'

const myName: string = "Anh";
const stt:  boolean = true;
const myAge: number = 20;
const product: {id: number, name: string} = {id: 1, name: "A"};


ReactDOM.render(
  <div>
    <BrowserRouter><App /></BrowserRouter>
  </div>,
  document.getElementById('root')
);
