import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import foxImg from './assets/foxes4ev.png'

const Box = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Title: {props.title}</p>
      <p>Age: {props.age}</p>
    </div>
  )
}

const name = "Alex Tran";
const firstPage = 2016;
const Demo = () => {
  return (
  <div>
    <img src={foxImg} alt="Image of a fox" />
    <h1>Hello my name is {name}</h1>
    <p>I have <b>{2024 - firstPage} years</b> of building websites experience</p>
    <Box name="A" title="a" age="19"/>
    <Box name="B" title="b" age="23"/>
    <Box name="C" title="c" age="26"/>
    <Box name="d" title="d" age="20"/>
  </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>,
)
