import logo from './logo.svg';
import './App.css';
import Profile from './About';
import Home from './Home';
import Contact from './Contact';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  
  // const style={
  //   'padding': '10px 12px',
  //   'border': '1px solid #000',
  //   'background-color':' red',
  //  ' border-radius':' 1px',
  //   'color': '#fff',
  // }

  const mystyle = {
    // color: "white",
    // backgroundColor: "DodgerBlue",
    // padding: "10px",
    // fontFamily: "Arial"
    padding:"10px 12px",
    border:"1px solid #000",
    backgroundColor:"red",
    borderRadius:"1px",
    color:"#fff",
  };
  const [count, setCount] = useState(0);
  function handleClick() {
    // alert('You clicked me!');
    setCount(count + 1);
  }

  function MyButton() {
    return (
      <button style={mystyle} onClick={handleClick}>
        I'm a button  Clicked {count} times
      </button>
    );
  }
  const products = [
    { title: 'Cabbage',isFruit: false, id: 1 },
    { title: 'Garlic',isFruit: false, id: 2 },
    { title: 'Apple',isFruit: true,id: 3 },
  ];

  const listItems = products.map(product =>
    <li key={product.id}  style={{
      color: product.isFruit ? 'magenta' : 'darkgreen'
    }}>
      {product.title}
    </li>
  );

  return (
    <div className="row">
      
      {/* <div className='col-md-4'>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </div>
      <div className='col-md-4'>
        <MyButton/>
       
      </div>
      <ul>{listItems}</ul>
      <h1>Amazing scientists</h1>
      <Profile/>
      <Profile/>
      <Profile/>
      <Profile/>
      <Profile/>
      <Profile/>
      <Profile/>
      <Profile/>
      <Profile/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home/>}>Home</Route>
            <Route path='/Profile' element={<Profile/>}>About</Route>
            <Route path='/Contact' element={<Contact/>}>Contact</Route>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
